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
import DataProvider from "./contexts/DataContext";
import CardFlip from './views/CardFlip'
import GamePage2 from './views/GamePage2'

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
              <GamePage2/>
            </Route>
            <Route path='/about'>
              <About/>
            </Route>
            {/*<Route path='/cardflip'>*/}
            {/*  <GamePage2/>*/}
            {/*</Route>*/}
          </Switch>
      </DataProvider>
    </Router>

  )
}
