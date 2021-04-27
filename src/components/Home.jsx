import React, {useState, useEffect} from 'react';
import './gallery.css'
import HundInfo from './HundInfo';



const Home = ({ nextScreen, dogname }) => {
    
    
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
        fetch(apiUrl)
        .then((response)=>{
            return response.json();
        })
        .then((data)=>{
            
            setcontent(data.map(hund=>
                <div onClick={
                    () => {
                           
                    console.log('Click', hund.name);
                    dogname = hund.name;
                  } 
                  
                  }>
        
                      
                    <div className='enhund'>
                    <img src={hund.img} onClick={nextScreen} alt='a'></img>
                    <div className= 'hundinfosec'>
                        
                            <p>Dog Name: {hund.name}</p>
                            <p>Age: {hund.age}</p>
                            <p>Sex: {hund.sex}</p>
                            <p>Present: {hund.present=== false ? 'absent' : 'attending'}</p>
                            <p>Breed: {hund.breed}</p>
                            <p>Chip Number: {hund.chipNumber}</p>
                            <button className='readmorebuttons' onClick=
                            
                            {
                                nextScreen(hund)
                                /*() => {
                                       
                                    setcontent(
    
    
                                        <HundInfo
                                            dog={hund}
                                        />
    
    
                                    )
                                    
                                  } */
                              
                              }
                            
                            >Read More</button>
                       
                    
                    </div>
                    </div>
                    
                </div>
                ))
                
        


        })
        .catch((err)=>{
            console.log(err)
        })
        /*
        let button = document.querySelector('#fetch');

button.addEventListener('click', async e => {
    console.log('1. button pressed');

    const response =  await fetch(apiUrl);
    console.log('2. got respnse', response);

    const data = await response.json();

    console.log('3. got data: ', data);

    let alldogs = data;*/
    /*let dogContainer = document.querySelector('#dogs');
    alldogs.forEach(h => {
        let element = createhundElement(h);
        dogContainer.appendChild(element);
    });*/
    /*
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
                
                    <p>Dog Name: {hund.name}</p>
                    <p>Age: {hund.age}</p>
                    <p>Sex: {hund.sex}</p>
                    <p>Present: {hund.present=== false ? 'absent' : 'attending'}</p>
                    <p>Breed: {hund.breed}</p>
                    <p>Chip Number: {hund.chipNumber}</p>
               
            
            </div>
            </div>
            
        </div>
        ))
        
})*/
    }, [])

    

   



    

    const imageClick = (n) => {
        
        console.log('Clickkk', {n});
      } 
      

    
/*
    useEffect(() => {
        // Körs när komponenten har renderats första gången
        // och när count uppdateras
        console.log(' useEffects körs - count har ändrats', count);
    }, [count])*/

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
           
         
            
            <div id="dogs" className = {columnsClass}>
            {content}
            </div>

        </div>
    )
}

export default Home;

