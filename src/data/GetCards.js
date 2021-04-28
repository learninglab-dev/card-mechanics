/** @jsxImportSource theme-ui */
import {
  useState,
  useEffect,
  useContext
} from 'react'
import firebase from 'firebase'
import firebaseConfig from './firebase.config'
import { useParams } from 'react-router-dom'
import { Ready } from './Firebase'
// import Gallery from '../views/Gallery'


export default function GetCards() {
  const [cards, setCards] = useState(null)
  const { deck } = useParams()
  const ready = useContext(Ready)

  useEffect(() => {
    if (ready) {
      const db = firebase.database()
      db.ref(`/${deck}`)
          .once('value')
          .then(snapshot => {
            setCards(snapshot.val() ?? null)
          })
    }
  }, [ready, deck])

  return JSON.stringify(cards)
}
