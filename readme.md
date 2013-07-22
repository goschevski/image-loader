# Image Loader

Image loader is jQuery plugin that loads image selected by input file field without uploading it on server.

### Instalation
Include the plugin after jQuery on the page.

```<script src="/path/to/image-loader.js"></script>```

###Options and defaults
```show: '.show'``` - Selector in which image will be loaded

```width: auto``` - Width of loaded image

```height: auto``` - Height of loaded image

```imgClass: 'img-load'``` - Class that will be added to loaded image

```cssBackground: false``` - If you want to add image as background of `show` selector, set this option to true

```callback: null``` - If you want to make something happen after loading image, callback is function for that

### Examples

	$(function () {
		$('input[type="file"]').imageLoader({
			'show': '.holder',
			'width': '200px',
			'imgClass': 'my-custom-class',
			callback: function () {
				console.log('image added to .holder');
			}
		});
	});

### License
Copyright (c) 2013 Ivan Tatic & Aleksandar Gosevski
Licensed under the MIT, GPL licenses.
