import React from 'react';

const Entry = (props) => {
    return <div className='term'>
        <img className='emoji' src={props.img}/>
        <dt><span className="emoji">{props.name}</span></dt>
        <dd><dl><p className='term'>{props.discription}</p></dl></dd>    
    </div>
}

export default Entry;