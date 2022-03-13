import React from 'react'
import './Main.css'

export const Main = ({}) => {
  
  return (
    <div class="combo123">
        <div class="flexbox-container-1 combo123-item-1">
            <div class="flexbox-item flexbox-item-1">
                Sustainability needs money.
            </div>
            <div class="flexbox-item flexbox-item-2">
                Lets Push<br/><span>Sustainability</span><span class="green">.</span>
            </div>
            <div class="flexbox-item flexbox-item-3">
                DemeterDAO is a sustainability focused DAO, that <br/>
                makes directly supporting recycling easy.
            </div>
        </div>


        {/* <!-- Combo flexbox for 2 and 3 --> */}
        <div class="combo123-item-2">
            {/* <!-- Second Section Row --> */}
            <div class="flexbox-container-2">
                <div class="flexbox2-item flexbox2-item-1">
                    Fund Proposals
                </div>
                <div class="flexbox2-item flexbox2-item-2">
                    <div class="flexbox2-item-2-text">How it works</div>
                </div>
            </div>
            {/* <!-- Third section box --> */}
            <div class="flexbox-container-3">
                <div class="flexbox3-item flexbox3-item-1">
                    <img class="flexbox3-item-1-img" src="https://firebasestorage.googleapis.com/v0/b/rendition-prod.appspot.com/o/b7c4888b-2ad3-43b6-8f20-fcb61b61484b.svg?alt=media&token=ed74459d-ecb2-473b-8327-b084854fb44e"/>
                    <div class="flexbox3-item-1-text">Give to treasury</div>
                </div>
                <div class="flexbox3-item flexbox3-item-2">
                    <img class="flexbox3-item-2-img" src="https://firebasestorage.googleapis.com/v0/b/rendition-prod.appspot.com/o/8a34929c-eed9-4c44-8068-26cdda0cf24b.svg?alt=media&token=e676cd67-0214-4b21-8934-5c0ea68f1b0e"/>
                    <div class="flexbox3-item-2-text">Decide who to fund</div>
                </div>
            </div>
        </div>
    </div>
  )
}