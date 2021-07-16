import React from 'react';

const IdCard = (props) => {
    return(
        <div>
            <h3>{props.lastName}</h3>
            <h3>{props.firstName}</h3>
            <h3>{props.gender}</h3>
            <h3>{props.height}</h3>
            <h3>{props.birth}</h3>
            <h3>{props.picture}</h3>            
        </div>
    )
}

export default IdCard;
