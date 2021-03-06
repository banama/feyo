fis
    .media('dev')
    .match('**', {
        useHash: false
    });

fis
    .media('dev')
    .match('*.scss', {
        parser: fis.plugin('sass'),
        rExt: '.css'
    })

/*
var jade = require('jade')
var basedir = fis.project.getProjectPath();
fis
    .media('jade')
    .match('*.jade', {
        parser: function(content, file, settings){
            settings.basedir = settings.basedir || basedir;
            var template = jade.compile(content, settings)
            template.dependencies.forEach(function(dep){
                file.cache.addDeps(dep);
            })
            return template(data);
        }
    })
*/
/*********************************************************/
fis
    .media('product')
    .match('script/*.js', {
        optimizer: fis.plugin('uglify-js')
    })
    .match('style/*.scss', {
        parser: fis.plugin('sass'),
        optimizer: fis.plugin('clean-css'),
        rExt: '.css'
    })
    .match('style/.css', {
        optimizer: fis.plugin('clean-css')
    })
fis
    .media('product')
    .match('{style/script}/*.{js,css,scss}', {
        useHash: true
    })
    .match('{style/script}/*.{js,css,scss}', {
        release: '/static/$0'
    })


fis
    .set('project.ignore', [
        'lib/**',
        'jade/**',
        'baseJade/**',
        'baseScript/**',
        'baseStyle/**',
        'node_modules/**',
        'package.json',
        'npm-script.js',
        'fis-conf.js',
    ])
fis
    .match('/mod/*.js', {
        isMod: true                 
    })
fis
    .hook('module', {
        mode: 'amd',
        forwardDeclaration: true
    })
