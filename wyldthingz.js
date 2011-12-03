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
	var thumbnail = img.getAttribute("thumbnail");
	
	// For image changes on hover/rollover
	if(rollover) {
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

	// Update an image based on the thumbnail you rollover/click
	if(img.getAttribute("thumbnail")) {
	    img.onmouseover = function() {
		var thumb = this.getAttribute("thumbnail");
		var frame = document.getElementById(thumb);
		frame.src = this.src;
	    };
	    img.onclick = function() {
		var thumb = this.getAttribute("thumbnail");
		var frame = document.getElementById(thumb);
		frame.src = this.src;
	    };
	}	    
    }
}