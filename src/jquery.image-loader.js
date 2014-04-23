/*
 * image-loader
 * https://github.com/goschevski/image-loader
 *
 * Copyright (c) 2014 Aleksandar Gosevski
 * Licensed under the MIT license.
 */

(function($) {
    var namespace = 'imageloader';

    function ImageLoader (element, options) {
        if ( !this.isSupported ) { throw new Error('Older browsers are not supported.'); }

        this.setElements(element, options);
        this.bindEvents();
    }

    ImageLoader.prototype = {
        $: function (selector) {
            return this.$element.find(selector);
        },

        isSupported: function () {
            return window.File && window.FileReader && window.FileList && window.Blob;
        },

        setElements: function (element, options) {
            this.options = $.extend({}, $.fn.imageLoader.defaults, options);
            this.$element = $(element);
            this.$placeholder = $( this.options.placeholder );
        },

        bindEvents: function () {
            this.$element.on('change.' + namespace, $.proxy( this.reader, this ));
        },

        reader: function (e) {
            var uploader = e.currentTarget,
                reader = new FileReader(),
                self = this,
                o = this.options;

            reader.onload = (function (file) {
                return $.proxy(  self[ o.method === 'css' ? 'setBackground' : 'setImage' ], self);
            }(uploader.files[0]));

            reader.readAsDataURL( uploader.files[0] );

            // If callback is function, execute it
            if ( $.isFunction(o.callback) ) {
                o.callback();
            }
        },

        setImage: function (e) {
            var o = this.options;

            // Prevent using custom methods
            if ( o.method !== 'html' && o.method !== 'append' ) {
                throw new Error('Only html and append methods are allowed!');
            }

            return this.$placeholder[o.method]('<img src="' + e.target.result + '" width="' + o.width + '" height="' + o.height + '" class="' + o.imgClass + '" />');
        },

        setBackground: function (e) {
            return this.$placeholder.css({ backgroundImage: 'url(' + e.target.result + ')' });
        }
    };

    $.fn.imageLoader = function (option) {
        return this.each(function () {
            var $this = $(this),
                data = $this.data(namespace),
                options = typeof option === 'object' && option;

            if ( !data ) {
                $this.data(namespace, (data = new ImageLoader(this, options)));
            }
            if ( typeof option === 'string' && option.charAt(0) !== '_') {
                data[option]();
            }
        });
    };

    $.fn.imageLoader.Constructor = ImageLoader;
    $.fn.imageLoader.defaults = {
        placeholder: '.image-placeholder',
        width: 'auto',
        height: 'auto',
        imgClass: 'img-load',
        method: 'html',
        callback: null
    };
}(jQuery));