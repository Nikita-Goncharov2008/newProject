import React from 'react';


const Persone = (props) => {
    return (
        <>
            <div className="card">
                <img src={`../../../img/profileimages/profile${props.id}.png`} alt="persone" />
                <p>{props.name}</p>
            </div>
        </>
    );
}

export default Persone;
