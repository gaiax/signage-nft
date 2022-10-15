import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { ethers } from 'ethers'
import { Sinage_nft__factory } from "../../typechain-types/"
import NFT from '../../artifacts/contracts/Sinage-nft.sol/Sinage_nft.json'
declare var window: any

interface NFT{
  nft: {
      name: string
      description: string
      image: string
  }
}

const onClick = async () => {
  if (!window.ethereum) {
    console.error('!window.ethereum')
    return
  }

  const provider = new ethers.providers.Web3Provider(window.ethereum)
  await provider.send('eth_requestAccounts', [])
  const signer = await provider.getSigner()
  /*
  const Sinage_nft = Sinage_nft__factory.connect(
    "0x5FbDB2315678afecb367f032d93F642f64180aa3",
    signer
  )
  */
  
  console.log(await signer.getAddress());
  const nftContract = new ethers.Contract(
    "0x95f1f1D9B73E51772b61aC612Fefc5d908Af8b8A",
    NFT.abi,
    signer
  )
  console.log(nftContract)

  const nftTx = await nftContract.safeMint(
    "0xEBcC29a1893e47673142f59e49dE68b77F52a88E",
    "https://i.imgur.com/KEMhP2A.jpeg",
    "aram",
    "aram's wall")
  let tx = await nftTx.wait()
  console.log(tx)
  
  const ret = await nftContract['tokenURI(uint256)'](1)
  console.log(ret)
  const b64result = ret.replace("data:application/json;base64,", "")
  const strResult = Buffer.from(b64result, "base64").toString()
  console.log(strResult);
};

export default function MediaCard(nft:NFT) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image={nft.nft.image}
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {nft.nft.name} さん
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {nft.nft.name} さんのサイネージの枠を購入する
        </Typography>
      </CardContent>
      <CardActions>
        <Button onClick={onClick} size="small">購入する</Button>
      </CardActions>
    </Card>
  );
}
