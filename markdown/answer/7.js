(function($) {
	$.extend({
		dialog: function(options) {
			var defaultOptions = {
				title: "标题",
				content: "内容",
				yesFn: '',
				noFn: ''
			};
			var setting = $.extend(defaultOptions, options);
			var temp = "";
			temp += '<div class="dialog_bg">' +
				'<div class="dia_content">' +
				'<div class="title">' + setting.title + '</div>' +
				'<div class="content">' + setting.content + '</div>' +
				'<button class="sure">确定按钮</button>' +
				'<button class="canel">取消按钮</button>' +
				'</div></div>';

			$("body").append(temp);

			$(".sure").on('click', function() {
				if(typeof setting.yesFn === "function"){
					setting.yesFn();
				}
				$('.dialog_bg').remove()
			})
			$(".canel").on('click', function() {
				if(typeof setting.noFn === "function"){
					setting.noFn();
				}
				$('.dialog_bg').remove()
			})
		}
	});
})(jQuery);