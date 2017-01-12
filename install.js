require('shelljs/global')

// bootstrap files
mkdir('-p', 'source/css')
cp('-r', 'node_modules/bootstrap/dist/css/bootstrap.min.css', 'source/css')

mkdir('-p', 'source/fonts')
cp('-r', 'node_modules/bootstrap/dist/fonts/*', 'source/fonts')

mkdir('-p', 'source/images')
cp('-r', 'node_modules/bootstrap/dist/images/*', 'source/images')

mkdir('-p', 'source/js')
cp('-r', 'node_modules/bootstrap/dist/js/bootstrap.min.js', 'source/js')

// jquery files
cp('node_modules/jquery/dist/jquery.min.js', 'source/js')
