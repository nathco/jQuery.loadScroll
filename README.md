# jQuery.loadScroll
Super simple jQuery extension for dynamically loading images while scrolling. Intended for image-heavy websites to save bandwidth and decrease intial load time.

## Installation
Include the latest version of [jQuery](http://jquery.com/download) and `jQuery.loadScroll.js` in the `<head>` of your HTML document:
```html
<script src="jQuery.min.js"></script>  
<script src="jQuery.loadScroll.js"></script>
```
## How to Use
Reference the `loadScroll()` method and change the image `src` attribute to `isrc` for all dynamic loading images. The `isrc` switches to the standard `src` attribute as the image(s) enter the viewport.  See the live demo: [code.bynathan.com/loadScroll](http://code.bynathan.com/loadScroll)

**HTML**
```html
<!-- Load on Scroll -->
<img isrc="load-this-1.png">
<img isrc="load-this-2.png">
<img isrc="load-this-3.png">  
```

**jQuery**
```javascript
$(function() {  

    $('img').loadScroll();
    
});
```  

## Browser Support
– Google Chrome  
– Safari ( Desktop & Mobile )  
– Internet Explorer ( 8, 9, 10+ )  
– Firefox  
– Opera ( Not Tested )  

## Feedback
If you discover any issues or have questions regarding usage, please send a message to [mail@bynathan.com](mailto:mail@bynathan.com) or find me on twitter [@ByNathan](http://twitter.com/ByNathan).