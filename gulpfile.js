var elixir = require('laravel-elixir');
require('laravel-elixir-livereload');

// Overriding some of the default Elixir options
elixir.config.css.sass.folder  = 'scss';
elixir.config.css.outputFolder = 'assets/css';
elixir.config.js.outputFolder  = 'assets/js';

elixir(function(mix) {
    mix.livereload()
       .sass('app.scss')
       .babel('main.js')
       .version([
         'assets/css/app.css',
         'assets/js/main.js'
       ])
       .phpUnit('phpunit.xml');
});
