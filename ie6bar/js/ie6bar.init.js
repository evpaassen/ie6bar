$(document).ready(
	function() {
		var options = {};
		
		/*
		 * Example configuration: Dutch translation.
		 * See 'docs/index.html#configuration' for all configuration directives.
		 */
		/*
		var options = {
			txtTitle:		"We merken dat je met Internet Explorer 6 surft, maar deze browser wordt door ons niet meer ondersteund...",
			txtSubTitle:	"Daarom raden we je sterk aan te upgraden naar een modernere browser, zoals bijvoorbeeld Internet Explorer 8.",
			txtMoreInfo:	"Meer informatie",
			txtExplanation:	"Onderstaande vijf browsers worden w&eacute;l ondersteund. <strong>Klik op een logo om te upgraden.</strong>",
			txtClose:		"Sluiten en niet meer weergeven",
			
			urlIE:			"http://www.microsoft.com/netherlands/windows/internet-explorer/",
			urlSafari:		"http://www.apple.com/nl/safari/download/"
		};
		*/
		
		// Create a new ie6Bar-object and initialize the bar..
		var i6b = new ie6Bar(options);
		i6b.initialize();
	}
);
