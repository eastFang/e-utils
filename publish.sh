#!/bin/bash
versionInfo = ${1:-'版本发布'}
npm version patch -m ${versionInfo}
git push origin master --tags
npm publish