import React from 'react'
import {DownArrow} from '../Landing/DownArrow.js'
import {Pagetwotitle} from '../HowItWorks/Title.js'
import TheProcess from '../HowItWorks/TheProcess.js'
import "./Process.css"

export default function Process(){
    return (
        <div>
            {/* The second page!! */}
            <div className='Page-2'>
                <Pagetwotitle />
                <TheProcess />
            </div>
            <div>
                <DownArrow />
            </div>
        </div>
    )
}