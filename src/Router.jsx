import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
import Start from './views/Start'
// import Test from './views/Test'
import GetCards from './data/GetCards'


export default function AppRouter() {
  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          <Start/>
        </Route>
        <Route path='/:deck'>
          <GetCards/>
        </Route>
      </Switch>
    </Router>
  )
}
