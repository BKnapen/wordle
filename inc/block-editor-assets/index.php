<?php
	// Exit if accessed directly.
	defined( 'ABSPATH' ) || exit;

	$includes = array(
		'block-editor-assets'
	);

	foreach ( $includes as $include ) {
		include_once YKR_MFB_PATH . '/inc/block-editor-assets/php/' . $include . '.php';
	}
?>