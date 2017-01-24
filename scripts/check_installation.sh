#!/bin/bash
echo $OSTYPE
if [[ $OSTYPE == darwin* ]]; then
	echo "link library for macOS"
	cd src/c
	install_name_tool -change libgmp.10.dylib @loader_path/../../lib/osx/libgmp.10.dylib shamir.dylib
fi