<?php
require('./deleteFile.inc.php');

$files = array();

$files[] = 'ie6bar/js/ie6bar.comment.js';
$files[] = 'ie6bar/js/ie6bar.comment-tiny.js';
$files[] = 'ie6bar/js/ie6bar.html.js';
$files[] = 'ie6bar/js/ie6bar.base.js';
$files[] = 'ie6bar/js/ie6bar.init.js';

$files[] = 'js/jquery.cookie.comment.js';
$files[] = 'js/jquery.cookie.base.js';

deleteFiles($files);

print "Removal of source files finished.\n";