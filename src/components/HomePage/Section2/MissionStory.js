import React from 'react'
import './MissionStory.css'

export default function MissionStory() {
    return (
        <div className="Mission-Story-Container">
            <div className="Mission-Story-item-1">
                We are two high school humans who are passionate about 
                climate change. Looking at the current state of recycling, <span className="Green">the 
                environment is dying.</span> In 2019, there were 53.6 million tonnes of 
                e-waste and only 17.4% were recycled properly. 
            </div>
            <div className="Mission-Story-item-2">
                Tis’ why we created DemeterDAO: to inject 
                monetary support into individual E-waste centers, 
                and <span className="Green">increase the percentage recycled year by year.</span>
            </div>
        </div>
    )
}