import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
import Start from './Start'
import Test from './Test'


export default function AppRouter() {
  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          <Start/>
        </Route>
        <Route path='/test'>
          <Test/>
        </Route>
      </Switch>
    </Router>
  )
}
