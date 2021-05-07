import React from "react";


// have a single card with "up image" and "down image"
const card = {upImage: "https://i.pinimg.com/originals/1c/0a/0f/1c0a0f33fde5b9afa92ca044273a8750.jpg", downImage:"https://i.redd.it/6esxupxwcf1z.jpg"}

console.log(card.upImage)

const style = {
    card: {
        width: "200px",
        height: "auto",
        // margin: "15px",
        overflow: "hidden",
        justifyItems: "center"
    }
}

export default function CardFlip(){
    const [flipped, setFlipped] = React.useState(false)

    const handleFlip=(e)=>{
        e.preventDefault()
        flipped ===true ? setFlipped(false): setFlipped(true)
    }

    console.log(flipped)


    return(
        <div className="card" style={style.card}>
            <img
                src={flipped === true? card.upImage : card.downImage}
                alt={'UpImage'}
                onClick={handleFlip}
            />
        </div>
    )
}
