(function($){
	$(document).ready(function(){
		$('#footer-form').submit(function (e) {
			e.preventDefault();

			var data = {
				name : $('#name2').val(),
				email : $('#email2').val(),
				message : $('#message2').val(),
			};
			$.ajax({
				url : 'http://api.hurtigtechnologies.com/mail/send.php',
				method : 'POST',
				data : data,
				success : function (msg) {
					
					var json = JSON.parse(msg);
					if (json.status == 'success') {
						$('#name2').val('');
						$('#email2').val('');
						$('#message2').val('');

						$('#footer-form-success').html(json.message).fadeIn();

					} else {
						$('#footer-form-error').html(json.message).fadeIn();

					}
				},
				error : function () {
					$('#footer-form-error').fadeIn();
				}
			});
		});

		$('#footer-form input, #footer-form textarea').focus(function () {
			$('.alert').fadeOut();
		})
	});
})(this.jQuery);