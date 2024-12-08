import React, {useEffect, useState} from 'react';
import Grid from './Grid';
import Keypad from './Keypad';
import keys from '../constants/keys'
import useWordle from '../hooks/useWordle';
import Modal from './Modal';

export default function wordle({solution}){
    const {currentGuess, guesses, turn, isCorrect, usedKeys, handleKeyup, handleKeyClick} = useWordle(solution);
    const [showModal, setShowModal] = useState(false)
    console.log('usedKeys')
    console.log(usedKeys)

    useEffect(
        ()=>{
            window.addEventListener("keyup", handleKeyup);

            if(isCorrect){
                setTimeout(
                    ()=>setShowModal(true),
                    200
                )
                window.removeEventListener("keyup", handleKeyup)
            }
            if(turn > 5){
                setTimeout(
                    ()=>setShowModal(true),
                    200
                )
                window.removeEventListener("keyup", handleKeyup)
            }
            return ()=> window.removeEventListener("keyup", handleKeyup)
        }, [handleKeyup, isCorrect, turn]
    )

    useEffect(
        () => {
            const wordlemodalclose = document.querySelector('.wordle-modal-close');
            if(wordlemodalclose){
                wordlemodalclose.addEventListener('click', ()=>{
                    setShowModal(false)
                })
            }
        }, [showModal]
    )

    useEffect(() => {
        // Haal alle keypad keys op
        const keypadKeys = document.querySelectorAll('.wordle-keypad > div');
    
        // Definieer een functie voor het handteren van clicks
        const handleClick = (e) => {
            console.log(e.target.innerText);
            handleKeyClick(e.target.innerText);
        };
    
        // Voeg event listener toe aan elk keypad key
        keypadKeys.forEach((key) => {
            key.addEventListener('click', handleClick);
        });
    
        // Cleanup functie om event listeners te verwijderen
        return () => {
            keypadKeys.forEach((key) => {
                key.removeEventListener('click', handleClick);
            });
        };
    }, [handleKeyClick, isCorrect, turn]);
    
    useEffect(() => {
        if (isCorrect || turn > 5) {
            setTimeout(() => setShowModal(true), 200);
        }
    }, [isCorrect, turn]);
    

    console.log(guesses)
    console.log(currentGuess)
    console.log(turn)
    return(
        <div>
            <div>Current Guess - {currentGuess}</div>
            <Grid guesses={guesses} currentGuess={currentGuess} turn={turn} />
            <Keypad keys={keys} usedKeys={usedKeys}/>
            {
                showModal &&
                <Modal isCorrect={isCorrect} turn={turn} solution={solution} />
            }
        </div>
    )
}