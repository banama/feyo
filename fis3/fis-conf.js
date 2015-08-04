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
