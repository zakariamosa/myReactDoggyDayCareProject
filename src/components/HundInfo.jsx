import Logo from '../images/banner.jpg'
import './Hundinfo.css'
const HundInfo = (props) => (
    <section>
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
)

export default HundInfo;