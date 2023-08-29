#!/bin/bash

REPO_URL='https://github.com/golemfactory/golem-js.git'
TEMP_PATH='./temp'
BRANCH_PREFIX='b0'
BRANCH_FORMAT="^${BRANCH_PREFIX}\\.\\d+$"
OUTPUT_PATH_RELATIVE='../src/pages/docs/golem-js/reference'
TYPEDOC_PARAMS='src/ --plugin typedoc-plugin-markdown --plugin .docs/typedoc-clear-references.cjs --hideBreadcrumbs true'
BRANCH_NAME="support-new-docs"
git clone $REPO_URL $TEMP_PATH

cd $TEMP_PATH

echo "Switching to branch ${BRANCH_NAME}..."
git checkout $BRANCH_NAME

echo "Installing dependencies for branch ${BRANCH_NAME}..."
npm install --force
cd ..
pwd

OUTPUT_PATH="${OUTPUT_PATH_RELATIVE}/${BRANCH_NAME}"
echo "Generating typedoc for branch ${BRANCH_NAME}... at ${OUTPUT_PATH}"
pwd
cd $TEMP_PATH
npx typedoc $TYPEDOC_PARAMS --out $OUTPUT_PATH
node .docs/summary-generator.cjs $OUTPUT_PATH $OUTPUT_PATH
cd ..
node generateTypedoc.mjs ${BRANCH_NAME}

echo "TypeDoc GENERATED for branch ${BRANCH_NAME}"

# rm -rf $TEMP_PATH
