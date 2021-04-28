import './welcome.css'
import banner from  '../images/banner.jpg'
import {Link} from 'react-router-dom';
const Welcome = (/*{ nextScreen }*/) => (
    <div className='welcomepage'>
    <div className='imag'>
    <img src={banner} alt='b' ></img>
    </div>
    

    <div className='info'>
       
       <h2>Välkommen till Doggy day care !</h2>
       <p>Visa Information om Registererade hunder?</p>
       <Link to="/home">
       <button /*onClick= {nextScreen}*/className='box'> Ja! </button>
       </Link>
   </div>


</div>
    
)

export default Welcome;