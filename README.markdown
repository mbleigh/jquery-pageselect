jQuery PageSelect Plugin
========================

This is a plugin for jQuery designed to allow cross-browser handling of "page selection," 
that is selecting HTML on the page (not in a textarea). At the moment this is an extremely
unready and unfeatured implementation that simply creates a custom 'pageselect' event
that one may listen to in order to get the currently selected text.

Usage
-----

The limited usage right now is a $.getSelection() utility method and a 'pageselect' event.
How to use each is detailed below:

    alert($.getSelection()); // Display the current selection in an alert box.
    
    // Alert with the currently selected text whenever
    // text inside the '#content' element is selected.
    $('#content').bind('pageselect', function(event, selection) {
      alert(selection);
    })
    
Future
------

I aim to expand this plugin to do much more than simply grab the currently selected text.
In the future this plugin should be able to:

* Grab the actual HTML fragment that is currently selected.
* Wrap the selected HTML with more HTML (for highlighting and other purposes)
* Make use of other features of the [W3C Range](http://www.w3.org/TR/DOM-Level-2-Traversal-Range/ranges.html)