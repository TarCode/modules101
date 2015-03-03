var TextAnimation = require("text-animation");

TextAnimation("codeX", function(err){
	if(err){
		throw(err);
	}
	
	TextAnimation({
		text: "is COOL!",
		animation: "top-bottom",
		font: "Ghost"
	});
});

