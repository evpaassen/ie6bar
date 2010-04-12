/*
 * Internet Explorer 6 Upgrade Warning (XHTML)
 * 
 * ------------------------------------------------------------------------------------------- 
 * 
 * Version:	1.0
 * Date:	April 12, 2010
 * 
 * Dependencies:
 * - jQuery					(tested with v1.4.2)	(http;//www.jquery.com)
 * - jQuery Cookie plugin	(tested with v1.0)		(http://plugins.jquery.com/project/cookie)
 * 
 * -------------------------------------------------------------------------------------------
 * 
 * Author:	Erik van Paassen
 * Website:	http://www.evpwebdesign.nl
 * 
 * -------------------------------------------------------------------------------------------
 * 
 * THIS PROJECT IS LICENSED UNDER THE MIT LICENSE:
 * 
 * Copyright (c) 2010 Erik van Paassen
 * 
 * Permission is hereby granted, free of charge, to any person
 * obtaining a copy of this software and associated documentation
 * files (the "Software"), to deal in the Software without
 * restriction, including without limitation the rights to use,
 * copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the
 * Software is furnished to do so, subject to the following
 * conditions:
 *
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
 * OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
 * HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
 * WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
 * OTHER DEALINGS IN THE SOFTWARE.
 * 
 */

function ie6Bar(options) {
	// Supported browsers.
	this.textIE		= "Internet Explorer 7+";									if (options.textIE)		this.textIE		= options.textIE;
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
	
	
	// HTML source.
	this.html = '\
		<div id="ie6-warning">\
			<div id="ie6-warning-container">\
				<img id="ie6-warning-logo" src="ie6bar/img/ie6-logo.gif" alt="Internet Explorer 6 logo" />\
				<div id="ie6-warning-text">\
					<span id="ie6-warning-title">' + this.txtTitle + '</span>\
					'+ this.txtSubTitle +'\
				</div>\
				\
				<div id="ie6-warning-moreinfo">' + this.txtMoreInfo + '</div>\
				\
				<div id="ie6-warning-explanation">' + this.txtExplanation + '</div>\
				\
				<div id="ie6-warning-details">\
					<a class="ie6-warning-browserbutton" href="' + this.urlIE + '" target="_blank">\
						<span class="ie6-warning-browserbutton">\
							<a href="' + this.urlIE + '" target="_blank">\
								<img src="ie6bar/img/browsers/browser_ie.gif" alt="' + this.textIE + '" />\
							</a>\
							<span class="ie6-warning-browserbutton-title">' + this.textIE + '</span>\
						</span>\
					</a>\
					\
					<a class="ie6-warning-browserbutton" href="' + this.urlFirefox + '" target="_blank">\
						<span class="ie6-warning-browserbutton">\
							<a href="' + this.urlFirefox + '" target="_blank">\
								<img src="ie6bar/img/browsers/browser_firefox.gif" alt="' + this.txtFirefox + '" />\
							</a>\
							<span class="ie6-warning-browserbutton-title">' + this.txtFirefox + '</span>\
						</span>\
					</a>\
					\
					<a class="ie6-warning-browserbutton" href="' + this.urlChrome + '" target="_blank">\
						<span class="ie6-warning-browserbutton">\
							<a href="' + this.urlChrome + '" target="_blank">\
								<img src="ie6bar/img/browsers/browser_chrome.gif" alt="' + this.txtChrome + '" />\
							</a>\
							<span class="ie6-warning-browserbutton-title">' + this.txtChrome + '</span>\
						</span>\
					</a>\
					\
					<a class="ie6-warning-browserbutton" href="' + this.urlSafari + '" target="_blank">\
						<span class="ie6-warning-browserbutton">\
							<a href="' + this.urlSafari + '" target="_blank">\
								<img src="ie6bar/img/browsers/browser_safari.gif" alt="' + this.txtSafari + '" />\
							</a>\
							<span class="ie6-warning-browserbutton-title">' + this.txtSafari + '</span>\
						</span>\
					</a>\
					\
					<a class="ie6-warning-browserbutton" href="' + this.urlOpera + '" target="_blank">\
						<span class="ie6-warning-browserbutton">\
							<a href="' + this.urlOpera + '" target="_blank">\
								<img src="ie6bar/img/browsers/browser_opera.gif" alt="' + this.txtOpera + '" />\
							</a>\
							<span class="ie6-warning-browserbutton-title">' + this.txtOpera + '</span>\
						</span>\
					</a>\
				</div>\
			</div>\
			<a id="ie6-warning-close" title="' + this.txtClose + '"></a>\
		</div>';
	
	
	return true;
}

ie6Bar.prototype.initialize = function() {
	// Execute only if no 'hide' cookie is present.
	if ($.cookie(this.cookieName) != "hide") {
		// Add the warning bar to the body and let it fade in.
		$("body").prepend(this.html);
		$("div#ie6-warning").fadeIn(200);
		
		// Attach the 'close' action.
		$("a#ie6-warning-close").click(function() {
			
			// Set a cookie wich lasts for 28 days.
			$.cookie(this.cookieName, "hide", { expires: this.cookieDays });
			
			// First, hide the browser logo buttons (if necessary) by fading out.
			$("span.ie6-warning-browserbutton").fadeOut(400, function() {
				
				// Second, hide the details layer (if necessary) by sliding up.
				$("div#ie6-warning-details").slideUp(500, function() {
					
					// Finally, hide the bar entirely by sliding up.
					$("div#ie6-warning").slideUp(500);
					
				});
			});
		});
		
		// Attach the 'expand' action.
		$("div#ie6-warning-container").click(function() {
			
			// First, hide the 'more info' text by fading out.
			$("div#ie6-warning-moreinfo").fadeOut(250, function() {
				
				// Second, show the explanation text by fading in.
				$("div#ie6-warning-explanation").fadeIn(500, function() {
					
					// Third, expand the bar by sliding down the details layer.
					$("div#ie6-warning").addClass("ie6-warning-expanded");
					$("div#ie6-warning-details").slideDown(500, function() {
						
						// Finally, show the browser buttons by fading in.
						$("span.ie6-warning-browserbutton").fadeIn(400);
						
					});
				});
			});
		});
	}
}

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
