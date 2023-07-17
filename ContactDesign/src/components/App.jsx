import React from "react";
import Card from "./Card";
import Contact from "./Contact";

const App = () => {
    // useState lr slınsbilir bu dsnstçı idmi vr linkleri
return(<div>
    <h1 className="heading">My Contacts</h1>
   { Contact.map((value) => <div key={value.id}><Card name={value.name} img={value.img} mail={value.mail} tel={value.tel}/></div>)}
</div>)
}

export default App;