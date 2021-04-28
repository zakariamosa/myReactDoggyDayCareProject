
import './App.css';
import Welcome from './components/Welcome';
import Home from './components/Home';
import { useState } from 'react';
import Logo from './images/logo.png'
import HundInfo from './components/HundInfo';
import {HashRouter as Router, Route, Switch} from 'react-router-dom'


function App() {
  const WELCOME = 'welcome', HOME = 'Home', HUNDINFO = 'HundInfo';
 
  const [currentScreen, setCurrentScreen] = useState(WELCOME);

  const [currentdog, setCurrentdog] = useState('flex');




  let content = null;
  switch(currentScreen) {
    case WELCOME:
      content = <Welcome
        nextScreen={() => setCurrentScreen(HOME)} 
        dogname={currentdog}
        />
      break;
      case HOME:
      content = <Home
        nextScreen={hund=>() => {
          console.log('here we go: ', hund)
          setCurrentdog(hund)
          setCurrentScreen(HUNDINFO) 
        }        
        } 
        dog={currentdog}
        
        />
      break; 
    default:
      content = <HundInfo
      nextScreen={hund=>() => {
        setCurrentdog(hund)
        setCurrentScreen(WELCOME)
        
      }   
      } 
      dog={currentdog}
      />;
      
  }

  return (
    <div className="App">
      <header className="App-header">
      <img src={Logo}></img>
          
      </header>
      <main>
        <Router>
          <Switch>
            <Route exact path="/">
            <Welcome/>
            </Route>
            <Route path="/home">
            

            <Home
              nextScreen={hund=>() => {
              setCurrentdog(hund)
              setCurrentScreen(HUNDINFO) 
              }        
        } 
        
        
        />



            </Route>

            <Route path="/hundinfo">

            <HundInfo
              nextScreen={hund=>() => {
              setCurrentdog(hund)
              setCurrentScreen(WELCOME)
              }   
              } 
              dog={currentdog}
              />;


            
            </Route>







          </Switch>
        </Router>
        {/*


{content}

         */}
        
       
      </main>
    </div>
  );
}

export default App;
