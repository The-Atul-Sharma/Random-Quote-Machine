$(document).ready(function(){
	$currentQuote = $('.currentQuote'),
	$generate = $('.generate');
	$tweet = $('#tweet');
	$author = $('#author');
	
	function getQuote(){
		$.ajax({
		  jsonp: "jsonp",
		  dataType: "jsonp",
		  url: 'http://api.forismatic.com/api/1.0/',
		  contentType: 'application/jsonp',
		  data: {
			lang: "en",
			method: "getQuote",
			format: "jsonp"
		  },
			
			success: function(data){
				$currentQuote.text(data.quoteText);
				$author.text(data.quoteAuthor);
				if (data.quoteText.length > 125){
					data.quoteText = data.quoteText.slice(0,125);
					data.quoteText += "...";
				}
				$tweet.attr("href", "https://twitter.com/intent/tweet?text="+ data.quoteText + "-"+ data.quoteAuthor );
				
			},
			error: function (data) {
				$currentQuote.text("Error Loading Quote");
			}
		});
	}
	$generate.click(function(){
		getQuote();
	});
});
