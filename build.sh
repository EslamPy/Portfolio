#!/bin/bash
# Install the missing Rollup dependency directly
npm install --no-save @rollup/rollup-linux-x64-gnu
# Then run the build
node ./node_modules/vite/bin/vite.js build 