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

Generator.prototype.ask = function(){
  var cb = this.async();

  // have Yeoman greet the user.
  // console.log(this);

  var prompts = [{
    type    : 'input',
    name    : 'name',
    message : 'Your project name?',
    default : 'feyo'
  }];

  this.prompt(prompts, function (props) {
    this.name = props.name;
    console.log(this.name)
    cb();
  }.bind(this));
}