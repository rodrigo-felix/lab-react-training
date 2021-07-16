import React from 'react';

const Greetings = (props) => {
    return(
        <div>
            <h3>{props.lang}</h3>
            <h3>{props.childen}</h3>           
        </div>
    )
}

export default Greetings;