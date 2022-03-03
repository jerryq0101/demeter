import logo from './logo.svg';
import './App.css'
import {Navigation} from './components/firstPage/Navigation.js'
import {Main} from './components/firstPage/Main.js'
import {Graphic} from './components/firstPage/RGraphic.js'
import {DownArrow} from './components/firstPage/DownArrow.js'
import {Pagetwotitle} from './components/secondPage/Title.js'
import TheProcess from './components/secondPage/TheProcess.js'

function App() {
  return (
    <div className="App">
      <Navigation />
      <div className="gap"></div>
      {/* Landing page for demeterDAO */}
      <div className='Page-1'>
        <Main />
        <Graphic />
      </div>
      {/* Down arrow from first page */}
      <div>
        <DownArrow />
      </div>

      {/* Gap before the second page */}
      <div className="gap"> </div>

      {/* The second page!! */}
      <div className='Page-2'>
        <Pagetwotitle />
        <TheProcess />
      </div>
      <div>
        <DownArrow />
      </div>
      
    </div>
  );
}

export default App;
