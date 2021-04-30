import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
import Start from './views/Start'
import Gallery from './views/Gallery'
import GetCards from './data/GetCards'
import GamePage from './views/GamePage'



export default function AppRouter() {
  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          <Start/>
        </Route>
        <Route path='/game'>
          <GamePage/>
        </Route>
        {/*<Route path='/gallery'>*/}
        {/*  <Gallery/>*/}
        {/*</Route>*/}
        <Route path='/:deck'>
          <GetCards/>
        </Route>
      </Switch>
    </Router>
  )
}
