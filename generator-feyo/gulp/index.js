'use strict';
var yeoman = require('yeoman-generator');
var util = require('util')
var chalk = require('chalk');
var yosay = require('yosay');

var Generator = module.exports = function Generator(args, options, config){
  yeoman.generators.Base.apply(this, arguments);
  this.pkg = require('../package.json')

  this.on('end', function(){
      console.log(yosay('gulp script initialize finish!'))
  })
}

util.inherits(Generator, yeoman.generators.Base);

Generator.prototype.gulp = function(){

  var temp = '../../../gulpscript'
  var dest = 'gulpscript'
  this.directory(
      this.templatePath(temp),
      this.destinationPath(dest)
  )
}