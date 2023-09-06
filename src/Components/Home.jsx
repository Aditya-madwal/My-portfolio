import React from 'react'
import leftbracket from "./images/left.png"
import rightbracket from "./images/right.png"

export default function Home() {

    const home_style = {
        // color: "white",
        // marginTop: "0px",
        // backgroundColor: "#EEE0C9",
        padding: "10px",
        display: "flex",
        height: "100vh",
        alignItems: "center",
        justifyContent: "center",
    }

    return (
        <div style={home_style} className='home'>
            <img src={leftbracket} className="leftt" alt="left bracket" />
            <div>
                <h2>This is <h1>Aditya Madwal</h1></h2>
                <hr />
                <h4>( A Pythonista, Web Developer and Java enthusiast )</h4>
                <div className="linksContainer">
                    <links className = "links">
                        <a href="#">About Me</a>
                        <a href="#">My Skills</a>
                        <a href="#">Get in Touch</a>
                    </links>
                </div>
            </div>
            <img src={rightbracket} alt="right bracket" className='rightt' />
        </div>
    )
}
