import React from 'react';
const currentTime = new Date();

function Footer(){
    return (
    <footer>
        <p>Copyright
            <br/>
            {currentTime.getFullYear()}
        </p>
    </footer>)
}
export default Footer;