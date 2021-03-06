function ie6Bar(options) {
	// Supported browsers.
	this.txtIE		= "Internet Explorer 7+";									if (options.txtIE)		this.txtIE		= options.txtIE;
	this.urlIE		= "http://www.microsoft.com/windows/internet-explorer/";	if (options.urlIE)		this.urlIE		= options.urlIE;
	
	this.txtFirefox	= "Mozilla Firefox 3.0+";									if (options.txtFirefox)	this.txtFirefox	= options.txtFirefox;
	this.urlFirefox	= "http://www.firefox.com/";								if (options.urlFirefox)	this.urlFirefox	= options.urlFirefox;
	
	this.txtChrome	= "Google Chrome 3.0+";										if (options.txtChrome)	this.txtChrome	= options.txtChrome;
	this.urlChrome	= "http://chrome.google.com/";								if (options.urlChrome)	this.urlChrome	= options.urlChrome;
	
	this.txtSafari	= "Safari 3+";												if (options.txtSafari)	this.txtSafari	= options.txtSafari;
	this.urlSafari	= "http://www.apple.com/safari/download/";					if (options.urlSafari)	this.urlSafari	= options.urlSafari;
	
	this.txtOpera	= "Opera 9.5+";												if (options.txtOpera)	this.txtOpera	= options.txtOpera;
	this.urlOpera	= "http://www.opera.com/download/";							if (options.urlOpera)	this.urlOpera	= options.urlOpera;
	
	
	// Text options.
	this.txtTitle				= "We see you use Internet Explorer 6, but we can no longer support this browser...";
	if (options.txtTitle)		this.txtTitle		= options.txtTitle;
	
	this.txtSubTitle			= "That's why we strongly recommend you to upgrade to a more modern browser, like Internet Explorer 8.";
	if (options.txtSubTitle)	this.txtSubTitle	= options.txtSubTitle;
	
	this.txtMoreInfo			= "More information";
	if (options.txtMoreInfo)	this.txtMoreInfo	= options.txtMoreInfo;
	
	this.txtExplanation			= "The five browsers below are supported. <strong>Click on a logo to upgrade.</strong>";
	if (options.txtExplanation)	this.txtExplanation	= options.txtExplanation;
	
	this.txtClose				= "Close and don't show again";
	if (options.txtClose)		this.txtClose		= options.txtClose;
	
	
	// Days to 'hide' cookie will last.
	this.cookieName		= "ie6bar";										if (options.cookieName)		this.cookieName		= options.cookieName;
	this.cookieDays		= 28;											if (options.cookieDays)		this.cookieDays		= options.cookieDays;
	
	
	// Layout settings.
	this.overlay		= true;											if (options.overlay)		this.overlay		= options.overlay;
	if (options.contentWidth)	this.contentWidth	= options.contentWidth;
	
	this.html = '{{{HTML}}}';
	
	return true;
}

ie6Bar.prototype.initialize = function() {
	// Execute only if no 'hide' cookie is present.
	if (jQuery.cookie(this.cookieName) != "hide") {
		// Add the warning bar to the body and let it fade in.
		jQuery("body").prepend(this.html);
		
		if (this.overlay)
			jQuery("#ie6-warning-wrapper").addClass('ie6-warning-overlay');
		
		if (this.contentWidth)
			jQuery("#ie6-warning-container").css({ width: this.contentWidth });
		
		jQuery("div#ie6-warning").fadeIn(200);
		
		
		
		// Attach the 'close' action and pass on the cookie settings to it.
		jQuery("a#ie6-warning-close").bind("click", {cookieName: this.cookieName, cookieDays: this.cookieDays}, function(event) {
			
			// Set a cookie wich lasts for 28 days.
			jQuery.cookie(event.data.cookieName, "hide", { expires: event.data.cookieDays });
			
			// First, hide the browser logo buttons (if necessary) by fading out.
			jQuery("span.ie6-warning-browserbutton").fadeOut(400, function() {
				
				// Second, hide the details layer (if necessary) by sliding up.
				jQuery("div#ie6-warning-details").slideUp(500, function() {
					
					// Finally, hide the bar entirely by sliding up.
					jQuery("div#ie6-warning").slideUp(500);
					
				});
			});
		});
		
		
		
		// Attach the 'expand' action.
		jQuery("div#ie6-warning-container").click(function() {
			
			// First, hide the 'more info' text by fading out.
			jQuery("div#ie6-warning-moreinfo").fadeOut(250, function() {
				
				// Second, show the explanation text by fading in.
				jQuery("div#ie6-warning-explanation").fadeIn(500, function() {
					
					// Third, expand the bar by sliding down the details layer.
					jQuery("div#ie6-warning").addClass("ie6-warning-expanded");
					jQuery("div#ie6-warning-details").slideDown(500, function() {
						
						// Finally, show the browser buttons by fading in.
						jQuery("span.ie6-warning-browserbutton").fadeIn(400);
						
					});
				});
			});
		});
	}
}