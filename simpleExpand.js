//Written by https://github.com/Belgiumese

(function(factory) {
  if (typeof define === 'function' && define.amd) {
    //AMD support
    define(['jquery'], factory);
  } else if (typeof exports === 'object') {
    //NodeJS support
    module.exports = factory(require('jquery'));
  } else if (jQuery) {
    //No module loaders
    window.simpleExpand = factory(jQuery);
  } else {
    console.log('Could not detect jQuery. Exiting.');
  }
})(function($) {
  'use strict';

  var options = {
      easing: 'swing',
      speed: 400
    },
    //Always return api for method chaining
    api = {
      //expand or shrink an element, accepts a callback
      expand: function expand(elem, callback) {
        var $elem = $(elem),
          instance = elements[$elem.attr('data-expand-id')],
          newHeight, callText;
        if (!instance.expanded) {
          newHeight = instance.height;
          callText = 'expand';
        } else {
          newHeight = 0;
          callText = 'shrink';
        }
        instance.expanded = !instance.expanded;
        $elem.animate({
          height: newHeight
        }, options.speed, options.easing, function() {
          if (typeof callback === 'function') {
            callback($elem, callText);
          }
        });
        return api;
      },
      //Is the element expanded?
      isExpanded: function isExpanded(elem) {
        return elements[$(elem).attr('data-expand-id')].expanded;
      },
      //Change the default settings
      settings: function settings(newOptions) {
        $.extend(options, newOptions);
        return api;
      },
      //Initialise and configure elements
      init: function init() {
        var wrappers = $('.simpleExpand');
        wrappers.each(function() {
          var wrapper = $(this),
            instance = {
              id: elements.length,
              height: wrapper.height(),
              expanded: false
            };
          wrapper.height(0);
          wrapper.css('overflow', 'hidden');
          wrapper.attr('data-expand-id', instance.id);
          elements.push(instance);
        });
        return api;
      }
    },
    elements = [];
  return api;
});