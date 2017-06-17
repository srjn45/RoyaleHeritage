<?php

$dir = "../../" . $_GET['path'];

$images = [];

// Open a directory, and read its contents
if (is_dir($dir)) {
	if ($dh = opendir($dir)) {
		while (($file = readdir($dh)) !== false) {
			if(@is_array(getimagesize($dir . $file))) {
				array_push($images, $file);
			}
		}
		closedir($dh);
	}
}
echo json_encode($images);

?>