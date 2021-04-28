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


export default function GetCards() {
  const { deck } = useParams()
  const ready = useContext(Ready)

  useEffect(() => {
    if (ready) {
      const db = firebase.database()
      db.ref(`/${deck}`)
          .once('value')
          .then(snapshot => {
            return snapshot.val() ?? null
      })
    }

  }, [ready])

  return <Gallery cards={cards}/>
}
