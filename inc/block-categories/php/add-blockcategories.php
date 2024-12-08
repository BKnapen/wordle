<?php
	if ( ! function_exists( 'yooker_add_block_category' ) ) :
		function yooker_add_block_category( $block_categories, $block_editor_context ) {
	
    		return array_merge(
        		$block_categories,
        		array(
            		array(
						'slug'  => 'yooker-blocks/games',
						'title' => __( 'Games', 'text-domain' ),
                		'icon'  => null,
					),
            		array(
						'slug'  => 'yooker-blocks',
						'title' => __( 'Yooker blocks', 'text-domain' ),
                		'icon'  => null,
            		),
        		)
    		);
		}
	endif;

	add_filter( 'block_categories_all', 'yooker_add_block_category', 10, 2 );
?>