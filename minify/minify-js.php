<?php
define('BASE_DIR', dirname(__FILE__));
include(BASE_DIR . '/jsminplus.php');



// Generate ie6Bar javascript.
$comment		= file_get_contents(BASE_DIR . '/../ie6bar/js/ie6bar.comment.js')
$tinyComment	= file_get_contents(BASE_DIR . '/../ie6bar/js/ie6bar.comment-tiny.js')
$base			= file_get_contents(BASE_DIR . '/../ie6bar/js/ie6bar.base.js');
$minifiedBase	= JSMinPlus::minify($base);
$init			= file_get_contents(BASE_DIR . '/../ie6bar/js/ie6bar.init.js')

$total			= $comment		. $base			. $ init;
$minifiedTotal	= $tinyComment	. $minifiedBase	. $ init;

file_put_contents(BASE_DIR . '/../ie6bar/js/ie6bar.js', $total);
chown(BASE_DIR . '/../ie6bar/js/ie6bar.js', 'dev');
chgrp(BASE_DIR . '/../ie6bar/js/ie6bar.js', 'dev');

file_put_contents(BASE_DIR . '/../ie6bar/js/ie6bar.min.js', $minifiedTotal);
chown(BASE_DIR . '/../ie6bar/js/ie6bar.min.js', 'dev');
chgrp(BASE_DIR . '/../ie6bar/js/ie6bar.min.js', 'dev');



// Generate jQuery Cookie plugin javascript.
$cookieComment			= file_get_contents(BASE_DIR . '/../js/jquery.cookie.comment.js')
$cookieBase				= file_get_contents(BASE_DIR . '/../js/jquery.cookie.base.js');
$cookieMinifiedBase		= JSMinPlus::minify($cookieBase);

$cookieTotal			= $cookieComment	. $cookieBase;
$cookieMinifiedTotal	= $cookieComment	. $cookieMinifiedBase;

file_put_contents(BASE_DIR . '/../js/jquery.cookie.js', $cookieTotal);
chown(BASE_DIR . '/../js/jquery.cookie.js', 'dev');
chgrp(BASE_DIR . '/../js/jquery.cookie.js', 'dev');

file_put_contents(BASE_DIR . '/../js/jquery.cookie.min.js', $cookieMinifiedTotal);
chown(BASE_DIR . '/../js/jquery.cookie.min.js', 'dev');
chgrp(BASE_DIR . '/../js/jquery.cookie.min.js', 'dev');