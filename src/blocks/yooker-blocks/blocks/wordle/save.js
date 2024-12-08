/**
 * WordPress dependencies
 */
import { 
	useSelect, useDispatch, withSelect
} from '@wordpress/data';

import { 
	__ 
} from '@wordpress/i18n';

import {
	useBlockProps,
	InspectorControls,
	store as blockEditorStore
	
} from '@wordpress/block-editor';

import {
	useState,
	Fragment
} from '@wordpress/element';

import {
	PanelBody,
} from '@wordpress/components';

import Wordle from './components/Wordle'
import './css/index.css'

/*function HeaderEdit( props ) {*/
const wordleEdit = (props) => {
	const {
		attributes,
		setAttributes,
	} = props;
    const solution = null;
	return(
		<>	
            <style>
                {
                    `:root{
                        --right-background: ${attributes.rightBackgroundColor} !important;
                        --right-border-color: ${attributes.rightBackgroundColor} !important;
                        --right-color: ${attributes.rightTextColor} !important;
                        --is-in-word-background: ${attributes.isInWordBackgroundColor} !important;;
                        --is-in-word-border-color: ${attributes.isInWordBackgroundColor} !important;
                        --is-in-word-color: ${attributes.isInWordTextColor} !important;
                        --wrong-background: ${attributes.wrongBackgroundColor} !important;
                        --wrong-border-color: ${attributes.wrongBackgroundColor} !important;
                        --wrong-color: ${attributes.wrongTextColor} !important;
                    }`
                }
            </style>
            <div id='wordle-game'></div>
		</>
	)
}
export default wordleEdit;