import React from 'react';



const Welcome = (props) => {
    

    return (
        
        <section>
            
            <h2>Välkommen Till Doggy Daycare!</h2>
            
            <button onClick={props.nextScreen}>Ja!</button>
            {/* <button id='fetch'>Fetch</button> */}
            <picture> 
            <img src="https://images.unsplash.com/photo-1517423440428-a5a00ad493e8?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aG91bmR8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80" alt="Hundar" />
            </picture>
            
        </section>
        
    );
};

export default Welcome;
