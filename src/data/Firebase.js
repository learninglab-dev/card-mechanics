import {
  useState,
  useEffect,
  createContext
} from 'react'
import firebase from 'firebase'
import 'firebase/storage'
import firebaseConfig from './firebase.config'
import AppRouter from '../Router'
import GetCards from "./GetCards";
export const Ready = createContext()


export default function Firebase() {
  const [instance, setInstance] = useState(false)

  // useEffect(() => {
  //   if (instance) {
  //     const storage = firebase.storage().ref()
  //

  //   }
  // }, [instance])

  useEffect(() => {
    firebase.initializeApp(firebaseConfig)
    firebase.analytics()
    firebase.auth().onAuthStateChanged(() => {
      setInstance(true)
    })
    return () => firebase.app().delete()
  }, [])

  return (
    <Ready.Provider value={instance}>
      <GetCards/>
    </Ready.Provider>
  )
}
