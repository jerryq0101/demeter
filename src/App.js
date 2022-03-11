import logo from './logo.svg';
import './App.css'
import Navigation from './components/Navigation.js'
import FirstPage from './components/HomePage/HomePage'
import Vote from './components/VotePage/VotePage'
import {Footer} from './components/footer/Footer'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
// Thirdweb elements onto the website today
import {ThirdwebProvider} from '@3rdweb/react'

export default function App() {

  const child = (
    <Router>
      <div className="App">
        {/* Navbar is always going to be here */}
        <Navigation />
        <div className="content">

          <Switch>  {/*  A switch statement to select the route of the website */}

            <Route exact path="/">
              <FirstPage />
            </Route>
            <Route exact path="/vote">
              <Vote />
            </Route>

          </Switch>

        </div>
        {/* The Current Footer that is here */}
        <Footer />
      </div>
    </Router>
  );

  // Ethereum Supported Chain IDs
  const supportedChainIds = [1, 4, 137];

  const connectors = {
    injected: {},
    magic: {
      apiKey: "pk_...",
      chainId: 1, 
    },
    walletconnect: {},
    walletlink: {
      appName: "thirdweb - demo",
      url: "https://thirdweb.com",
      darkMode: false,
    },
  };
  return (
    <ThirdwebProvider
      connectors={connectors}
      supportedChainIds={supportedChainIds}
    >
      {child}
    </ThirdwebProvider>
  )
}



// export default function App() {
//   return(
//     <Router>
//       <div className="App">
//         {/* Navbar is always going to be here */}
//         <Navigation />
//         <div className="content">

//           <Switch>  {/*  A switch statement to select the route of the website */}

//             <Route exact path="/">
//               <FirstPage />
//             </Route>
//             <Route exact path="/vote">
//               <Vote />
//             </Route>

//           </Switch>

//         </div>
//         {/* The Current Footer that is here */}
//         <Footer />
//       </div>
//     </Router>
//   )
// }