// Where we going to mint the Membership NFT.
import React from 'react'
import { ThirdwebProvider, ConnectWallet } from '@3rdweb/react';
import DropClaim from './dropclaim'

export default function Access() {
    return (
        <div>
            <DropClaim />
        </div>
    )
}