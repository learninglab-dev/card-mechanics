/** @jsxImportSource theme-ui */
import {
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


export default function GetCards() {
  const ready = useContext(Ready)
  const [cards, setCards] = useState(null)
  const { deck } = useParams()
  const history = useHistory()
  const playing = useRouteMatch('/monsters/memorygame')?.isExact


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
      {!playing &&
        <>
        <div>
          {JSON.stringify(cards)}
        </div>
        <button onClick={() => history.push(`/${deck}/memorygame`)}>play memory game!</button>
        </>
      }
      <Route path='/:deck/memorygame'>
        <LaunchGame cards={cards}/>
      </Route>
    </>
  )
}
