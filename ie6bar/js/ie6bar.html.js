	// HTML source.
	this.html = '\
		<div id="ie6-warning">\
			<div id="ie6-warning-container">\
				<div id="ie6-warning-logo"></div>\
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