#!/bin/bash
BASEDIR=/data/judaicalink/web.judaicalink.org
HTDOCS=$BASEDIR/htdocs
WORKDIR=$BASEDIR/judaicalink-site
BRANCH=master

pushd $WORKDIR
git fetch origin $BRANCH
git merge origin/$BRANCH
hugo  --cleanDestinationDir && rsync -avz --delete public/ $HTDOCS
popd
