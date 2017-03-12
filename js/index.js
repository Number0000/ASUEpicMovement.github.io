(function(){
	var app;
	$(document).ready(function(){
		return app.init();
	});
	app = {
		typingtext: "EPIC Movement at ASU",
		index: 0,
		chars: 0,
		speed: 100,
		container: '.typingtext .typingcontent',
		init: function(){
			this.chars = this.typingtext.length;
			return this.write();
		},
		write: function(){
			$(this.container).append(this.typingtext[this.index]);
			if(this.index<this.chars){
				this.index++;
				return window.setTimeout(function(){
					return app.write();
				}, this.speed);
			}
		}
	};
}.call(this));
