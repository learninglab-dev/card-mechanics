import React from "react";
import Card from "./Card";
import '../style.css'


// have a single card with "up image" and "down image"
const cards = [
        {
            id:"Monster",
            upImage: "https://i.pinimg.com/originals/1c/0a/0f/1c0a0f33fde5b9afa92ca044273a8750.jpg",
            downImage:"https://i.redd.it/6esxupxwcf1z.jpg"
        }, {
            id:"Monster2" ,
            upImage: "https://i.pinimg.com/originals/1c/0a/0f/1c0a0f33fde5b9afa92ca044273a8750.jpg",
            downImage:"https://i.redd.it/6esxupxwcf1z.jpg"
        }
    ]


const styles={
    card: {
        width: "300px",
        cursor: "pointer",
        overflow: "hidden",
    }
}


export default function CardFlip(){

    const [flipped, setFlipped] = React.useState(false)
    // const [endOfTurn, setEndOfTurn] = React.useState(false)
    // const [matches, setMatches] = React.useState(0)

    //



    const handleFlip=(e)=>{
        e.preventDefault()
        flipped ===true ? setFlipped(false): setFlipped(true)
    }

    console.log(flipped)


    return(
        <div className="card2" >
            <img
                src={flipped === true ? cards[0].upImage : cards[0].downImage}
                alt={cards[0].id}
                onClick={handleFlip}
                style={styles.card}
            />
        </div>
    )
}
