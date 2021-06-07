/** @jsxImportSource theme-ui */
import React, {
  useState,
  useEffect,
  useContext,
  createContext
} from 'react'
import firebase from 'firebase'
import 'firebase/storage'
import {
  useParams,
  Link,
  Route,
  Switch,
  useHistory,
  useLocation,
  useRouteMatch
} from 'react-router-dom'
import { Ready } from './Firebase'
import firebaseConfig from './Firebase'
import AppRouter from "../Router";



export const DataContext = createContext();

export default function GetCards() {
  const ready = useContext(Ready)
  const [cards, setCards] = useState(null)
  const deck = 'monsters' //useParams()
  let data;

  const [testing,setTesting] = useState(null)



  useEffect(()=>{

    if (cards?.[1]?.src===null){
      const newCards=[...cards]

      const fetchImages = async ()=>{
        Object.keys(cards).forEach(card => {
          // console.log(cards[card])
          firebase.storage().ref(`${cards[card]["image"]}`).getDownloadURL()
              .then(url => {
                console.log(url)
                newCards[card].src=url

              })
          // .catch(err => alert(err))
        })
        return newCards

      }



      fetchImages()
      if (newCards?.[1]?.src!=null){
        setCards(newCards)
      }

    }
    // if (cards?.[1]?.src===null) { //optional chaining ftw
    //   const fetchImages = async () => {
    //     console.log(cards)
    //
    //
    //
    //     Object.keys(cards).forEach(card => {
    //         // console.log(cards[card])
    //         firebase.storage().ref(`${cards[card]["image"]}`).getDownloadURL()
    //           .then(url => {
    //             console.log(url)
    //             newCards[card].src=url
    //           })
    //           // .catch(err => alert(err))
    //       })
    //   }
      //
      // // }
      //         storage.child(`active/${card["image"]}`).getDownloadURL()
      //             .then(url => {
      //               console.log(url)
      //               // data[card].src=url
      // //   // /update data snapshot
      //             })
      //             .catch(err => alert(err))
      //       })

      // fetchImages()
      // console.log(newCards)
      // if (!(newCards?.1?.src)) {
      //   setCards(newCards)
      // }


    // }
      // console.log(images)

  },[cards])

  useEffect(() => {
    if (ready) {
      const fetchDeck = async () => {
        const db = firebase.database()

        const deck2 = db.ref(`/${deck}`)
            .once('value')
            .then(snapshot => {
              data= (snapshot.val() ?? null)

              data.map((d,i)=>{
                d["src"]=null
              })

              return data
            })
        setCards(await deck2)
      }

      fetchDeck()
      // setCards(await deck2)
      // setCards(snapshot.val() ?? null)
    }
  }, [ready, deck])

  // ORIGINAL, FOR REFERENCE
  // useEffect(() => {
  //   if (ready) {
  //     console.log('running')
  //     const db = firebase.database()
  //     db.ref(`/${deck}`)
  //         .once('value')
  //         .then(snapshot => {
  //           setCards(data ?? null)
  //         })
  //   }
  // }, [ready, deck])

  // return (cards)

  return (
    <>
      {!cards &&
        'Loading'
      }
      {cards &&
        <DataContext.Provider
            value={cards}
        >
          <AppRouter/>
        </DataContext.Provider>
      }
    </>
  )
}
