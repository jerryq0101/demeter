import React from 'react'
import './OurMission.css'
import MissionTitle from './MissionTitle'
import Factory from './Factory.png';
import MissionStory from './MissionStory';

export default function OurMission() {
    return (
        <div className="Our-Mission-Container">
            <div className="Left-Container">
                <MissionTitle />
                <MissionStory />
            </div>
            <img className="Image-Container" src={Factory} />
            
        </div>
    )
}