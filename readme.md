#Image loader

Image loader is jQuery plugin that loads image selected by input file field without uploading it on server. You can check *[demo here](http://salencebg.github.com/image-loader)*.

##Options

* `show:` Element in which we load selected image

* `width:` Resize image to custom width

* `height:` Resize image to custom height

* `callback` - callback function

**Note:** Width and height options applies only for init method, not for cssBackground and if you use just one, the second dimension is gonna be scaled proportionaly.

Example:

	$('.file').imageLoader({
		'show': $('.display'),
		'width': '100px',
		callback: function () {
			console.log('done');
		}
	});

##Methods
* `remove` - removes image added by image loader
* `cssBackground` - load image as css background

Example:

	$('.show').imageLoader('remove');

##Defaults

`show:` $('.show'),

`width:` auto,

`height:` auto,

callback: function () {
	// This is callback function
}
	
Check [live example](http://salencebg.github.com/image-loader).