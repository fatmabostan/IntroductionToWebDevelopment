import React from "react";
import Avatar from "./Avatar";

const Card = (props) =>
{
    return(<div className="card">
        <div className="top">  
        <p className="name">{props.name}</p>
        <Avatar img={props.img}/>
        </div>

        <div className="bottom">
        <p className="info">{props.mail}<br/>{props.tel}</p></div></div>
    )
}
export default Card;