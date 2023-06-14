#!/bin/bash
BASEDIR=/data/judaicalink/web.judaicalink.org
HTDOCS=$BASEDIR/htdocs
WORKDIR=$BASEDIR/judaicalink-site
BRANCH=master

pushd $WORKDIR
git fetch origin $BRANCH
CHANGES=`git status -s -b -uno`
if [ "$CHANGES" != "## $BRANCH...origin/$BRANCH" ]; then
        echo "Found updates, rebuilding site."
        git merge origin/$BRANCH
        hugo  --cleanDestinationDir && rsync -avz --delete public/ $HTDOCS
        #/data/judaicalink/loader.sh
else
        echo "No changes, exiting"
fi
popd
