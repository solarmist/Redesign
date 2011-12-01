/**
 * Wyldthings javascript
 * Written by: Joshua Olson
 *
 */

/**
 * rollover.js: unobtrusive image rollovers.
 * 
 *   <img src="normal_image.png" data-rollover="rollover_image.png">
 */
function cache_images_rollovers() {
    for(var i = 0; i < document.images.length; i++) {
	var img = document.images[i];
	var rollover = img.getAttribute("data-rollover");
	
	// Don't need to preload non-rollover images
	if (!rollover) {
	    // (new Image()).src = img.src;
	    continue;
	}

	// Ensure that the rollover image is in the cache
	(new Image()).src = rollover;

	img.setAttribute("data-rollout", img.src);
	img.onmouseover = function() {
	    this.src = this.getAttribute("data-rollover");
	};
	img.onmouseout = function() {
	    this.src = this.getAttribute("data-rollout");
	};
    }
}

cache_images_rollovers();
