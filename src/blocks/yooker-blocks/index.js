import * as wordle from './blocks/wordle';

const getAllBlocks = () => [
	wordle
]

const registerYookerBlocks = (
	blocks = getAllBlocks()
) => {
	blocks.forEach(
		( { init } ) => init()
	)
}

registerYookerBlocks()