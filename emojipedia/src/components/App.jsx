import React from 'react';
import emojiArray from '../emojiArray';
import Entry from "./Entry";

const writeArray=(props) =>{
    return <Entry key={props.id} img={props.img} name={props.name} discription={props.discription}/>
}

const App = () => {
   return (<div>
    <h1><span>emojipedia</span></h1>
    <dl className='dictionary'>{emojiArray.map(writeArray)}</dl>
   </div>)
}

export default App;