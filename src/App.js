import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import {Header} from './components/Header'
import {Footer} from './components/Footer'

import {About} from './pages/About'
import { Category } from './pages/Category'
import {Contact} from './pages/Contact'
import {Home} from './pages/Home'
import {PageNotFound} from './pages/PageNotFound'
import { Recipe } from './pages/Recipe'

function App() {
  return <>
    <Router basename='/react-cookbook'>
    <Header />
    <main className="container content">
      <Switch>
        <Route exact path="/"> <Home myProps="abc" /> </Route>
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route path="/category/:name" component={Category} />
        <Route path="/meal/:id" component={Recipe} />
        <Route component={PageNotFound} />
      </Switch>
    </main> 
    <Footer />
    </Router>  
  </>
}

export default App;
