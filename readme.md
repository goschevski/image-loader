#Image loader

Image loader is jQuery plugin that loads image selected by input file field without uploading it on server. You can check *[demo here](http://salencebg.github.com/image-loader)*.

##Options

* `target:` Element in which we load selected image

* `width:` Resize image to custom width

* `height:` Resize image to custom height

* `callback` - callback function

**Note:** If you use just width or just height, the second dimension is gonna be scaled proportionaly.

Example:

	$('.file').imageLoader({
		'target': $('.display'),
		'width': '100px',
		callback: function () {
			console.log('done');
		}
	});

##Methods
* `remove` - removes image added by image loader

Example:

	$('.show').imageLoader('remove');

##Defaults

`target:` $('show'),

`width:` auto,

`height:` auto,

callback: function () {
	// This is callback function
}
	
Check [live example](http://salencebg.github.com/image-loader).