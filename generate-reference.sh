#!/bin/bash
set -e # Exit immediately if a command exits with a non-zero status.

# Variable Definitions
TEMP_PATH='./temp'
BRANCH_NAME=$1
REPO_NAME=$2
OUTPUT_PATH_EN="../src/pages/docs/en/$REPO_NAME/reference"
OUTPUT_PATH_JA="../src/pages/docs/ja/$REPO_NAME/reference"
REPO_URL="git@github.com:golemfactory/$REPO_NAME.git"

# Cloning Repository to Temporary Path
if [ -d "$TEMP_PATH" ]; then rm -Rf $TEMP_PATH; fi
git clone $REPO_URL $TEMP_PATH

# Entering cloned Repository
cd $TEMP_PATH

# Switching to Desired Branch
git checkout $BRANCH_NAME

# If Branch is Master or Main, then change it to latest
[ $BRANCH_NAME = "master" ] || [ "$BRANCH_NAME" = "main" ] && BRANCH_NAME="latest"

# Function to find the correct path for a file
find_file() {
    local file=$1
    if [ -f ".docs/$file" ]; then
        echo ".docs/$file"
    elif [ -f ".typedoc/$file" ]; then
        echo ".typedoc/$file"
    else
        echo "Error: $file not found in .docs or .typedoc directories" >&2
        exit 1
    fi
}

# Find the correct paths for required files
TYPEDOC_THEME=$(find_file "typedoc-frontmatter-theme.cjs")
SUMMARY_GENERATOR=$(find_file "summary-generator.cjs")

# Set TypeDoc parameters
TYPEDOC_PARAMS="src/ --plugin typedoc-plugin-markdown --plugin $TYPEDOC_THEME --hideBreadcrumbs true"

# Installing Necessary Dependencies
npm install --force

# If current API reference exist for branch, then remove it to ensure that we don't keep old files.
if [ -d "$OUTPUT_PATH_EN" ]; then rm -Rf $OUTPUT_PATH_EN; fi
if [ -d "$OUTPUT_PATH_JA" ]; then rm -Rf $OUTPUT_PATH_JA; fi

# Generate TypeDoc for English
npx typedoc $TYPEDOC_PARAMS --out $OUTPUT_PATH_EN

# Generate TypeDoc for Japanese
npx typedoc $TYPEDOC_PARAMS --out $OUTPUT_PATH_JA

# Generate Summary for English
node $SUMMARY_GENERATOR $OUTPUT_PATH_EN $OUTPUT_PATH_EN

# Generate Summary for Japanese
node $SUMMARY_GENERATOR $OUTPUT_PATH_JA $OUTPUT_PATH_JA

# Exit to Parent Directory
cd ..

# Generate Typedoc
node generateTypedoc.mjs ${BRANCH_NAME} ${REPO_NAME}

# File and Content Definition for Meta.js
file="src/navigation/meta.js"
content="export const latestJSVersion = '${BRANCH_NAME}'"

# Removing old content and Writing New Content in Meta.js
rm -f $file && echo $content >$file

# Removing Temporary Path
rm -Rf $TEMP_PATH