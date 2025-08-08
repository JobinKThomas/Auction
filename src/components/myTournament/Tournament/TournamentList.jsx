// components/TournamentList.jsx
import React, { useState } from 'react';
import TournamentCard from './TournamentCard';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  Typography,
  Grid,
  IconButton,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

const TournamentList = ({ tournaments }) => {
  const [selected, setSelected] = useState(null);

  const handleClose = () => setSelected(null);

  return (
    <div className="p-4">
      <Grid container spacing={3}>
        {tournaments.map((tournament) => (
          <Grid item key={tournament._id} xs={12} sm={6} md={4} lg={3}>
            <TournamentCard tournament={tournament} onClick={setSelected} />
          </Grid>
        ))}
      </Grid>

      {/* Modal Preview */}
      <Dialog open={!!selected} onClose={handleClose} maxWidth="sm" fullWidth>
        <DialogTitle>
          Tournament Details
          <IconButton onClick={handleClose} className="absolute top-2 right-2">
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        {selected && (
          <DialogContent className="space-y-2">
            <img
              src={selected.logo}
              alt={selected.title}
              className="w-full h-48 object-cover rounded-xl"
            />
            <Typography variant="h6">{selected.title} (Season {selected.season})</Typography>
            <Typography>Subtitle: {selected.subtitle}</Typography>
            <Typography>Date: {selected.date}</Typography>
            <Typography>Teams Allowed: {selected.teamLimit}</Typography>
            <Typography>Players Allowed: {selected.playerLimit}</Typography>
            <Typography>Contact: {selected.contact}</Typography>
            <Typography>Code: {selected.code}</Typography>
          </DialogContent>
        )}
      </Dialog>
    </div>
  );
};

export default TournamentList;
