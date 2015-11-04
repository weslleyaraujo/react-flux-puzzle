#!/usr/bin/env bash
export HOSTNAME FILENAME BUILD_DIR

HOSTNAME=http://weslleyaraujo.github.io/react-flux-puzzle
FILENAME=index.html
BUILD_DIR=dist

cp $FILENAME $BUILD_DIR
./node_modules/replace/bin/replace.js \/$BUILD_DIR $HOSTNAME $BUILD_DIR/$FILENAME
./node_modules/replace/bin/replace.js \/$BUILD_DIR $HOSTNAME $BUILD_DIR/assets/css/main.css
./node_modules/replace/bin/replace.js \/$BUILD_DIR $HOSTNAME $BUILD_DIR/assets/js/index.js

