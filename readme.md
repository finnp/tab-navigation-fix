# tab-navigation-fix
[![NPM](https://nodei.co/npm/tab-navigation-fix.png)](https://nodei.co/npm/tab-navigation-fix/)

It is recommended to use [Skip navigation links](http://a11yproject.com/posts/skip-nav-links/) 
on you website, that allow screen reader users to skip ahead to the main content. However 
in IE and [Chrome](https://code.google.com/p/chromium/issues/detail?id=37721) there is a bug 
that internal anchor links are not working properly with tab navigation (Which is commonly used by screen reader users). 

What happens is that the tab navigation will remain at the first element and not
jump to the anchor like we see it visually.

This is a drop-in implementation of the fix described here:
http://www.nczonline.net/blog/2013/01/15/fixing-skip-to-content-links/

Side effect is that it changes elements that are usually not tabbable to be tabbable. 
(Is that even a word?)

## usage
```js
require('tab-navigation-fix')()
```