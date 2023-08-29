#!/bin/bash

REPO_URL='https://github.com/golemfactory/golem-js.git'
TEMP_PATH='./temp'
BRANCH_PREFIX='b0'
BRANCH_FORMAT="^${BRANCH_PREFIX}\\.\\d+$"
OUTPUT_PATH_RELATIVE='../src/pages/docs/golem-js/reference'
TYPEDOC_PARAMS='golem-js/ --plugin typedoc-plugin-markdown'

git clone $REPO_URL $TEMP_PATH

cd $TEMP_PATH

for branch_name in $(git branch -r | cut -d/ -f2- | grep -E $BRANCH_FORMAT); do
    # Get the branch number as a floating point number
    branch_num=$(echo $branch_name | cut -d 'b' -f 2)

    # Check if the branch number is >= 0.3
    if (($(echo "$branch_num >= 0.7" | bc -l))); then
        echo "Switching to branch ${branch_name}..."
        git checkout $branch_name

        echo "Installing dependencies for branch ${branch_name}..."
        cd golem-js
        npm install --force
        cd ..
        pwd

        OUTPUT_PATH="${OUTPUT_PATH_RELATIVE}/${branch_name}"
        echo "Generating typedoc for branch ${branch_name}... at ${OUTPUT_PATH}"
        echo "typedoc $TYPEDOC_PARAMS --out $OUTPUT_PATH"
        npx typedoc $TYPEDOC_PARAMS --out $OUTPUT_PATH
        cd ..
        node generateTypedoc.mjs ${branch_name}

        echo "TypeDoc GENERATED for branch ${branch_name}"
    fi
done

cd ..

rm -rf $TEMP_PATH
