import React from 'react';

const Massage = (props) => {
    return (
        <div className="message">
            <p className='comment'>{props.msg}</p>
        </div>
    );
}

export default Massage;
