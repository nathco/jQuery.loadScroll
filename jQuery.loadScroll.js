// Dynamically load images while scrolling
// Source: github.com/ByNathan/jQuery.loadScroll
// Version: 1.0

(function($) {
    
    $.fn.loadScroll = function() {
    
        var $window = $(window),
            images = this,
            inview,
            loaded;

        images.one('loadScroll', function() {
            
            if (this.getAttribute('isrc')) {
                this.setAttribute('src',
                this.getAttribute('isrc'));
                this.removeAttribute('isrc');
            }
            
        });
    
        $window.scroll(function() {
        
            inview = images.filter(function() {
                
                var a = $window.scrollTop(),
                    b = $window.height(),
                    c = $(this).offset().top,
                    d = $(this).height();
                    
                return c + d >= a && c <= a + b;
                
            });
            
            loaded = inview.trigger('loadScroll');
            images = images.not(loaded);
                    
        });
    };
    
})(jQuery);