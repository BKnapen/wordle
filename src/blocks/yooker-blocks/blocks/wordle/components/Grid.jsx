import Row from './Row';

export default function Grid({guesses, currentGuess, turn}){
    console.log('guesses')
    console.log(guesses)
    console.log('currentGuess')
    console.log(currentGuess)
    console.log('turn')
    console.log(turn)
    return(
        <div>
            {
                guesses.map(
                    (g, i)=>{
                        if(turn === i){
                            return <Row key={i} currentGuess={currentGuess} />;
                        }
                        return <Row key={i} guess={g} />;
                    }
                )
            }
        </div>
    )
}