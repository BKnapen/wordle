<?php
	if ( ! function_exists( 'yooker_styles' ) ) :

		/**
	 	 * Enqueue styles.
	 	 *
	 	 * @since Yooker 1.0
	 	 *
	 	 * @return void
	 	 */
		function yooker_styles() {
		
			$url = untrailingslashit( YKR_MFB_URL );
			$path = untrailingslashit( YKR_MFB_PATH );
			// Register theme stylesheet.

    		
			wp_enqueue_style(
        		'yooker-index-css', // Handle.
        		$url . '/build/index.css',
				array( 'wp-components' ),
				//array( 'react', 'react-jsx-runtime', 'wp-blocks', 'wp-components', 'wp-data', 'wp-dom-ready', 'wp-element', 'wp-i18n', 'wp-primitives' ),
				filemtime($path. '/build/index.css')
    		);
		}

	endif;

	add_action( 'wp_enqueue_scripts', 'yooker_styles' );
?>