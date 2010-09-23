<?php
define('BASE_DIR', dirname(dirname(__FILE__)));
define('SRC_DIR', BASE_DIR . '/src');
define('OUT_DIR', BASE_DIR . '/bin');


// Include the JavaScript minifying library JSMin+.
(require(BASE_DIR . '/tools/lib/jsminplus.php'))
	or fatalError('The JSMin+ library is missing!');

// Include the CSS minifying library CssMin.
(require(BASE_DIR . '/tools/lib/cssmin.php'))
	or fatalError('The CssMin library is missing!');


// Print a string, followed by a newline.
function println($string) { print $string . "\n"; }

// Raises a fatal error.
function fatalError($msg) {
	println($msg);
	println('=> FATAL ERROR');
	die();
}

// Removes an entire directory, including it's contents.
function deleteDirectory($target) {
	$dir = @opendir($target);
	if (!$dir && is_dir($target)) {
		fatalError('Cannot open directory: ' . $target);
	} elseif (!$dir) {
		return;
	}
	
	while (($file = readdir($dir)) !== FALSE) {
		if (($file != '.') && ($file != '..')) {
			if (is_dir($target . '/' . $file)) {
				deleteDirectory($target . '/' . $file);
			} else {
				@unlink($target . '/'. $file) or fatalError('Cannot remove file: ' . $target . '/'. $file);
				println('Removed:    ' . $target . '/' . $file);
			}
		}
	}
	
	closedir($dir);
	
	@rmdir($target . '/'. $file) or fatalError('Cannot remove directory: ' . $target . '/'. $file);
	println('Removed:    ' . $target . '/' . $file);
}

// Creates an output directory, if it doesn't exist yet.
function createOutputDirectory($dir) {
	if (!is_dir($dir) && !@mkdir($dir))
		fatalError('Cannot create output directory: ' . $dir);
}

// Recursively copy a directory with its contents.
function recursiveCopy($s, $d) {
	$dir = @opendir($s) or fatalError('Cannot open directory: ' . $s);
	createOutputDirectory($d);
	
	while (($file = readdir($dir)) !== FALSE) {
		if (($file != '.') && ($file != '..')) {
			if (is_dir($s . '/' . $file)) {
				recursiveCopy($s . '/' . $file, $d . '/' . $file);
			} else {
				@copy($s . '/' . $file, $d . '/' . $file) or fatalError('Cannot copy: ' . $s . '/' . $file . ' => ' . $d . '/' . $file);
				println('Copied:    ' . realpath($d . '/' . $file));
			}
		}
	}
	
	closedir($dir);
}

// Parses the HTML-template for inclusion in JavaScript.
function parseHTML($html) {
	// Escape the slashes and single quotes, so they don't break the surrounding JavaScript.
	$html = str_replace("\\", "\\\\", $html);
	$html = str_replace("'", "\\'", $html);
	
	// Replace template variables.
	$replacements						= array();
	$replacements['{txtTitle}']			= "' + this.txtTitle + '";
	$replacements['{txtSubTitle}']		= "' + this.txtSubTitle + '";
	$replacements['{txtMoreInfo}']		= "' + this.txtMoreInfo + '";
	$replacements['{txtExplanation}']	= "' + this.txtExplanation + '";
	$replacements['{txtIE}']			= "' + this.txtIE + '";
	$replacements['{urlIE}']			= "' + this.urlIE + '";	
	$replacements['{txtFirefox}']		= "' + this.txtFirefox + '";
	$replacements['{urlFirefox}']		= "' + this.urlFirefox + '";
	$replacements['{txtChrome}']		= "' + this.txtChrome + '";
	$replacements['{urlChrome}']		= "' + this.urlChrome + '";
	$replacements['{txtSafari}']		= "' + this.txtSafari + '";
	$replacements['{urlSafari}']		= "' + this.urlSafari + '";
	$replacements['{txtOpera}']			= "' + this.txtOpera + '";
	$replacements['{urlOpera}']			= "' + this.urlOpera + '";
	$replacements['{txtClose}']			= "' + this.txtClose + '";
	$html = str_replace(array_keys($replacements), $replacements, $html);
	
	// Replace tabs, newlines and returns by spaces.
	$whitespace = array("\t", "\n", "\r");
	$html = str_replace($whitespace, ' ', $html);
	
	return $html;
}

// Replaces '{{{HTML}}}' in the haystack by the supplied HTML-string.
function insertHTML($html, $haystack) {
	return str_replace('{{{HTML}}}', $html, $haystack);
}

if ($argc == 2 && (strtolower($argv[1]) == 'clean' || strtolower($argv[1]) == 'cleanup')) {
	println('=> STARTING CLEANUP');
	deleteDirectory(OUT_DIR);
	println('=> CLEANUP SUCCESFUL');
} elseif ($argc == 2 && strtolower($argv[1]) == 'build') {
	println('=> STARTING BUILD');
	
	// Generate ie6Bar javascript.
	$comment		= @file_get_contents(SRC_DIR . '/ie6bar/js/ie6bar.comment.js') or fatalError('Cannot open file: ' . SRC_DIR . '/ie6bar/js/ie6bar.comment.js');
	$tinyComment	= @file_get_contents(SRC_DIR . '/ie6bar/js/ie6bar.comment-tiny.js') or fatalError('Cannot open file: ' . SRC_DIR . '/ie6bar/js/ie6bar.comment-tiny.js');
	$core			= @file_get_contents(SRC_DIR . '/ie6bar/js/ie6bar.core.js') or fatalError('Cannot open file: ' . SRC_DIR . '/ie6bar/js/ie6bar.core.js');
	$init			= @file_get_contents(SRC_DIR . '/ie6bar/js/ie6bar.init.js') or fatalError('Cannot open file: ' . SRC_DIR . '/ie6bar/js/ie6bar.init.js');
	$html			= @file_get_contents(SRC_DIR . '/ie6bar/js/ie6bar.html') or fatalError('Cannot open file: ' . SRC_DIR . '/ie6bar/js/ie6bar.html');

	$css			= @file_get_contents(SRC_DIR . '/ie6bar/css/ie6bar.css') or fatalError('Cannot open file: ' . SRC_DIR . '/ie6bar/css/ie6bar.css');
	$cssTinyComment	= @file_get_contents(SRC_DIR . '/ie6bar/css/ie6bar.comment-tiny.css') or fatalError('Cannot open file: ' . SRC_DIR . '/ie6bar/css/ie6bar.comment-tiny.css');

	$coreAndHtml			= insertHTML(parseHTML($html), $core);
	$minifiedCoreAndHtml	= JSMinPlus::minify($coreAndHtml);
	$minifiedCss			= CssMin::minify($css);

	$total			= $comment			. "\n\n" . $coreAndHtml			. "\n\n" . $init;
	$minifiedTotal	= $tinyComment		. "\n\n" . $minifiedCoreAndHtml	. "\n\n" . $init;
	$minifiedCss	= $cssTinyComment	. "\n\n" . $minifiedCss;



	// Check/create output directories.
	createOutputDirectory(OUT_DIR);
	createOutputDirectory(OUT_DIR . '/ie6bar');
	createOutputDirectory(OUT_DIR . '/ie6bar/js');
	createOutputDirectory(OUT_DIR . '/ie6bar/css');


	// Copy the license file.
	copy(SRC_DIR . '/ie6bar/LICENSE.txt', OUT_DIR . '/ie6bar/LICENSE.txt') or fatalError('Cannot copy: ' . SRC_DIR . '/ie6bar/LICENSE.txt => ' . OUT_DIR . '/ie6bar/LICENSE.txt');
	println('Copied:    ' . realpath(OUT_DIR . '/ie6bar/LICENSE.txt'));

	// Copy the 'js' and ie6bar/img' directories.
	recursiveCopy(SRC_DIR . '/js', OUT_DIR . '/js');
	recursiveCopy(SRC_DIR . '/ie6bar/img', OUT_DIR . '/ie6bar/img');

	// Copy the main css fily.
	copy(SRC_DIR . '/ie6bar/css/ie6bar.css', OUT_DIR . '/ie6bar/css/ie6bar.css') or fatalError('Cannot copy: ' . SRC_DIR . '/ie6bar/css/ie6bar.css =>' . OUT_DIR . '/ie6bar/css/ie6bar.css');
	println('Copied:    ' . realpath(OUT_DIR . '/ie6bar/css/ie6bar.css'));

	// Write JavaScript output.
	file_put_contents(OUT_DIR . '/ie6bar/js/ie6bar.js', $total) or fatalError('Cannot write output to: ' . OUT_DIR . '/ie6bar/js/ie6bar.js');
	println('Generated: ' . realpath(OUT_DIR . '/ie6bar/js/ie6bar.js'));

	file_put_contents(OUT_DIR . '/ie6bar/js/ie6bar.min.js', $minifiedTotal) or fatalError('Cannot write output to: ' . OUT_DIR . '/ie6bar/js/ie6bar.min.js');
	println('Generated: ' . realpath(OUT_DIR . '/ie6bar/js/ie6bar.min.js'));


	// Write CSS output.
	file_put_contents(OUT_DIR . '/ie6bar/css/ie6bar.min.css', $minifiedCss) or fatalError('Cannot write output to: ' . OUT_DIR . '/ie6bar/css/ie6bar.min.css');
	println('Generated: ' . realpath(OUT_DIR . '/ie6bar/css/ie6bar.min.css'));

	println('=> BUILD SUCCESFUL');
} else {
	println('Usage: php ie6bar.php <command>');
	println('');
	println('Commands:');
	println('build - Build IE6Bar package.');
	println('clean - Clean up the bin folder, where the output generated by this build tool is stored.');
}