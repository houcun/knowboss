(function($) {
	$.fn.menu = function(options) {
		// Default options
		var settings = $.extend({
			'effect': 'fade'
		}, options);

		// Store this
		$this = $(this);

		// Fade effect
		if (settings.effect == 'fade') {
			$("li", $this).hover(function() {
				$('> ul, > div', this).hide().fadeIn(200);
			}, function() {
				$('> ul, > div', this).fadeOut(200);
			});
		}
		// Slide effect
		else if (settings.effect == 'slide') {
			$("li", $this).hover(function() {
				$('> ul, > div', this)
					.stop()
					.hide()
					.css({
					display: 'block',
					opacity: 0,
					marginTop: 50
				})
					.animate({
					opacity: 1,
					marginTop: 0
				}, 250);
			}, function() {
				$('> ul, > div', this)
					.stop()
					.animate({
					opacity: 0,
					marginTop: 50
				}, 250, function() {
					$(this).hide();
				});
			});
		}

		// Add bubble effects
		$('> li > a', $this).hover(function() {
			$('.bubble-top', this)
				.stop()
				.animate({
				marginTop: -3
			}, 200);
		}, function() {
			$('.bubble-top', this)
				.stop()
				.animate({
				marginTop: 0
			}, 200);
		});

		// Return this object
		return this;
	}
})(jQuery);
