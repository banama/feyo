var r_index = __uri('./index.js');
require.config({
    baseUrl: '../',
})
require([r_index], function(l){
    console.log(l)
})
