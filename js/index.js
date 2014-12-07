(function (){
	$(".nano").nanoScroller();

	$('.tabs li').on('click', function (){
		//从0开始
		var index = $(this).index();
		var indexAdd = index + 1;
		// alert('now click on ' +	index + ' li');
		// alert(index);
		//显示/隐藏panel  从1开始
		$('.panel').each(function (){
			// alert('now run on ' +	$(this).index() + ' panel');
			if ( indexAdd !== $(this).index()) {
				$(this).css('display', 'none');
			}
			else {
				$(this).css('display', 'block');
			}
		});
		//
		$('.tabs li').each(function () {
			var cur = $(this);
			if (index !== cur.index()) {
				if (cur.hasClass('current')) {
					cur.removeClass('current');
				}
			}			
			else {
				cur.addClass('current');
			}
		});
	});

	$('.tabs li').eq(0).trigger('click');

})(jQuery);