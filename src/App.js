
import './App.css';
import Welcome from './components/Welcome';
import Home from './components/Home';
import { useState } from 'react';
import Logo from './images/logo.png'
import HundInfo from './components/HundInfo';


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
        nextScreen={() => {
          setCurrentdog('gbv')
          setCurrentScreen(HUNDINFO) 
        }        
        } 
        dogname={currentdog}
        />
      break; 
    default:
      content = <HundInfo
      nextScreen={() => {
        setCurrentdog('f2')
        setCurrentScreen(WELCOME)
        
      }   
      } 
      dogname={currentdog}
      />;
      
  }

  return (
    <div className="App">
      <header className="App-header">
      <img src={Logo}></img>
          
      </header>
      <main>
        {content}       
       
      </main>
    </div>
  );
}

export default App;
