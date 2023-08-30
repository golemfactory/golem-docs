#!/bin/bash

# Variable Definitions
REPO_URL='https://github.com/golemfactory/golem-js.git'
TEMP_PATH='./temp'
OUTPUT_PATH_REL='../src/pages/docs/golem-js/reference'
TYPEDOC_PARAMS='src/ --plugin typedoc-plugin-markdown --plugin .docs/typedoc-clear-references.cjs --hideBreadcrumbs true'
BRANCH_NAME=$1

# Cloning Repository to Temporary Path
git clone $REPO_URL $TEMP_PATH

# Entering cloned Repository
cd $TEMP_PATH

# Switching to Desired Branch
git checkout $BRANCH_NAME

# Installing Necessary Dependencies
npm install --force

# Exit to Parent Directory
cd ..

# Define Output Path
OUTPUT_PATH="${OUTPUT_PATH_REL}/${BRANCH_NAME}"

# Enter Temporary Path
cd $TEMP_PATH

# Generate TypeDoc
npx typedoc $TYPEDOC_PARAMS --out $OUTPUT_PATH

# Generate Summary
node .docs/summary-generator.cjs $OUTPUT_PATH $OUTPUT_PATH

# Exit to Parent Directory
cd ..

# Generate Typedoc
node generateTypedoc.mjs ${BRANCH_NAME}

# File and Content Definition for Meta.js
file="src/navigation/meta.js"
content="export const latestJSVersion = '${BRANCH_NAME}'"

# Removing old content and Writing New Content in Meta.js
rm -f $file && echo $content >$file
