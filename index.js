'use strict';

var gulp = require('gulp');
var Elixir = require('laravel-elixir');
var del = require('del');

var Task = Elixir.Task;

Elixir.extend('cleanup', function(dirs) {
  var default_dirs = ['public/css', 'public/js', 'public/build'];
  var custom_dirs = dirs || [];
  var all_dirs = default_dirs.concat(custom_dirs);

  new Task('cleanup', function(cb) {
    del(all_dirs, cb);
  });
});
