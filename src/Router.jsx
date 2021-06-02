import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
import Nav from './views/Nav'
import AboutPage from "./views/AboutPage";
import Gallery from "./views/Gallery";
import DataProvider from "./contexts/DataContext";
import LaunchGame from "./views/LaunchGame";

export default function AppRouter() {


  return (

    <Router>
      <DataProvider>
        <Nav/>
        {/*<hr/>*/}
          <Switch>
            <Route exact path='/'>
              <Gallery/>
            </Route>
            <Route path='/game'>
              <LaunchGame/>
            </Route>
            <Route path='/about'>
              <AboutPage/>
            </Route>
          </Switch>
      </DataProvider>
    </Router>

  )
}
