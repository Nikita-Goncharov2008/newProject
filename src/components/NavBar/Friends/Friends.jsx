import React from 'react';
import Persone from './Persone';


const Friends = (props) => {
    return (
        <>
            <h1>Friends</h1>
            <div className='flowersOfSomeonesLive'>
                {
                    props.friends.map(item=><Persone img={item.img} name={item.name}/>)
                }
            </div>
        </>
    );
}

export default Friends;
