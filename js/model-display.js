
	$('.model-container img').on('click', function () {
		var index = $(this).index();
		$('.model-container img').removeClass('model-focus');
		$(this).addClass('model-focus');
		$('#model-display').attr('src', '../pic/model' + index + '.jpg');
	});
