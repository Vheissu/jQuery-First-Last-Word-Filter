;(function($, undefined) {

	$.fn.lastWord = function() {
		this.html(this.text().replace(/(\S+)\s*$/, '<span class="last-word">$1</span>'));
	};


	$.fn.firstWord = function() {
		this.html(this.text().replace(/^(\w+)/, '<span class="first-word">$1</span>'));		
	};

	jQuery.extend(jQuery.expr[':'], { 

		firstWord: function(elem, index, match) {
			var $elem = $(elem);
			var text  = $elem.text();

			return this.html(text.replace(/^(\w+)/, '<span class="first-word">$1</span>'));
		},

		lastWord: function(elem, index, match) {
			var $elem = $(elem);
			var text  = $elem.text();

			return this.html(text.replace(/(\S+)\s*$/, '<span class="last-word">$1</span>'));
		}

	});

})(jQuery);