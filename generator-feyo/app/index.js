'use strict';
var yeoman = require('yeoman-generator');
var util = require('util')
var chalk = require('chalk');
var yosay = require('yosay');

var Generator = module.exports = function Generator(args, options, config){
  yeoman.generators.Base.apply(this, arguments);
  this.pkg = require('../package.json')
}

util.inherits(Generator, yeoman.generators.Base);

Generator.prototype.help = function(){
    console.log(yosay('- h'))
    console.log('yo feyo:apps appname')
    console.log('yo feyo:webpack')
    console.log('yo feyo:appgulp appname')
    console.log('yo feyo:test testname testClient < --server or --browser >')
}
