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

(function($) {
  var namespace = 'imageloader';

  function ImageLoader(element, options) {
    if ( !this.isSupported ) { throw 'Older browesers are not supported.'; }

    this.$element = $(element);
    var o = this.options = $.extend({}, $.fn.imageLoader, options);
    this.$input = this.$('input:file');
    this.$placeholder = $( o.show );

    this.$input.on('change.' + namespace, $.proxy(this._onChange, this));
  }

  ImageLoader.prototype = {
    $: function (selector) {
      return this.$element.find(selector);
    },
    _onChange: function(e) {
      this._reader( e.currentTarget );
      console.log( arguments );
    },
    remove: function() {
      if ( this.options.cssBackground ) {
        this.$placeholder.css({ backgroundImage: ''});
      } else {
        this.$placeholder.empty();
      }
    },
    _reader: function( uploader ) {
      var reader = new FileReader(),
        self = this,
        o = this.options;

      reader.onload = (function(file) {
        return $.proxy(  self[ o.cssBackground ? '_setBackground' : '_setImage' ], self);
      }(uploader.files[0]));
      reader.readAsDataURL(uploader.files[0]);

      if ( $.isFunction(o.callback) ) {
        o.callback();
      }
    },
    _setImage: function(e) {
      var o = this.options;
      return this.$placeholder.html('<img src="' + e.target.result + '" width="' + o.width + '" height="' + o.height + '" class="img-load" />');
    },
    _setBackground: function(e) {
      return this.$placeholder.css({ backgroundImage: 'url(' + e.target.result + ')' });
    },
    isSupported: (function() {
      return window.File && window.FileReader && window.FileList && window.Blob;
    }())
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
    show: '.show',
    width: 'auto',
    height: 'auto',
    cssBackground: false,
    callback: null
  };
}(jQuery));
