# jQuery plugin

Image loader is jQuery plugin that loads image selected by input file field without uploading it on server.

## Getting Started
Download the [production version][min] or the [development version][max].

[min]: https://raw.githubusercontent.com/goschevski/image-loader/master/dist/image-loader.min.js
[max]: https://raw.githubusercontent.com/goschevski/image-loader/master/dist/image-loader.js

In your web page:

```html
<script src="jquery.js"></script>
<script src="dist/image-loader.min.js"></script>
```

## Options and defaults

```placeholder: '.image-placeholder'``` - Selector in which image will be loaded

```width: auto``` - Width of loaded image

```height: auto``` - Height of loaded image

```imgClass: 'img-load'``` - Class that will be added to loaded image

```method: 'html'``` - Method that will be used to add image (html (default), append or css which will add image as background of placeholder)

```callback: null``` - If you want to make something happen after loading image, callback is function for that

## Examples

```js
$(function () {
  $('input[type="file"]').imageLoader({
    placeholder: '.holder',
    width: '200px',
    imgClass: 'my-custom-class',
    callback: function () {
      console.log('image added to .holder');
    }
  });
});
```

### License

Copyright (c) 2014 Aleksandar Goševski
Licensed under the MIT, GPL licenses.
