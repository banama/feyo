'use strict';
var yeoman = require('yeoman-generator');
var util = require('util')
var chalk = require('chalk');
var yosay = require('yosay');
var _ = require('underscore')

var Generator = module.exports = function Generator(args, options, config){
  yeoman.generators.Base.apply(this, arguments);
  this.argument('appname', { type: String, required: true });
  this.appname = this._.camelize(this.appname);

  this.on('end', function(){
    console.log(yosay('A static app has been cerated!'))
  })
}

util.inherits(Generator, yeoman.generators.Base);

Generator.prototype.gulp = function(){

  this.mkdir(this.appname)
  this.mkdir(this.appname + '/js')
  this.mkdir(this.appname + '/scss')
  this.mkdir(this.appname + '/jade')
  this.mkdir(this.appname + '/dist/js/hash')
  this.appname(this.appname + '/dist/css/hash')
}
