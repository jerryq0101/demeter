import React from 'react';
import {FirstStep} from './FirstStep.js'
import {SecondStep} from './SecondStep.js'
import {ThirdStep} from './ThirdStep.js'
import "./secondp.css"

export default function TheProcessRow() {
    return (
        <div>
            <div className="progressRow">
                <FirstStep />
                <SecondStep />
                <ThirdStep />
            </div>
        </div>
    )
}