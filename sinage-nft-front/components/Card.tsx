import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

interface NFT{
  nft: {
      name: string
      description: string
      image: string
  }
}

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
        <Button size="small">購入する</Button>
      </CardActions>
    </Card>
  );
}
