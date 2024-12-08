<?php
	if ( ! function_exists( 'yooker_blocks_editor_assets' ) ) :
		function yooker_blocks_editor_assets(){
			$url = untrailingslashit( YKR_MFB_URL );
			$path = untrailingslashit( YKR_MFB_PATH );
    		// Scripts.
			wp_register_script(
				'yooker-blocks-js', // Handle.
				$url . '/build/index.js',
				array( 'wp-blocks', 'wp-editor', 'wp-components', 'wp-i18n', 'wp-element', 'wp-plugins', 'wp-edit-post', 'wp-edit-site' ),
				//array( 'react', 'react-jsx-runtime', 'wp-block-editor', 'wp-components', 'wp-data', 'wp-dom-ready', 'wp-element', 'wp-i18n', 'wp-primitives' ),
				filemtime($path. '/build/index.js'), 
				false 
	 		);
	
			wp_enqueue_script( 'yooker-blocks-js' );
		
			wp_localize_script(
				'yooker-blocks-js', 
				'yookerblocks', 
				array(
					'ajax_url' => admin_url( 'admin-ajax.php' ),
					'assetsurl' => $url
				)
			);

			wp_enqueue_style(
        		'yooker-index-css', // Handle.
        		$url . '/build/index.css',
				array( 'wp-edit-blocks' ),
				filemtime($path. '/build/index.css')
    		);
		} // End function my_custom_block_editor_assets().
	endif;

	// Hook: Editor assets.
	add_action( 'enqueue_block_editor_assets', 'yooker_blocks_editor_assets' );
?>