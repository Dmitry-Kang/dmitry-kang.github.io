$('body').on('click', '#password-img', function() {
	if ($('#password').attr('type') == 'password') {
		$('#password-img').addClass('view');
		$('#password').attr('type', 'text');
	} else {
		$('#password-img').removeClass('view');
		$('#password').attr('type', 'password');
	}
	return false;
});