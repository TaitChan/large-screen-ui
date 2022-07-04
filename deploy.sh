#!/usr/bin/env sh
# 当发生错误时中止脚本
set -e

# 构建
yarn build

# cd 到构建输出的目录下
cd dist

git init
git add -A
git commit -m 'deploy'

# 部署
git push -f git@github.com:TaitChan/large-screen-ui.git master:gh-pages

cd -