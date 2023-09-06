import React from 'react'
// import github from './github.png'
export default function SkillCard(props) {
    return (
        <div className="skillCard">
            <card>
                <img src={props.imageURL} alt="skill img" />
                <h3>{props.skillName}</h3>
                <h4>{props.skillDetail}</h4>
            </card>
        </div>
    )
}
