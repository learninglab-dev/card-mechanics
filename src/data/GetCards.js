/** @jsxImportSource theme-ui */
import React, {
  useState,
  useEffect,
  useContext,
  createContext
} from 'react'
import firebase from 'firebase'
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
import LaunchGame from '../views/LaunchGame'
import AppRouter from "../Router";

export const DataContext = createContext();

export default function GetCards() {
  const ready = useContext(Ready)
  const [cards, setCards] = useState(null)
  const deck = 'monsters' //useParams()
  // const history = useHistory()
  // const playing = useRouteMatch('/monsters/memorygame')?.isExact


  useEffect(() => {
    if (ready) {
      console.log('running')
      const db = firebase.database()
      db.ref(`/${deck}`)
          .once('value')
          .then(snapshot => {
            setCards(snapshot.val() ?? null)
          })
    }
  }, [ready, deck])

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
