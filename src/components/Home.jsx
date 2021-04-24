import React, {useState, useEffect} from 'react';
import './gallery.css'
import HundInfo from './HundInfo';



const Home = ({ nextScreen, dogname }) => {
    
    const [count, setCount] = useState(3);
    const [hasData, setHasData] = useState(false);
    const [content, setcontent] = useState(null);
    const [hundname, sethundname] = useState(null);
    
    useEffect(() => {
        // Körs när komponenten har renderats första gången
        // och varje gång komponenten uppdateras
        console.log('useEffect körs');
        document.title = 'Running useEffects...';

    } )

    useEffect(() => {
         // Körs när komponenten har renderats första gången
         // Här passar det att starta ett asyncroint API-anrop
        console.log('useEffect []');
        const apiUrl = 'https://api.jsonbin.io/b/607ed5a21cf7d45e26cf06e3';
        
        let button = document.querySelector('#fetch');

button.addEventListener('click', async e => {
    console.log('1. button pressed');

    const response =  await fetch(apiUrl);
    console.log('2. got respnse', response);

    const data = await response.json();

    console.log('3. got data: ', data);

    let alldogs = data;
    /*let dogContainer = document.querySelector('#dogs');
    alldogs.forEach(h => {
        let element = createhundElement(h);
        dogContainer.appendChild(element);
    });*/
    
    setcontent(alldogs.map(hund=>
        <div onClick={
            () => {
                   
            console.log('Click', hund.name);
            dogname = hund.name;
          } 
          
          }>

              
            <div className='enhund'>
            <img src={hund.img} onClick={nextScreen}></img>
            <div className= 'hundinfosec'>
                
                    <p>Hund Name: {hund.name}</p>
                    <p>Age: {hund.age}</p>
                    <p>Sex: {hund.sex}</p>
                    <p>Present: {hund.present}</p>
                    <p>Breed: {hund.breed}</p>
                    <p>Chip Number: {hund.chipNumber}</p>
               
            
            </div>
            </div>
            
        </div>
        ))
        
})
    }, [])

    

   



    function createhundElement(hund) {
        let dogElement = document.createElement('div');
        dogElement.className = 'dog';
    
        let dogimg = document.createElement('img'); 
        dogimg.src = hund.img;

        
        dogimg.setAttribute('onClick',imageClick())
            
        
        
        dogElement.appendChild(dogimg);
        
    
    
    
        return dogElement;
    }

    const imageClick = () => {
        
        console.log('Click', {hundname});
      } 
      

    

    useEffect(() => {
        // Körs när komponenten har renderats första gången
        // och när count uppdateras
        console.log(' useEffects körs - count har ändrats', count);
    }, [count])

    useEffect(() => {
        // Körs när komponenten har renderats första gången
        // och när hasData uppdateras
        console.log(' useEffects körs - hasData har ändrats', hasData);
    }, [hasData])

    console.log("Home function körs");

    const [columns, setColumns] = useState(1);

    let columnsClass = 'gallery';
    if( columns === 1) {
        columnsClass += ' one-column'
    } else if( columns === 2) {
        columnsClass += ' two-columns';
    } else if( columns === 3) {
        columnsClass += ' three-columns';   
    }

    return (
        <div>
            <div>
                
                <button onClick={() => setCount(count + 1)} >Tryck!</button> 
                {count}
               
            </div>
            <div>
                <button id="fetch" onClick= {() => setHasData(true)}>get data from API</button>
            </div>
            
            <div id="dogs" className = {columnsClass}>
            {content}
            </div>

        </div>
    )
}

export default Home;

