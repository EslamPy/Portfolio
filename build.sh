#!/bin/bash
# Install the missing dependencies directly
npm install --no-save @rollup/rollup-linux-x64-gnu
npm install --no-save @esbuild/linux-x64
# Then run the build
node ./node_modules/vite/bin/vite.js build 