#!/bin/bash
set -e # Exit immediately if a command exits with a non-zero status.

# Variable Definitions
TEMP_PATH='./temp'
TYPEDOC_PARAMS='src/ --plugin typedoc-plugin-markdown --plugin .typedoc/typedoc-frontmatter-theme.cjs --hideBreadcrumbs true'
BRANCH_NAME=$1
REPO_NAME=$2
OUTPUT_PATH="../src/pages/docs/$REPO_NAME/reference"
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

# Installing Necessary Dependencies
npm install --force

# Exit to Parent Directory
cd ..

# Enter Temporary Path
cd $TEMP_PATH

# If current API reference exist for branch, then remove it to ensure that we don't keep old files.
if [ -d "$OUTPUT_PATH" ]; then rm -Rf $OUTPUT_PATH; fi

# Generate TypeDoc
npx typedoc $TYPEDOC_PARAMS --out $OUTPUT_PATH

# Generate Summary
node .typedoc/summary-generator.cjs $OUTPUT_PATH $OUTPUT_PATH

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
