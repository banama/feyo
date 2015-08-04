var program = require('commander');
var watch = require('watch');
var exec = require('child_process').exec;

program
    .version('0.0.1')
    .option('-w, --watch')
    .option('-p, --product')
    .option('-m, --migrate')
    .parse(process.argv)

var watchDog = function(build, migrate){
    watch.watchTree('./', function(f, curr, prev){
        if(typeof f == 'object' && prev == null && curr == null){
            console.log('no chage')
        }
        else{
            remove()
            build(program.product);

            if(program.migrate){
                setTimeout(migrate, 2000);
            }
        }
    })
}

var remove = function(){
    exec('rm -rf ./dist/')
}

var build = function(product){
    if(product){
        exec('fis3 release -d ../dist product')
    }
    exec('fis3 release -d ../dist')
}

var migrate = function(){
    //exec()
    console.log(migrate)
}

if(program.watch){
    watchDog(build, migrate)
}
