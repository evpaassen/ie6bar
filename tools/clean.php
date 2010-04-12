<?php
require('./deleteFile.inc.php');

$files = array();
$files[] = 'ie6bar/js/ie6bar.js';
$files[] = 'ie6bar/js/ie6bar.min.js';
$files[] = 'js/jquery.cookie.js';
$files[] = 'js/jquery.cookie.min.js';
deleteFiles($files);

print "Cleaning finished.\n";