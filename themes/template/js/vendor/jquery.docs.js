jQuery.noConflict();

(function($) {
	$(function() {
		// Menu List.
		$(document).ready(function() {
			var parent = $(".nav-list .parent ul");
			link = $(".nav-list .parent > a");
			active = $(".nav-list .active ul");

			parent.hide();
			active.show();

			link.click(function(e) {
				e.preventDefault();

				if (!$(this).parent().hasClass('active')) {
					link.parent().removeClass('active');
					parent.filter(':visible').slideUp('normal');

					$(this).parent().addClass('active');
					$(this).next().stop(true, true).slideDown('normal');
				} else {
					$(this).parent().removeClass('active');
					$(this).next().stop(true, true).slideUp('normal');
				}
			});

			$('#map').gmap3({
				map: {
					options: {
						center: [46.578498, 2.457275],
						zoom: 5
					}
				},
				marker: {
					values: [{
						latLng: [48.8620722, 2.352047],
						data: 'Paris !'
					}, {
						address: '86000 Poitiers, France',
						data: 'Poitiers : great city !'
					}, {
						address: '66000 Perpignan, France',
						data: 'Perpignan ! <br> GO USAP !',
						options: {
							icon: 'http://maps.google.com/mapfiles/marker_green.png'
						}
					}],
					options: {
						draggable: false
					},
					events: {
						click: function(marker, event, context) {
							var map = $(this).gmap3('get'),
								infowindow = $(this).gmap3({
									get: {
										name: 'infowindow'
									}
								});
							if (infowindow) {
								infowindow.open(map, marker);
								infowindow.setContent(context.data);
							} else {
								$(this).gmap3({
									infowindow: {
										anchor: marker,
										options: {
											content: context.data
										}
									}
								});
							}
						}
					}
				}
			});
		});
	});
})(jQuery);
