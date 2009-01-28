/* jQuery PageSelect
 * Version 0.0.1
 * Written by Michael Bleigh (http://www.mbleigh.com/) of Intridea, Inc. (http://www.intridea.com)
 * @requires jQuery >= 1.2
 *
 * Copyright 2009 Michael Bleigh
 * Licensed under the MIT license: http://www.opensource.org/licenses/mit-license.php
 *
 */
 
 /*
  * @description A plugin to handle the selection of HTML on the page in a cross-browser compatible manner.
  */
jQuery(function () {
  jQuery(window).mouseup(function(e) {
    var selection = jQuery.getSelection();
    if (selection.length > 0) {
      jQuery(e.target).trigger('pageselect', [selection]);
    }
  });  
});

jQuery.getSelection = function() {
  if(window.getSelection){
    return window.getSelection().toString();
  }
  else if(document.getSelection){
      return document.getSelection() + "";
  }
  else if(document.selection){
      return document.selection.createRange().text + "";
  }
}