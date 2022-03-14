import { useState, useEffect } from 'react';
import { ThirdwebSDK } from '@3rdweb/sdk';
import { useWeb3 } from '@3rdweb/hooks';

const sdk = new ThirdwebSDK('https://rpc-mumbai.maticvigil.com');
const bundleDrop = sdk.getBundleDropModule(
  '0x6dc3dD4AF96D6E61870A0165A5154E522A33751e'
);

const DropClaim = () => {
    // State to track when a user is claiming an NFT
    const [claiming, setClaiming] = useState(false);
    // Get provider and then signer from the context
    const { provider } = useWeb3();
    const signer = provider ? provider.getSigner() : undefined;
    useEffect(() => {
    if (signer) {
        sdk.setProviderOrSigner(signer);
    }
    }, [signer]);
    // Claim our NFT with the claim method - (token id, quantity)
    const onClick = async () => {
    setClaiming(true);
    try {
        await bundleDrop.claim(0, 1);
        alert("Successfully Claimed!");
        setClaiming(false);
    } catch (error) {
        console.log("Failed to claim. Error: ", error);
        setClaiming(false);
    }
    };
    return (
    <button
        disabled={claiming}
        style={{
        padding: "10px 20px",
        textAlign: "center",
        backgroundColor: "#05A266",
        color: "white",
        }}
        className="btn"
        onClick={onClick}
    >
        {claiming ? "Claiming..." : "Claim Early Access NFT"}
    </button>
    );
};
  
  export default DropClaim;