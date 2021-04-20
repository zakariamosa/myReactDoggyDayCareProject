import logo from './logo.svg';
import './App.css';
import Welcome from './components/Welcome';
import { useState } from 'react';

function App() {
  const WELCOME = 'welcome';
 
  const [currentScreen, setCurrentScreen] = useState(WELCOME);



  let content = null;
  switch(currentScreen) {
    case WELCOME:
      content = <Welcome
        nextScreen={() => setCurrentScreen(Welcome)} />
      break;
   
    default:
      content = <Welcome
      nextScreen={() => setCurrentScreen(Welcome)} />;
  }

  return (
    <div className="App">
      <header className="App-header">
          <h1>Doggy day care</h1>
      </header>
      <main>
        {content}       
       
      </main>
    </div>
  );
}

export default App;
