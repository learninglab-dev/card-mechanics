/** @jsxImportSource theme-ui */
import React from "react";
import Card from "./Card";
import '../style.css'
import Game from './GamePage2'


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