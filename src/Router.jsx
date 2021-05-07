import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'

// import Start from './views/Start'
import GamePage from './views/GamePage'
import GetCards from './data/GetCards'
import Nav from './views/Nav'
import About from "./views/About";
import Gallery from "./views/Gallery";
import DataProvider, {DataContext} from "./contexts/DataContext";
import CardFlip from './views/CardFlip'

export default function AppRouter() {


  return (

    <Router>
      <DataProvider>
        <Nav/>
          <Switch>
            <Route exact path='/'>
              <Gallery/>
            </Route>
            <Route path='/game'>
              <GamePage/>
            </Route>
            <Route path='/about'>
              <About/>
            </Route>
            <Route path='/cardflip'>
              <CardFlip/>
            </Route>
            <Route path='/monsters'>
              <GetCards/>
            </Route>
          </Switch>
      </DataProvider>
    </Router>

  )
}
