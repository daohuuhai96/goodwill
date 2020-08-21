$(document).ready(function() {
	$('#clients_home').cycle({
		fx:     'scrollHorz', 
		speed:  500,
		timeout: 5000,
		next:   '.block_clients_home .arrow_right',
		prev:   '.block_clients_home .arrow_left',
		pause: 0,
		rev: 1
	});
	$('#clients').cycle({
		fx:     'scrollHorz', 
		speed:  500,
		timeout: 5000,
		next:   '.block_clients .arrow_right',
		prev:   '.block_clients .arrow_left',
		pause: 0,
		rev: 1
	});
});