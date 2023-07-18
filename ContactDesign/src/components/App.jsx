import React from "react";
import Card from "./Card";
import Contact from "./Contact";

const ContactUse = (props) => {
    return <Card key={props.id} name={props.name} mail={props.mail} tel={props.tel} img={props.img} />
}

const App = () => {
    // useState lr slınsbilir bu dsnstçı idmi vr linkleri
return(<div>
    <h1 className="heading">My Contacts</h1>
   {Contact.map(ContactUse)}
</div>)
}

export default App;