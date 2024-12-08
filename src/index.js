import React from 'react';
import { createRoot } from 'react-dom/client';

import './blocks/yooker-blocks';

import Wordle from './blocks/yooker-blocks/Apps/Wordle';

const wordleGame = document.getElementById('wordle-game');

if(wordleGame){
    const wordle = createRoot(wordleGame);
    wordle.render(<Wordle />);
}