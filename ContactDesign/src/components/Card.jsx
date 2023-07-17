import React from "react";
import Avatar from "./Avatar";
import Detail from "./Detail";

const Card = (props) => { return (
        <div className="card">
            <div className="top">
            <p className="name">{props.name}</p>
            <Avatar img={props.img} />
            </div>
            <div className="bottom">
            <Detail detailInfo={props.tel}/>
            <Detail detailInfo={props.mail}/>
            </div>
        </div>
         )
}

export default Card;