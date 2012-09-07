/*
 * imageLoader.js - 0.1
 * Friday, Sep 7 2012
 *
 * Copyright (c) 2012, Aleksandar Gosevski
 * https://github.com/salencebg/image-loader
 *
 * Licensed under the MIT license,
 * http://www.opensource.org/licenses/MIT
 */

(function ($) {

	$.fn.imageLoader = function (options) {

		var settings = $.extend( {
			'target' : $('.show'),
			'width' : 'auto',
			'height' : 'auto'
		}, options);
		
		this.each(function () {
			$(this).change(function () {
				var reader = new FileReader();

				// Closure to capture the file information.
				reader.onload = (function(theFile) {

					return function(e) {
						settings.target.html('<img src="'+e.target.result+'" width="'+settings.width+'" height="'+settings.height+'" />');
					};

				})(this.files[0]);

				// Read in the image file as a data URL.
				reader.readAsDataURL(this.files[0]);
			});
		});

	};

})(jQuery);