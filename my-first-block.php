<?php
    /**
     * @package My First Block
     * @version 1.0
     */
    /*
      Plugin Name: My First Block
      Plugin URI: https://www.yooker.nl/
      Description: My First Block
      Author: B. Knapen
      Version: 1.1
      Author URI: https://www.yooker.nl/
     */

    // Exit if accessed directly.
    defined( 'ABSPATH' ) || exit;

    define( 'YKR_MFB_PATH', plugin_dir_path( __FILE__ ) );
	define( 'YKR_MFB_URL', plugin_dir_url( __FILE__ ) );

    $includes = array(
        'block-categories',
        'block-editor-assets',
        'enqueue-scripts',
        'enqueue-styles',
    );

    foreach( $includes as $include) :
        $file = plugin_dir_path( __FILE__ ) . 'inc/' .$include.'/index.php';
        include_once $file;
    endforeach;
?>