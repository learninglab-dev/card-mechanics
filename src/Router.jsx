import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
import Start from '../views/Start'
import Test from '../views/Test'
import GetCards from '../data/GetCards'


export default function AppRouter({ ready }) {
  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          <Start/>
        </Route>
        <Route path='/seamonsters'>
          <GetCards fbReady={ready}/>
        </Route>
        <Route path='/test'>
          <Test/>
        </Route>
      </Switch>
    </Router>
  )
}
