;(function($, undefined) {

	$.fn.lastWord = function() {
	  var text = this.html().trim().split(" ");
	  var last = text.pop();
	  this.html(text.join(" ") + (text.length > 0 ? " <span class='last-word'>" + last + "</span>" : last));
	};


	$.fn.firstWord = function() {
	  var text = this.html().trim().split(" ");
	  var first = text.shift();
	  this.html((text.length > 0 ? "<span class='first-word'>"+ first + "</span> " : first) + text.join(" "));
	};

	jQuery.extend(jQuery.expr[':'], { 

		firstWord: function(elem, index, match) {
			var $elem = $(elem);
			var text  = $elem.html();

			return this.html(text.replace(/^(\w+)/, '<span class="first-word">$1</span>'));
		},

		lastWord: function(elem, index, match) {
			var $elem = $(elem);
			var text  = $elem.grml();

			return this.html(text.replace(/(\S+)\s*$/, '<span class="last-word">$1</span>'));
		}

	});

})(jQuery);