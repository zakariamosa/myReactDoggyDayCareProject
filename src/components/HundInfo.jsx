import Logo from '../images/banner.jpg'
import './Hundinfo.css'
import {Link} from 'react-router-dom';

const HundInfo = (props) => 
    
    
    
    (



    <section>
        <section className='dogsec'>
        <div className='theimg'>
        <img src={props.dog.img}></img>
        </div>
        <div className='dogmoreinfo'>
        <h2>{props.dog.name}</h2>
        <p>Owner first Name: {props.dog.owner.name}</p>
        <p>Owner last Name: {props.dog.owner.lastName}</p>
        <p>Owner Telefon number: {props.dog.owner.phoneNumber}</p>
        </div>
        </section>
        <div>
            <Link to="/">
            <button>Börja om</button>
            </Link>
        </div>
        
        
        
    </section>
)


export default HundInfo;