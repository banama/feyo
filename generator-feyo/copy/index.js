'use strict';
var yeoman = require('yeoman-generator');
var util = require('util')
var yosay = require('yosay');

var Generator = module.exports = function Generator(args, options, config){
  yeoman.generators.Base.apply(this, arguments);
  this.argument('temp', { type: String, required: true });
  this.temp = this._.camelize(this.temp);

  this.on('end', function(){
    var conso = 'A ' + this.temp + ' has been cerated!'
    console.log(yosay(conso))
  });
}

util.inherits(Generator, yeoman.generators.Base);

Generator.prototype.temps = function(){
  var temp,
      dest;

  temp = '../../../' + this.temp
  dest = './';
  
  this.directory(
    this.templatePath(temp),
    this.destinationPath(dest)
  );
}