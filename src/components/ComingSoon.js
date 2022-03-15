import React from 'react'
import './ComingSoon.css'
import { Link} from 'react-router-dom'

function ComingSoon(){
    return(
        <div className="coming-soon">
            <div className="Title">
                    <div className='teal'>[</div>Coming soon<div className='teal'>]</div>
            </div>
            <div className="description">
                Team is working hard to bring DemeterDAO to fruition,
                the website, the partnerships and the legal stuff. <br></br>
                Meanwhile, you can go mint yourself a <Link to="/access"><b>Demeter_<span class="Access-passport-gradient">Passport</span></b></Link>
            </div>
        </div>
    )
}

export default ComingSoon