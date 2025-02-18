var PROVIDER, SIGNER, CONTRACT;
var CONTRACT_ADDRESS = "0x93f5813b47F02157CF53B3a294746c95F6098948";

async function connect(){
	await ethereum.request( {method:"eth_requestAccounts"} );
	PROVIDER = new ethers.providers.Web3Provider( window.ethereum )
    SIGNER = PROVIDER.getSigner()
    let ABI = await fetch( "assets/abi/OnePixel.json" ).then( e=>e.json() )
    CONTRACT = new ethers.Contract( CONTRACT_ADDRESS, ABI,  SIGNER);
}