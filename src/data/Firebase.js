import { useState, useEffect } from 'react'
import firebase from 'firebase'
import { firebaseConfig } from './firebase.config'
import AppRouter from '../Router'


export default function Firebase() {
  const [instance, setInstance] = useState(false)

  useEffect(() => {
    firebase.initializeApp(firebaseConfig)
    firebase.analytics()
    firebase.auth().onAuthStateChanged(() => {
      setInstance(true)
    })
    return () => firebase.app().delete()
  }, [])

  return <AppRouter ready={instance}/>
}
