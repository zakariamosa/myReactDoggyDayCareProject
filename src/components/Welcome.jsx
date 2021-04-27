import './welcome.css'
import banner from  '../images/banner.jpg'
import {Link} from 'react-router-dom';
const Welcome = (/*{ nextScreen }*/) => (
    <div>
    
    <img src={banner} alt='b'></img>

    <section>
       
       <h2>Välkommen till Doggy day care !</h2>
       <p>Visa Information om Registererade hunder?</p>
       <Link to="/home">
       <button /*onClick= {nextScreen}*/>Ja!</button>
       </Link>
   </section>


</div>
    
)

export default Welcome;