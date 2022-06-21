import React from 'react';
import { Card, CardActions, CardContent, Button, Typography } from '@mui/material';

export default function ChallengeCard() {
  return (
    <Card sx={{ boxShadow: '1px 2px 6px 0 rgb(0 0 0 / 10%), inset 1px 1px 0 0 rgb(255 255 255 / 70%)', borderRadius: '4px' }}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
      </CardActions>
    </Card>
  );
}