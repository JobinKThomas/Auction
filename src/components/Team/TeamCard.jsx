// components/TeamCard.jsx
import React, { useState } from 'react';
import { Card, CardContent, CardMedia, Typography, Avatar, Divider, Dialog, DialogTitle, DialogContent, DialogActions, Button } from '@mui/material';

const TeamCard = ({ teamData }) => {
    const [open, setOpen] = useState(false);
  
  return (
    <>
    <Card className="rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 w-full cursor-pointer"
      onClick={() => setOpen(true)}
    >
      <CardMedia
        component="img"
        height="160"
        image={teamData.team.image}
        alt={teamData.team.name}
        className="rounded-t-2xl"
      />
      <CardContent className="space-y-3">
        {/* Team Name */}
        <Typography variant="h6" className="font-bold text-center text-blue-700">
          🛡 {teamData.team.name}
        </Typography>

        <Divider />

        {/* Owner Info */}
        <div className="flex items-center space-x-4">
          <Avatar alt={teamData.owner.name} src={teamData.owner.image} />
          <div>
            <Typography variant="body1" className="font-semibold">
              👤 Owner: {teamData.owner.name}
            </Typography>
          </div>
        </div>

        {/* Icon Info */}
        <div className="flex items-center space-x-4">
          <Avatar alt={teamData.icon.name} src={teamData.icon.image} />
          <div>
            <Typography variant="body1" className="font-semibold">
              ⭐ Icon: {teamData.icon.name}
            </Typography>
          </div>
        </div>
      </CardContent>
      </Card>
      <Dialog open={open} onClose={() => setOpen(false)} maxWidth="sm" fullWidth>
        <DialogTitle className="text-center font-bold text-blue-700">
          🛡 {teamData.team.name}
        </DialogTitle>
        <DialogContent className="space-y-4 text-center">
          {/* Team Image */}
          <img
            src={teamData.team.image}
            alt={teamData.team.name}
            className="mx-auto rounded-xl w-60 h-40 object-cover"
          />

          {/* Owner Info */}
          <div className="flex items-center justify-center space-x-4">
            <Avatar src={teamData.owner.image} alt={teamData.owner.name} />
            <div className="text-left">
              <Typography variant="body1" className="font-semibold">
                👤 Owner: {teamData.owner.name}
              </Typography>
              <Typography variant="body2" className="text-gray-500">
                📞 {teamData.owner.mobile}
              </Typography>
            </div>
          </div>

          {/* Icon Info */}
          <div className="flex items-center justify-center space-x-4">
            <Avatar src={teamData.icon.image} alt={teamData.icon.name} />
            <div className="text-left">
              <Typography variant="body1" className="font-semibold">
                ⭐ Icon: {teamData.icon.name}
              </Typography>
              <Typography variant="body2" className="text-gray-500">
                📞 {teamData.icon.mobile}
              </Typography>
            </div>
          </div>

          {/* Additional Details (Optional) */}
          <div className="pt-4">
            <Typography variant="body2">🎯 Player Limit: {teamData.playerLimit}</Typography>
            <Typography variant="body2">💰 Purse Limit: ₹{teamData.purseLimit}</Typography>
          </div>
        </DialogContent>
        <DialogActions className="justify-center pb-4">
          <Button variant="outlined" onClick={() => setOpen(false)}>
            Close
          </Button>
        </DialogActions>
      </Dialog>
      </>
  );
};

export default TeamCard;
