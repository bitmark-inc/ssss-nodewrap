#!/bin/bash
echo $OSTYPE
if [[ $OSTYPE == darwin* ]]; then
	if [[ $(which gcc) ]]; then
		echo "Compiling tweetnacl library!!"
		gcc -dynamiclib -undefined suppress -flat_namespace src/c/ssss_custom.c -o src/c/ssss_custom.dylib -lgmp
	else
		echo "This machine does not install G++"
	fi
fi
if [[ $OSTYPE == linux-gnu ]]; then
	if [[ $(dpkg -l | grep g++) ]]; then
		echo "Compiling tweetnacl library!!"
		gcc -O2 -shared -fpic src/c/ssss_custom.c -o src/c/ssss_custom.so -lgmp
	else
		echo "This machine does not install G++"
	fi
fi