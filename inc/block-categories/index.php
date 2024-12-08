<?php
	// Exit if accessed directly.
	defined( 'ABSPATH' ) || exit;

	$includes = array(
		'add-blockcategories'
	);

	foreach ( $includes as $include ) {
		include_once YKR_MFB_PATH . '/inc/block-categories/php/' . $include . '.php';
	}
?>