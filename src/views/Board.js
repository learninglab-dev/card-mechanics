import React, {useContext} from 'react'
import Card from './Card'
import {DataContext} from "../data/GetCards";
import '../style.css'

const curry = require('ramda').curry

const styles= {
    board: {
        display: "grid",
        gridTemplateColumns: "repeat(6, minmax(15vh, 15vh) )",
        gridAutoRows: "auto",
        alignItems: "stretch",
        gridGap: "5px 5px",
        justifyItems: "center",
        justifyContent: 'center',
        margin: "2vw"
    },
    card: {
        width: "100%",
        height: "auto",
        // margin: "15px",
        cursor: "pointer",
        overflow: "hidden",
    }
}

let f //yes, let f

export default function Board ({cards,gameState,setGameState}){


    const [flippedArray, setFlippedArray] = React.useState(Array(cards.length).fill(false))
    const [matchedArray, setMatchedArray] = React.useState(Array(cards.length).fill(false))
    const [flippedCount, setFlippedCount] = React.useState(0) // for determining score?
    const [buttonDisabled, setButtonDisabled]= React.useState(false)


    // end of game condition
    React.useEffect(()=>{
        setTimeout(()=>{
            if(matchedArray.every(e=>e===true)){setGameState(true)}
        },1000)

    },[matchedArray])


    const checkMatch=(i1,id1,i2,id2)=>{
        if (id1===id2){
            const newMatched=[...matchedArray]
            newMatched[i1]=true
            newMatched[i2]=true
            setMatchedArray(newMatched)
            setButtonDisabled(false)

        } else {

            flipCardsDown(i1,i2)


        }
    }

    const curriedCheckMatch=curry(checkMatch) // oh hey look at that!

    const flipCardsDown=(i1,i2)=>{
        // needs to be behind a time delay otherwise it happens so quickly the second card doesn't appear to flip at all
        setTimeout(() => {
            const newFlipped2 = [...flippedArray]
            newFlipped2[i1] = false
            newFlipped2[i2] = false
            setFlippedArray(newFlipped2)
            setButtonDisabled(false)

        }, 1000)

    }

    const flipCardUp=(i)=>{
        let currentFlip = flippedArray[i]
        const newFlipped = [...flippedArray]
        newFlipped[i] = currentFlip === true ? false : true
        setFlippedArray(newFlipped) //
        return newFlipped
    }

    const handleFlip=(i)=>{

        // if two cards are flipped, disable clicking - janky, I know
        if (buttonDisabled ===true){
            setTimeout(()=>{
                setButtonDisabled(false)
            },200)

        } else {
            // check to see if the card is already matched
            // if matched, then do nothing. No clicky clicky.
            // if not currently matched, then perform clicky clicky.
            if (matchedArray[i] ===false && flippedArray[i]===false) {
                setFlippedCount(flippedCount + 1)

                let newFlipped = flipCardUp(i)

                // if it's the first turn
                if (newFlipped.filter(x => x).length % 2 != 0) {
                    f = curriedCheckMatch(i, cards[i].id)

                } else if (newFlipped.filter(x => x).length % 2 === 0) {
                    setButtonDisabled(true)
                    f(i, cards[i].id)

                }
            }
        }
    }


    return(
        <div className="board" style={styles.board}>
                {cards.map((data, index)=> {
                    return (
                        <li key={index}>
                            <Card
                                // id = card.id
                                data={data}
                                style={styles.card}
                                bool={false}
                                flippedStatus={flippedArray[index]}
                                onClick={()=>handleFlip(index)}
                                disabled={buttonDisabled}
                            />
                        </li>
                    )
                })}
        </div>
    )
}

