/** @jsxImportSource theme-ui */
import { useParams } from 'react-router-dom'

export default function LaunchGame({ cards }) {
  const { deck } = useParams()
  console.log('here')

  return (
    <div>
      <p>here's the game</p>
      {JSON.stringify(cards)}
    </div>
  )
}

//Game state
  // - number of cards
  // - state for each card flipped or not
  // - turn info, whether to flip card back upside down
  // - object with card as single entry, with id, turn (bool), flip (bool)
  // { 1: { key: monster1, turn: , flip: }, 2: {key, turn, flip}, ...}


// gameData = {
//   cards: {
//     1: {type: [from data], faceUp: false}
//     2: ...
//   },
//   endOfTurn: false, (tracks every two card flips -> match fxn (flip or don't flip))
//   numMatches: 4/8/16, (doesn't need to be state, just cards.length)
//   matches: 0,
//   startTime: null,
//   endTime: null,
//   endOfGame: false,
// }

// Game Play
  // choose difficulty
  // number of cards x 2
  // set board, nothing is flipped, turn = 0, start timer
  // flip two cards
  //  if cards don't match, flip them back over
  //  if cards match, keep them right side up
  // new turn
  // rinse and repeat until all cards are matched, stop timer