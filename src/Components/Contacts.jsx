import React from 'react'
import githubb from './images/github.png';
import linkedin from './images/linkedin.png';
import twitter from './images/twitter.png';
import gmail from './images/gmail.png';

export default function Contacts(props) {

    const contacts_style = {
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#352F44",
    }

    return (
        <>
            <div className='contacts'>
            </div>
            <div className="contacts_container">
                <h2>Get in Touch</h2>
                <contact style={contacts_style}>

                    <contactCard className="concard">
                        <img src={githubb} alt="github" className='contacts_imgs' />
                        <h2>Github</h2>
                        <h3>Follow me on Github</h3>
                    </contactCard>

                    <contactCard className="concard">
                        <img src={linkedin} alt="linkedin" className='contacts_imgs' />
                        <h2>LinkedIn</h2>
                        <h3>Connect With Me on Linkedin</h3>
                    </contactCard>

                    <contactCard className="concard">
                        <img src={twitter} alt="twitter" className='contacts_imgs' />
                        <h2>Twitter</h2>
                        <h3>Follow me on Twitter</h3>
                    </contactCard>

                    <contactCard className="concard">
                        <img src={gmail} alt="email" className='contacts_imgs' />
                        <h2>G-Mail</h2>
                        <h3>Email me on Gmail</h3>
                    </contactCard>
                </contact>
            </div>
        </>
    )
}