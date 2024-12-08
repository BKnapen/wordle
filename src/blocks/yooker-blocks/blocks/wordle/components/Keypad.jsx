import React, {useState, useEffect} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDeleteLeft, faArrowTurnDown } from '@fortawesome/free-solid-svg-icons'


const deleteIcon = <FontAwesomeIcon icon={faDeleteLeft} />
const enterIcon = <FontAwesomeIcon icon={faArrowTurnDown} rotation={90} />

export default function Keypad({keys, usedKeys}){
    const [letters, setLetters] = useState(null)

    useEffect(
        ()=>{
            setLetters(keys);
        }, [keys]
    );

    console.log('usedKeys')
    console.log(usedKeys)
    
    console.log(letters)

    return(
        <div className='wordle-keypad'>
            {letters &&
                letters.map(
                    (l)=>{
                        const color = usedKeys[l.key]
                        return (
                            <>
                            <div key={l.key} className={color}>
                                <span>{l.key}</span>
                            </div>
                                {l.key === 'p'&&
                                    <br/>
                                }
                                {l.key === 'l'&&
                                    <>
                                        <div>
                                            <span className='worddle-action-key'>Backspace</span>
                                            <span>{deleteIcon}</span>
                                        </div>
                                        <br/>
                                    </>
                                }
                                {l.key === 'm'&&
                                    <>
                                        <div>
                                            <span className='worddle-action-key'>Enter</span>
                                            <span>{enterIcon}</span>
                                        </div>
                                        <br/>
                                    </>
                                }
                            </>
                        )
                    }
                )
            }
        </div>
    );
}