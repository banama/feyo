'use strict';
var yeoman = require('yeoman-generator');
var util = require('util')
var yosay = require('yosay');

var Generator = module.exports = function Generator(args, options, config){
  yeoman.generators.Base.apply(this, arguments);
  this.argument('appname', { type: String, required: true });
  this.appname = this._.camelize(this.appname);

  this.on('end', function(){
    console.log(yosay('A app gulpscript has been cerated!'))
  })
}

util.inherits(Generator, yeoman.generators.Base);

Generator.prototype.gulp = function(){

  this.mkdir(this.appname + 'gulp')
  var temp = '../../../gulpscript'
  var dest = this.appname + 'gulp'
  console.log(this.templatePath(temp))
  this.directory(
      this.templatePath(temp),
      this.destinationPath(dest)
  )
  this.copy('../appgulp.js', this.appname + 'gulp/gulpfile.js')
}