// Where we going to mint the Membership NFT.
import React from 'react'
import { ThirdwebProvider, ConnectWallet } from '@3rdweb/react';
import DropClaim from './dropclaim'
import './Access.css'

export default function Access() {
    return (
        <div class="Access-Page">
            <div class="Access-Title">
                Mint Your <br></br>
                <span>Demeter_</span><span class="Access-passport-gradient">Passport*</span>
            </div>
            <DropClaim />
            
            <div class="Access-Perk-desc">*Demeter starter passport NFT grants you the basic membership to our community</div>
        </div>
    )
}