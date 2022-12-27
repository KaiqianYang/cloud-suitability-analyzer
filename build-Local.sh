#!/bin/bash
set -ex

echo "~~~> Requested OS builds..: $1"
echo "~~~> Version..............: $2"
export OS=$1
export VERSION=$2

rm -rf csa-app/exe/* csa-app/frontend/build

#./install.sh

#--- building web app
./buildWebUI.sh

#--- binding UI and other resources
./build-CSA-Bind-UI.sh
