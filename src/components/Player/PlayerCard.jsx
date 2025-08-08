// components/PlayerCard.jsx
import React, { useState } from 'react';
import { Button, Card, CardContent, CardMedia, Dialog, DialogActions, DialogContent, DialogTitle, Typography } from '@mui/material';

const PlayerCard = ({ playerData }) => {
  const [open, setOpen] = useState(false);
  
  return (
    <>
    <Card className="rounded-2xl shadow-md hover:shadow-xl transition duration-300 cursor-pointer"
      onClick={() => setOpen(true)}
    >
      <CardMedia
        component="img"
        height="200"
        image={playerData?.image}
        alt={playerData.name}
        className="rounded-t-2xl"
      />
      <CardContent className="text-center space-y-2">
        <Typography variant="h6" className="font-bold text-blue-700">
          {playerData?.name}
        </Typography>
        <Typography variant="body2" className="text-gray-600">
          🏏 {playerData?.role}
        </Typography>
      </CardContent>
      </Card>
      <Dialog open={open} onClose={() => setOpen(false)} maxWidth="xs" fullWidth>
        <DialogTitle className="text-center font-bold">{playerData.name}</DialogTitle>
        <DialogContent className="flex flex-col items-center space-y-4">
          <img
            src={playerData.image}
            alt={playerData.name}
            className="w-40 h-40 rounded-full object-cover"
          />
          <Typography variant="body1">🏏 Role: {playerData.role}</Typography>
          <Typography variant="body2">💰 Base Price: ₹{playerData.basePrice}</Typography>
          <Typography variant="body2">📦 Status: {playerData.status}</Typography>
        </DialogContent>
        <DialogActions className="justify-center pb-4">
          <Button variant="outlined" color="primary" onClick={() => setOpen(false)}>
            Close
          </Button>
        </DialogActions>
      </Dialog>
      </>
  );
};

export default PlayerCard;
