import React from 'react'

export default function Navbar() {

    let navbar_style = {
        color: "white",
        backgroundColor: "#040D12",
        padding: "0px",
        display: "flex",
        alignItems: "center",
    }

    return (
        <>
            <div style={navbar_style} className='navbarr'>
                <a className="nav_btns" href="#home">Home</a>
                <a className="nav_btns" href="#about">About</a>
                <a id="contact" className="nav_btns" href="#contact">Get in Touch</a>
            </div>
        </>
    )
}
