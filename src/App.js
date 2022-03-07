import logo from './logo.svg';
import './App.css'
import {Navigation} from './components/Navigation.js'
import FirstPage from './components/HomePage/HomePage'
import Vote from './components/VotePage/Vote'
import {Footer} from './components/footer/Footer'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';


function App() {
  return (
    <Router>
      <div className="App">
        {/* Navbar is always going to be here */}
        <Navigation />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <FirstPage />
            </Route>
            <Route path="/vote">
              <Vote />
            </Route>
          </Switch>
        </div>
        {/* The Current Footer that is here */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
