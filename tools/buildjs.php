<?php
define('BASE_DIR', dirname(__FILE__));
require(BASE_DIR . '/lib/jsminplus.php');

function println($string) { print $string . "\n"; }

function minifyHTML($html) {
	return preg_replace("/\\\\[\\s]*\\n[\\s]*/", '', $html);
}

function insertHTML($html, $haystack) {
	return str_replace("/*INSERT HTML-FILE HERE*/", $html, $haystack);
}



// Generate ie6Bar javascript.
$comment		= file_get_contents(BASE_DIR . '/../ie6bar/js/ie6bar.comment.js');
$tinyComment	= file_get_contents(BASE_DIR . '/../ie6bar/js/ie6bar.comment-tiny.js');
$html			= file_get_contents(BASE_DIR . '/../ie6bar/js/ie6bar.html.js');
$base			= insertHTML($html, file_get_contents(BASE_DIR . '/../ie6bar/js/ie6bar.base.js'));
$minifiedBase	= JSMinPlus::minify(insertHTML(minifyHTML($html), file_get_contents(BASE_DIR . '/../ie6bar/js/ie6bar.base.js')));
$init			= file_get_contents(BASE_DIR . '/../ie6bar/js/ie6bar.init.js');

$total			= $comment		. $base			. $init;
$minifiedTotal	= $tinyComment	. $minifiedBase	. $init;

file_put_contents(BASE_DIR . '/../ie6bar/js/ie6bar.js', $total);
println('Generated: ' . realpath(BASE_DIR . '/../ie6bar/js/ie6bar.js'));

file_put_contents(BASE_DIR . '/../ie6bar/js/ie6bar.min.js', $minifiedTotal);
println('Generated: ' . realpath(BASE_DIR . '/../ie6bar/js/ie6bar.min.js'));



// Generate jQuery Cookie plugin javascript.
$cookieComment			= file_get_contents(BASE_DIR . '/../js/jquery.cookie.comment.js');
$cookieBase				= file_get_contents(BASE_DIR . '/../js/jquery.cookie.base.js');
$cookieMinifiedBase		= JSMinPlus::minify($cookieBase);

$cookieTotal			= $cookieComment	. $cookieBase;
$cookieMinifiedTotal	= $cookieComment	. $cookieMinifiedBase;

file_put_contents(BASE_DIR . '/../js/jquery.cookie.js', $cookieTotal);
println('Generated: ' . realpath(BASE_DIR . '/../js/jquery.cookie.js'));

file_put_contents(BASE_DIR . '/../js/jquery.cookie.min.js', $cookieMinifiedTotal);
println('Generated: ' . realpath(BASE_DIR . '/../js/jquery.cookie.min.js'));