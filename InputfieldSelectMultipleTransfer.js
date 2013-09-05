$(document).ready(function() {

	$(".InputfieldSelectMultipleTransfer>select").each(function() {
		var $t = $(this); 
		var options = {};
		if(typeof config !== 'undefined') options = config[$t.attr('id')]; 
		options.splitRatio = 0.5;
		options.moveEffect = 'highlight';
		options.moveEffectSpeed = 'fast';
		$t.multiselect(options); 

	}).change(function() {
		// if some other JS changes the original select, refresh the multiselect
		$(this).multiselect("refresh"); 
	});

	$(window).resize(function() {
		// ensures the multiselect stays sized with the container
		$(".InputfieldSelectMultipleTransfer>select").multiselect("refresh"); 
	}); 
});
