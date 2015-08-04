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
    .media('production')
    .match('**', {
        useHash: true
    })
fis
    .media('production')
    .match('*.scss', {
        parser: fis.plugin('sass'),
        optimizer: fis.plugin('clean-css'),
        rExt: '.css'
    })
    .match('*.css', {
        optimizer: fis.plugin('clean-css')
    })
fis
    .media('production')
    .match('*.js', {
        optimizer: fis.plugin('uglify-js')
    })


fis.match('mod/*.js', {
    isMod: true                 
})

fis.hook('module', {
    mode: 'amd',
})
