import Logo from '../images/banner.jpg'
const HundInfo = ({nextScreen, dogname}) => (
    <section>
        <h2>{dogname}</h2>
        <img src={Logo}></img>
        
    </section>
)

export default HundInfo;