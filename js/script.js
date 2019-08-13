$(document).ready(function(){
	var link = $('.menu-link');
	var link_active = $('.menu-link_active');
	var menu = $('.menu');

	link.click(function() {
		link.toggleClass('menu-link_active');
		menu.toggleClass('menu_active');
	});
	link_active.click(function() {
		link_active.removeClass('menu-link_active');
	});
})