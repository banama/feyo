'use strict';
var yeoman = require('yeoman-generator');
var util = require('util')
var yosay = require('yosay');

var Generator = module.exports = function Generator(args, options, config){
  yeoman.generators.Base.apply(this, arguments);

  this.on('end', function(){
    console.log(yosay('A webpack has been cerated!'))
  });
}

util.inherits(Generator, yeoman.generators.Base);

Generator.prototype.webpack = function(){
  var temp,
      dest;
  console.log('webpack')
  temp = '../../../webpack'
  dest = './';
  
  this.directory(
    this.templatePath(temp),
    this.destinationPath(dest)
  );
}
