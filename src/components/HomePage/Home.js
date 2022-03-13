import React from 'react'
import "./Home.css"
import {Main} from './Landing/Main.js'
import {Graphic} from './Landing/RGraphic.js'
import {DownArrow} from './Landing/DownArrow.js'

export default function Home(){
    return (
        <div>
            <div className="gap"></div>
            {/* Landing page for demeterDAO */}
            <div className='Page-1'>
                <Main />
                <Graphic />
            </div>
            {/* Down arrow from first page */}
            <div>
                <DownArrow />
            </div>

            {/* Gap before the second page */}
            <div className="gap"> </div>
        </div>
    )
}