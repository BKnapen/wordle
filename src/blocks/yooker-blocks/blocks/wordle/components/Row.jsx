export default function Row({guess, currentGuess}){
    if(guess){
        return(
            <div className="wordle-row past">
                {
                    guess.map(
                        (l, i) => (
                            <div key={i} className={l.color}>
                                {l.key}
                            </div>
                        )
                    )
                }
            </div>
        )
    }
    if(currentGuess){
        let letters = currentGuess.split('')
        console.log(letters)
        return(
            <div className="wordle-row current">
                {
                    letters.map(
                        (letter, i) => (
                            <div key={i} className="filled">
                                {letter}
                            </div>
                        )
                    )
                }
                {
                    [...Array(5 - letters.length)].map(
                        (_, i) => (
                            <div key={i}>
                            </div>
                        )
                    )
                }
            </div>
        )
    }
    return(
        <div className="wordle-row">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    )
}