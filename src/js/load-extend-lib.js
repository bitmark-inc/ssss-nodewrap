var ffi = require('ffi');
var path = require('path');

// get root dir
//var root_dir = __dirname.replace('/src/js', '/');
var root_dir;
if (ffi.LIB_EXT === '.dll') {
  root_dir = path.resolve(__dirname.replace('\\src\\js', '\\'));
} else {
  root_dir = __dirname.replace('/src/js', '/');
}

// Load boost library and libtorrent library
if (ffi.LIB_EXT === '.so') {
  ffi.DynamicLibrary(root_dir + 'lib/linux/libgmp.10' + ffi.LIB_EXT);
  ffi.DynamicLibrary(root_dir + 'lib/linux/libgmp' + ffi.LIB_EXT);
} if (ffi.LIB_EXT === '.dylib') {
  ffi.DynamicLibrary(root_dir + 'lib/osx/libgmp.10' + ffi.LIB_EXT);
  ffi.DynamicLibrary(root_dir + 'lib/osx/libgmp' + ffi.LIB_EXT);
} else {
  //
}	