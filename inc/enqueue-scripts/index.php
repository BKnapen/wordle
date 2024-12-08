<?php
	// Exit if accessed directly.
	defined( 'ABSPATH' ) || exit;

	$includes = array(
		'enqueue-scripts'
	);

	foreach ( $includes as $include ) {
		include_once YKR_MFB_PATH . '/inc/enqueue-scripts/php/' . $include . '.php';
	}
?>