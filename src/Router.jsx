import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
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
        <Route path='/:deck'>
          <GetCards/>
        </Route>
      </Switch>
    </Router>
  )
}
