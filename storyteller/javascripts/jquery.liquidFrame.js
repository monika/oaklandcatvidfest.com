(function( $ ) {

    'use strict'

	$.fn.liquidFrame = function(parameters) {

        // Parameters: selector for fluid container
        parameters = parameters || {};

        // Set defaults
        var defaults = {

            liquidContainer: $(this).parent()

        };

        // Let user parameters override our defaults
        parameters = $.extend( defaults, parameters );

		return this.each(function() {

            var $this = $(this);

            // Find Aspect Ratio Video
            $this.data('aspectRatio', this.height / this.width);

            // Remove Embedded Height and Width on Video
            $this.removeAttr('height').removeAttr('width');

            // Set Sizes on Window Resize
            $(window).resize(function() {

                // Get Fluid Container Width
                var containerWidth = $(parameters.liquidContainer).width();

                // Resize video according to container width and aspect ratio
                $this.width(containerWidth).height(containerWidth * $this.data('aspectRatio'));

            }).resize();

            return this;

        });

	}

})( jQuery );
