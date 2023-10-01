import React from 'react';


const Welcome = (props) => {
    

    return (
        <section>
            <h2>Välkommen till Hund-loggen</h2>
            <p>Ska vi se vilka hundar som finns?</p>
            <button onClick={props.nextScreen}>Ja!</button>
            {/* <button id='fetch'>Fetch</button> */}
            
        </section>
    );
};

export default Welcome;
