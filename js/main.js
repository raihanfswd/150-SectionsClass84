	$(document).ready(function(){
	
		$('.hover').hover(function(){
      var el = $(this);
        el.toggleClass('flip');
		});
	});