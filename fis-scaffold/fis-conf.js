fis
    .media('dev')
    .match('**', {
        useHash: false
    })

fis
    .media('dev')
    .match('style/*.scss', {
        parser: fis.plugin('sass'),
        rExt: '.css'
    })

fis
    .media('dev')
    .match('{style/script}/*.{js,css,scss}', {
        release: '/static/$0'
    })


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
    .match('{mod/*.js,mod/**/*.js}', {
        isMod: true                 
    })
fis
    .hook('module', {
        mode: 'amd',
        forwardDeclaration: true
    })
