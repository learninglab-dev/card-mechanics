// import Tooltip from "../hooks/Tooltip"
// import React, {useState,useEffect} from "react";
import React, {useContext} from 'react'
import Card from './Card'
import {DataContext} from "../data/GetCards";
import '../style.css'
import image1 from "../images/1.jpg"
import downImage from "../images/downImageSmall.jpg"
const curry = require('ramda').curry

const styles= {
    board: {
        display: "grid",
        gridTemplateColumns: "repeat(6, minmax(75px, 150px) )",
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
const fabData = [
    {
        id: 1,
        name: "Island",
        by: "Zane",
        image: "https://images.unsplash.com/photo-1442530792250-81629236fe54?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=980&h=980&fit=crop&s=9631adb2d2f752e3a0734f393fef634b",
        mainAttack: "tentacles",
        specialAttack: "mind reading"
    },{
        id: 2,
        name: "Forest",
        by: "Lauren",
        image: "https://images.unsplash.com/photo-1468851508491-4f854ec88aa0?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=900&h=900&fit=crop&s=b1222b6a1d3694cac76d2a23c3a02254",
        mainAttack: "claws",
        specialAttack: "sneezing"
    },{
        id: 3,
        name: "Whale",
        by: "Phil",
        image: "https://images.unsplash.com/photo-1454991727061-be514eae86f7?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=900&h=900&fit=crop&s=3c55430f01fe9ac9a9ccb3383d1416ff",
        mainAttack: "brain washing",
        specialAttack: "drowing"
    },{
        id: 4,
        name: "Mountain",
        by: "Casey",
        image: "https://images.unsplash.com/photo-1467890947394-8171244e5410?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=980&h=980&fit=crop&s=9396f0adf263b51b44626228225684d0",
        mainAttack: "anxiety",
        specialAttack: "mind reading"
    },{
        id: 5,
        name: "Boat",
        by: "Katie",
        image: "https://images.unsplash.com/photo-1443302382600-0bfacc473376?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=980&h=980&fit=crop&s=0c0f26518c1001f67b6c2e4480a8d3e0",
        mainAttack: "barbed tail",
        specialAttack: "lightning strike"
    },{
        id: 6,
        name: "Flowers",
        by: "Korleki",
        image: "https://images.unsplash.com/photo-1429091443922-e7d9ae79a837?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=900&h=900&fit=crop&s=e81cb6a60c53788559edb9bec21b80fc",
        mainAttack: "venom",
        specialAttack: "more venom"
    },{
        id: 7,
        name: "Fire",
        by: "Eleanor",
        image: "https://images.unsplash.com/photo-1468245856972-a0333f3f8293?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=900&h=900&fit=crop&s=1f57cc13084e32839627453821a43abf",
        mainAttack: "eating whole",
        specialAttack: "tongue slinging"
    }, {
        id: 8,
        name: "Garden",
        by: "Jordan",
        image: "https://images.unsplash.com/photo-1427392797425-39090deb14ec?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=900&h=900&fit=crop&s=8bfe49466d0da200e61128a8ab0e8fbe",
        mainAttack: "parasitic",
        specialAttack: "poison"
    }, {
        id: 9,
        name: "Garden",
        by: "Jordan",
        image: "https://images.theconversation.com/files/365975/original/file-20201028-15-xtazrw.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=1200.0&fit=crop",
        mainAttack: "parasitic",
        specialAttack: "poison"
    },{
        id: 10,
        name: "Garden",
        by: "Jordan",
        image: "https://bloody-disgusting.com/wp-content/uploads/2020/08/where-sea-monsters-roam-steve-alten.png",
        mainAttack: "parasitic",
        specialAttack: "poison"
    },{
        id: 11,
        name: "Garden",
        by: "Jordan",
        image: image1,
        // image: "https://images.unsplash.com/photo-1427392797425-39090deb14ec?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=900&h=900&fit=crop&s=8bfe49466d0da200e61128a8ab0e8fbe",
        mainAttack: "parasitic",
        specialAttack: "poison"
    },{
        id: 12,
        name: "Garden",
        by: "Jordan",
        image: "https://i.guim.co.uk/img/media/dc98d14d8acc9f965c8c163ac6db1856335cd451/130_0_2022_1213/master/2022.jpg?width=700&quality=85&auto=format&fit=max&s=92418c4f52fc71e42b6982f857891f85",
        mainAttack: "parasitic",
        specialAttack: "poison"
    }];

let firstCard,secondCard

function Card2 ({card,tileStyle, flippedStatus, onClick}){

    let showImage = flippedStatus === true ? card.image : downImage
    return (
        <div className="card" style={tileStyle}>
            <img
                src={showImage}
                style={tileStyle}
                onClick ={onClick}
            />
        </div>
    );
}

let f //yes, let f

// shamelessly stolen shuffle function: https://bost.ocks.org/mike/shuffle/
function shuffle(array) {
    var m = array.length, t, i;

    // While there remain elements to shuffle…
    while (m) {

        // Pick a remaining element…
        i = Math.floor(Math.random() * m--);

        // And swap it with the current element.
        t = array[m];
        array[m] = array[i];
        array[i] = t;
    }

    return array;
}

function Board ({cards}){
    const [flippedArray, setFlippedArray] = React.useState(Array(24).fill(false))
    const [matchedArray, setMatchedArray] = React.useState(Array(24).fill(false))
    const [flippedCount, setFlippedCount] = React.useState(0) // for determining score?

    // const {transform, opacity} = useSpring({
    //     opacity: flipped ? 1 : 0,
    //     transform: `perspective(600px) rotateX(${flipped ? 180 : 0}deg)`,
    //     config: {mass: 5, tension: 500, friction: 80},
    // })


    const checkMatch=(i1,id1,i2,id2)=>{
        if (id1===id2){
            const newMatched=[...matchedArray]
            newMatched[i1]=true
            newMatched[i2]=true
            setMatchedArray(newMatched)
        } else {
            flipCardsDown(i1,i2)
        }
    }

    const curriedCheckMatch=curry(checkMatch) // oh hey look at that!

    function flipCardsDown(i1,i2){
        // needs to be behind a time delay otherwise it happens so quickly the second card doesn't appear to flip at all
        setTimeout(() => {
            const newFlipped2 = [...flippedArray]
            newFlipped2[i1] = false
            newFlipped2[i2] = false
            setFlippedArray(newFlipped2)
        }, 1500)

    }

    function flipCardUp(i){
        let currentFlip = flippedArray[i]
        const newFlipped = [...flippedArray]
        newFlipped[i] = currentFlip === true ? false : true
        setFlippedArray(newFlipped) //
        return newFlipped
    }

    const handleFlip=(i)=>{
        // check to see if the card is already matched
        // if matched, then do nothing. No clicky clicky.
        // if not currently matched, then perform clicky clicky.
        if (matchedArray[i] ===false) {
            setFlippedCount(flippedCount+1)

            let newFlipped = flipCardUp(i)

            // if it's the first turn
            if (newFlipped.filter(x=>x).length %2!=0){
                f=curriedCheckMatch(i,cards[i].id)

            } else if (newFlipped.filter(x=>x).length %2===0){
                f(i,cards[i].id)
            }
        }
    }


    return(
        <div className="board" style={styles.board}>
                {cards.map((data, index)=> {
                    return <Card2
                        // id = card.id
                        card={data}
                        tileStyle={styles.card}
                        flippedStatus={flippedArray[index]}
                        onClick={()=>handleFlip(index)}
                    />
                })}
        </div>
    )




}

function generateGameDeck(gameCards,numCards){

    let selectedCards = shuffle(gameCards).slice(0,numCards) // randomly shuffle and select subset
    let duplicatedCards = [...selectedCards] //duplicate

    console.log(selectedCards,duplicatedCards)
    let readyDeck = shuffle(selectedCards.concat(duplicatedCards)) // one more shuffle to randomize placement

    console.log(readyDeck)
    return readyDeck
}

export default function Game(){

    const gameCards = fabData

    // const gameCards = useContext(DataContext)
    let difficultyLevel=12 // 6,8,12

    let gameCardsReady = generateGameDeck(gameCards,difficultyLevel)
    // console.log(gameCardsReady)


    return (
        <div className="game" >
            <h1 className="header-md center-text">
                Memory Game
            </h1>
            <div className={"game-board"} >
                    <Board
                        cards={gameCardsReady}/>
            </div>

        </div>
    );
}


const fabDataDoubled = [
    {
        id: 1,
        name: "Island",
        by: "Zane",
        image: "https://images.unsplash.com/photo-1442530792250-81629236fe54?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=980&h=980&fit=crop&s=9631adb2d2f752e3a0734f393fef634b",
        mainAttack: "tentacles",
        specialAttack: "mind reading"
    },{
        id: 1,
        name: "Island",
        by: "Zane",
        image: "https://images.unsplash.com/photo-1442530792250-81629236fe54?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=980&h=980&fit=crop&s=9631adb2d2f752e3a0734f393fef634b",
        mainAttack: "tentacles",
        specialAttack: "mind reading"
    },{
        id: 2,
        name: "Forest",
        by: "Lauren",
        image: "https://images.unsplash.com/photo-1468851508491-4f854ec88aa0?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=900&h=900&fit=crop&s=b1222b6a1d3694cac76d2a23c3a02254",
        mainAttack: "claws",
        specialAttack: "sneezing"
    },{
        id: 2,
        name: "Forest",
        by: "Lauren",
        image: "https://images.unsplash.com/photo-1468851508491-4f854ec88aa0?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=900&h=900&fit=crop&s=b1222b6a1d3694cac76d2a23c3a02254",
        mainAttack: "claws",
        specialAttack: "sneezing"
    }, {
        id: 3,
        name: "Whale",
        by: "Phil",
        image: "https://images.unsplash.com/photo-1454991727061-be514eae86f7?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=900&h=900&fit=crop&s=3c55430f01fe9ac9a9ccb3383d1416ff",
        mainAttack: "brain washing",
        specialAttack: "drowing"
    },{
        id: 3,
        name: "Whale",
        by: "Phil",
        image: "https://images.unsplash.com/photo-1454991727061-be514eae86f7?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=900&h=900&fit=crop&s=3c55430f01fe9ac9a9ccb3383d1416ff",
        mainAttack: "brain washing",
        specialAttack: "drowing"
    },{
        id: 4,
        name: "Mountain",
        by: "Casey",
        image: "https://images.unsplash.com/photo-1467890947394-8171244e5410?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=980&h=980&fit=crop&s=9396f0adf263b51b44626228225684d0",
        mainAttack: "anxiety",
        specialAttack: "mind reading"
    }, {
        id: 4,
        name: "Mountain",
        by: "Casey",
        image: "https://images.unsplash.com/photo-1467890947394-8171244e5410?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=980&h=980&fit=crop&s=9396f0adf263b51b44626228225684d0",
        mainAttack: "anxiety",
        specialAttack: "mind reading"
    },{
        id: 5,
        name: "Boat",
        by: "Katie",
        image: "https://images.unsplash.com/photo-1443302382600-0bfacc473376?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=980&h=980&fit=crop&s=0c0f26518c1001f67b6c2e4480a8d3e0",
        mainAttack: "barbed tail",
        specialAttack: "lightning strike"
    },{
        id: 5,
        name: "Boat",
        by: "Katie",
        image: "https://images.unsplash.com/photo-1443302382600-0bfacc473376?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=980&h=980&fit=crop&s=0c0f26518c1001f67b6c2e4480a8d3e0",
        mainAttack: "barbed tail",
        specialAttack: "lightning strike"
    },  {
        id: 6,
        name: "Flowers",
        by: "Korleki",
        image: "https://images.unsplash.com/photo-1429091443922-e7d9ae79a837?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=900&h=900&fit=crop&s=e81cb6a60c53788559edb9bec21b80fc",
        mainAttack: "venom",
        specialAttack: "more venom"
    },{
        id: 6,
        name: "Flowers",
        by: "Korleki",
        image: "https://images.unsplash.com/photo-1429091443922-e7d9ae79a837?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=900&h=900&fit=crop&s=e81cb6a60c53788559edb9bec21b80fc",
        mainAttack: "venom",
        specialAttack: "more venom"
    }, {
        id: 7,
        name: "Fire",
        by: "Eleanor",
        image: "https://images.unsplash.com/photo-1468245856972-a0333f3f8293?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=900&h=900&fit=crop&s=1f57cc13084e32839627453821a43abf",
        mainAttack: "eating whole",
        specialAttack: "tongue slinging"
    }, {
        id: 7,
        name: "Fire",
        by: "Eleanor",
        image: "https://images.unsplash.com/photo-1468245856972-a0333f3f8293?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=900&h=900&fit=crop&s=1f57cc13084e32839627453821a43abf",
        mainAttack: "eating whole",
        specialAttack: "tongue slinging"
    },{
        id: 8,
        name: "Garden",
        by: "Jordan",
        image: "https://images.unsplash.com/photo-1427392797425-39090deb14ec?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=900&h=900&fit=crop&s=8bfe49466d0da200e61128a8ab0e8fbe",
        mainAttack: "parasitic",
        specialAttack: "poison"
    }, {
        id: 8,
        name: "Garden",
        by: "Jordan",
        image: "https://images.unsplash.com/photo-1427392797425-39090deb14ec?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=900&h=900&fit=crop&s=8bfe49466d0da200e61128a8ab0e8fbe",
        mainAttack: "parasitic",
        specialAttack: "poison"
    },{
        id: 9,
        name: "Garden",
        by: "Jordan",
        image: "https://images.theconversation.com/files/365975/original/file-20201028-15-xtazrw.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=1200.0&fit=crop",
        mainAttack: "parasitic",
        specialAttack: "poison"
    }, {
        id: 9,
        name: "Garden",
        by: "Jordan",
        image: "https://images.theconversation.com/files/365975/original/file-20201028-15-xtazrw.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=1200.0&fit=crop",
        mainAttack: "parasitic",
        specialAttack: "poison"
    },{
        id: 10,
        name: "Garden",
        by: "Jordan",
        image: "https://bloody-disgusting.com/wp-content/uploads/2020/08/where-sea-monsters-roam-steve-alten.png",
        mainAttack: "parasitic",
        specialAttack: "poison"
    }, {
        id: 10,
        name: "Garden",
        by: "Jordan",
        image: "https://bloody-disgusting.com/wp-content/uploads/2020/08/where-sea-monsters-roam-steve-alten.png",
        mainAttack: "parasitic",
        specialAttack: "poison"
    },{
        id: 11,
        name: "Garden",
        by: "Jordan",
        image: image1,
        // image: "https://images.unsplash.com/photo-1427392797425-39090deb14ec?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=900&h=900&fit=crop&s=8bfe49466d0da200e61128a8ab0e8fbe",
        mainAttack: "parasitic",
        specialAttack: "poison"
    },{
        id: 11,
        name: "Garden",
        by: "Jordan",
        image: image1,
        // image: "https://images.unsplash.com/photo-1427392797425-39090deb14ec?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=900&h=900&fit=crop&s=8bfe49466d0da200e61128a8ab0e8fbe",
        mainAttack: "parasitic",
        specialAttack: "poison"
    }, {
        id: 12,
        name: "Garden",
        by: "Jordan",
        image: "https://i.guim.co.uk/img/media/dc98d14d8acc9f965c8c163ac6db1856335cd451/130_0_2022_1213/master/2022.jpg?width=700&quality=85&auto=format&fit=max&s=92418c4f52fc71e42b6982f857891f85",
        mainAttack: "parasitic",
        specialAttack: "poison"
    },{
        id: 12,
        name: "Garden",
        by: "Jordan",
        image: "https://i.guim.co.uk/img/media/dc98d14d8acc9f965c8c163ac6db1856335cd451/130_0_2022_1213/master/2022.jpg?width=700&quality=85&auto=format&fit=max&s=92418c4f52fc71e42b6982f857891f85",
        mainAttack: "parasitic",
        specialAttack: "poison"
    }];