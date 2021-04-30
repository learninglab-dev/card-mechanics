import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'

import Start from './views/Start'
// import Gallery from './views/Gallery'
// import GetCards from './data/GetCards'
import GamePage from './views/GamePage'

import LaunchGame from './views/LaunchGame'
import GetCards from './data/GetCards'
import Home from './views/Home'


export default function AppRouter() {
  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          <Home/>
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
