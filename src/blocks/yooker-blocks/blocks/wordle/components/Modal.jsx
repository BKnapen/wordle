import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons'

const closeBtn = <FontAwesomeIcon icon={faXmark} />

export default function Modal({isCorrect, solution, turn}){
    return(
        <div className="wordle-modal">
            <div> 
                <span className="wordle-modal-close">
                    { closeBtn }
                </span>
            {
                isCorrect&&(
                    <>
                        <h1>You Win!</h1>
                        <p className="solution">{solution}</p>
                        <p>You found the word in {turn} guesses</p>
                    </>
                )
            }
            {
                !isCorrect&&(
                    <>
                        <h1>Unlucky!</h1>
                        <p className="solution">{solution}</p>
                        <p>Better luck next time</p>
                    </>
                )
            }
            </div>
        </div>
    )
}