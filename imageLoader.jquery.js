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

	// Default options
	var settings = {
			'target' : $('.show'),
			'width' : 'auto',
			'height' : 'auto',
			callback: function () {
				// This is callback function.
			}
		},

		methods = {

			init: function (options) {
				$.extend(settings, options);

				if (window.File && window.FileReader && window.FileList && window.Blob) {
					return this.each(function () {
						$(this).change(function () {
							var reader = new FileReader();

							// Closure to capture the file information.
							reader.onload = (function(theFile) {

								return function(e) {
									settings.target.html('<img src="'+e.target.result+'" width="'+settings.width+'" height="'+settings.height+'" class="img-load" />');
								};

							})(this.files[0]);

							// Read in the image file as a data URL.
							reader.readAsDataURL(this.files[0]);

							settings.callback();
						});
					});
				} else {
					$(this).after('<small>This browser doesn\'t support image loader.</small>');
				}
			},

			remove: function () {
				return this.each(function () {
					$(this).find('.img-load').remove();
				});
			}

		};

	$.fn.imageLoader = function (method, options) {

		// Method calling logic
		if ( methods[method] ) {
			return methods[ method ].apply( this, Array.prototype.slice.call( arguments, 1 ));
		} else if ( typeof method === 'object' || ! method ) {
			return methods.init.apply( this, arguments );
		} else {
			$.error( 'Method ' +  method + ' does not exist in imageLoader.' );
		}

	};

})(jQuery);