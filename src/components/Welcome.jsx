const Welcome = ({ nextScreen }) => (
    <section>
        <h2>Välkommen till Doggy day care !</h2>
        <p>Vill du Register en hund?</p>
        <button onClick= {nextScreen}>Ja!</button>
    </section>
)

export default Welcome;