<?php
define('BASE_DIR', dirname(__FILE__) . '/../');

function deleteFile($file) {
	if (file_exists(BASE_DIR . $file)) {
		$filePath = realpath(BASE_DIR . $file);
		
		unlink(BASE_DIR . $file);
		
		if (file_exists(BASE_DIR . $file)) {
			print '[ERROR] Could not delete: ' . $filePath . "\n";
		} else {
			print 'Deleted: ' . $filePath . "\n";
		}
	}
}

function deleteFiles($fileArray) {
	foreach ($fileArray as $file)
		deleteFile($file);
}