import './welcome.css'
const Welcome = ({ nextScreen }) => (
    <section>
        <h2>Välkommen till Doggy day care !</h2>
        <p>Visa Information om Registererade hunder?</p>
        <button onClick= {nextScreen}>Ja!</button>
    </section>
)

export default Welcome;