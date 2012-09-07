#Image loader

Image loader is jQuery plugin that loads image selected by input file field without uploading it on server. You can check *[demo here](http://salencebg.github.com/image-loader)*.

##Options

* `target:` Element in which we load selected image
	
	*Default: $('.show')*

* `width:` Resize image to custom width

	*Default: auto*

* `height:` Resize image to custom height

	*Default: auto*

**Note:** If you use just width or just height, the second dimension is gonna be scaled proportionaly.

##Example

HTML

	<input type="file" class="image">
	<div class="show"></div>
	
	<input type="file" class="image2">
	<div class="second"></div>
	
Script Initilization

	$('.image').imageLoader();
	
	$('.image2').imageLoader({
		'target' : $('.second'),
		'width' : '100px'
	});
	
Check [live example](http://salencebg.github.com/image-loader).