import React from 'react'
import img1 from './images/MyImage.jpg'

export default function AboutMe() {

    const about_style = {
        backgroundColor: "#352F44",
        color: "white",
        margin: "0px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "50px",
    }

    const img_url = "./MyImage.jpg";

    return (
        <div style={about_style} className='about'>
            <div className='aboutContainer'>
                <img src={img1} alt="hehe" />
                <h2>Hello People!</h2>
                <h4>I am a passionate Btech student specializing in web development and Python programming.<br />With a strong drive to create dynamic and interactive websites,<br /> I strive to combine my technical skills and creativity to deliver engaging online experiences.</h4>
            </div>
        </div>
    )
}
