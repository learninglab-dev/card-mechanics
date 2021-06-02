/** @jsxImportSource theme-ui */
import React from "react";
import '../style.css'
import Game from './Game'


export default function LaunchGame(){

    const [diffLevel, setDiffLevel] = React.useState(null)
    const [gameState,setGameState] = React.useState(false) //this gets drilled down to Board TODO switch to context? :/


    return (
      <div className={"centered space-between"}>

          {diffLevel ? (
              <Game
                  diffLevel={diffLevel}
                  gameState={gameState}
                  setGameState={setGameState}

              />
          ) : (
              <h2 >Choose a difficulty to begin!</h2>
          )}
        <div className="container">
          <div className={"center-text space-between"}>
            {diffLevel === null ? (
                <React.Fragment >
                  <button className={"button"} onClick={() => setDiffLevel(6)}>Easy</button>
                  <button className={"button"} onClick={() => setDiffLevel(9)}>Medium</button>
                  <button className={"button"} onClick={() => setDiffLevel(12)}>Hard</button>
                </React.Fragment>
            ) : (
                <>
                    <button className={"button"}
                            onClick={() =>
                                setTimeout(() => {
                                    setDiffLevel(null)
                                    setGameState(false)
                                }, 250)}
                    >
                        {gameState===false? `Start Over` : `Play Again?`}
                    </button>

                </>
            )}
          </div>
        </div>

      </div>
    )
}