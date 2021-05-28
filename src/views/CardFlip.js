import React from "react";
import Card from "./Card";
import '../style.css'
import Game from './GamePage2'



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


export default function LaunchGame(){
    const [diffLevel, setDiffLevel] = React.useState(null)
    const [score, setScore] = React.useState(null)

    React.useEffect(() => {
        // Loads when the game starts
    }, [])

    return (
        <div>
            <div className="container">
                <h1 className="header-md center-text">
                    Memory Game
                </h1>
                <div className={"center-text"}>
                    {diffLevel === null ? (
                        < >
                            <button className={"btn"} onClick={() => setDiffLevel(6)}>Easy</button>
                            <button className={"btn"} onClick={() => setDiffLevel(9)}>Medium</button>
                            <button className={"btn"} onClick={() => setDiffLevel(12)}>Hard</button>
                        </>
                    ) : (
                        <>
                            <button className={"btn"}
                                    onClick={() =>
                                        setTimeout(() => {
                                            setDiffLevel(null)
                                        }, 250)}
                            >
                            Start Over
                            </button>
                        </>

                        // <>
                        //     <button
                        //         onClick={() => {
                        //             const prevOptions = options
                        //             setOptions(null)
                        //             setTimeout(() => {
                        //                 setOptions(prevOptions)
                        //             }, 5)
                        //         }}
                        //     >
                        //         Start Over
                        //     </button>
                        //     <button onClick={() => setOptions(null)}>Main Menu</button>
                        // </>
                    )}
                </div>
            </div>

            {diffLevel ? (
                <Game
                    diffLevel={diffLevel}
                    score={score}
                />
            ) : (
                <h2 className={"centered"}>Choose a difficulty to begin!</h2>
            )}
        </div>
   )
}
