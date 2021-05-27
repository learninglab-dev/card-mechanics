// GamePage outline - First Draft
// Call <Game>
//  <Shuffle>
//      USER: clicks a difficulty level button (number of cards)
//        -> grab context data
//        -> subset at random
//        -> grab 1/2 (number of cards)
//        -> duplicate
//        -> shuffle to randomize order and give each item the property card.index = index
//        -> returns arrayOfCards to <Board>
//  <Board>
//      -> read in arrayOfCards
//      -> set up state
//          -> [flippedCard] state for each card in arrayOfCards  (default FALSE)
//          -> [matchedCard] state for each card in arrayOfCards (default FALSE)
//          -> [turnStatus] (default null, other values: first, second)
//                 -> going to need a reducer for this one
//      -> for each item in arrayOfCards, generate a <Card>
//      -> {handleFlip} function
//          -> if index of card clicked (not ID, index position) is in [matchedArray{i}]
//              -> then do nothing (card is permanently flipped)
//          -> if not
//               -> when card(i) is clicked, toggle the state [flippedCard(i)]
//               -> update [turnStatus]
//                  -> if null, set to first
//                  -> if first, set to second
//               -> call {TurnReducer}
//      -> {checkMatch (id1, id2)} function/Reducer?
//          -> if id1===id2
//              -> keep both cards' flipped states as True
//              -> [matchedArray(i1)] & [matchedArray(i2)] == TRUE
//              -> {checkEndOfGame}
//          -> if not a match
//              -> reset both cards' flipped states as FALSE
//                     -> flip <Cards>
//      -> {checkEndOfGame}
//          -> are all items of [matchedArray] true?
//              -> if no, continue
//              -> if yes, {endOfGame}
//  {TurnReducer} - NIXED
//      -> if [turnStatus] = first card flipped
//          -> set id1 = card(i)[id]
//      -> if [turnStatus] = second card flipped
//         -> set id2 = card(i)[id]
//         -> {checkMatch (id1, id2)}
//         -> reset id1 & id2 == null
//         -> set [turnStatus] = null
// <Card>
//      -> downImage = ocean.jpg
//      -> read in: card.id, card.index, card.upImage, [flippedCard(i)], onClick = {handleFlip}
//      -> return image with styling