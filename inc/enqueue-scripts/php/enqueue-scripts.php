<?php
	if ( ! function_exists( 'yooker_scripts' ) ) :

		/**
	 	 * Enqueue styles.
	 	 *
	 	 * @since Yooker 1.0
	 	 *
	 	 * @return void
	 	 */
		function yooker_scripts() {
		
			$url = untrailingslashit( YKR_MFB_URL );
			$path = untrailingslashit( YKR_MFB_PATH );
		
			wp_register_script(
				'yooker-blocks-js',
				$url. '/build/index.js',
				array( 'react', 'react-jsx-runtime', 'wp-block-editor', 'wp-components', 'wp-data', 'wp-dom-ready', 'wp-element', 'wp-i18n', 'wp-primitives' ),
				filemtime($path. '/build/index.js'),
				true
			);
		
			wp_enqueue_script( 'yooker-blocks-js' );

		}

	endif;

	add_action( 'wp_enqueue_scripts', 'yooker_scripts' );
?>