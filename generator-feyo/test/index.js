'use strict';
var yeoman = require('yeoman-generator');
var util = require('util')
var yosay = require('yosay');

var Generator = module.exports = function Generator(args, options, config){
  yeoman.generators.Base.apply(this, arguments);
  this.argument('appname', { type: String, required: true });
  this.appname = this._.camelize(this.appname);
  this.option('server');
  this.testClient = (this.options.server ? "server": "browser");

  this.on('end', function(){
    console.log(yosay('A app test has been cerated!'))
  });
}

util.inherits(Generator, yeoman.generators.Base);

Generator.prototype.gulp = function(){
  console.log(this.testClient)
  var temp,
      dest;

  if(this.testClient === 'server'){
    temp = '../../../test/serverTest'
    dest = this.appname + this.testClient + 'Test';
    this.mkdir('test');
  }
  else{
    temp = '../../../test/browserTest'
    dest = this.appname + this.testClient + 'Test';
    this.mkdir('test');
  };

  this.directory(
    this.templatePath(temp),
    this.destinationPath(dest)
  );
}
