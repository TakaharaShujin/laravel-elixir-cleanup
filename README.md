# laravel-elixir-cleanup

Clean built and custom files or folders.

#### Install

```sh
npm install laravel-elixir-cleanup --save-dev
```

#### Usage

Default clean folders: `public/css`, `public/js`, `public/build`.

```javascript
var elixir = require('laravel-elixir');
require('laravel-elixir-cleanup');

elixir(function(mix) {
  mix
    .cleanup() // Default clean
    // or
    .cleanup(['public/images','public/fonts']) // Custom folders are merged with the default folders
    .less('*.less')
    .coffee('*.coffee');
});
```

Single task run:
```bash
gulp cleanup
```

Multi task run:
```bash
gulp
```

#### License
MIT
