import React, { useState } from 'react';
import { Modal, Box, TextField, Button, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  borderRadius: 2,
  boxShadow: 24,
  p: 4,
};

const AuctionModal = ({ tournamentCode }) => {
  const navigate = useNavigate();
  
  const [open, setOpen] = useState(false);
  const [purse, setPurse] = useState('');
  const [playerLimit, setSetPlayerLimit] = useState('');

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const goToAuction = (id) => {
    navigate(`/auction/${id}`)
  }

  const handleSubmit = (e) => {
  e.preventDefault();
  goToAuction(tournamentCode)
  handleClose();
  };

  return (
    <div>
      <Button variant="contained" onClick={handleOpen}>
        Auction
      </Button>
      <Modal open={open} onClose={handleClose}>
        <Box sx={style}>
          <Typography variant="h6" mb={2}>Enter Team Purse Limit</Typography>
          <TextField
            fullWidth
            label="Purse Limit"
            variant="outlined"
            type="number"
            value={purse}
            onChange={(e) => {
              const val = e.target.value;
              if (val === '' || (/^\d+$/.test(val) && parseInt(val, 10) > 0)) {
                setPurse(val);
              }
            }}
            sx={{ mb: 2 }}
            required
          />
          <Typography variant="h6" mb={2}>No of Players in a Team</Typography>
          <TextField
            fullWidth
            label="Player Limit"
            variant="outlined"
            type="number"
            value={playerLimit}
            onChange={(e) => {
              const val = e.target.value;
              if (val === '' || (/^\d+$/.test(val) && parseInt(val, 10) > 0)) {
                setSetPlayerLimit(val);
              }
            }}
            sx={{ mb: 2 }}
            required
          />
          <Button variant="contained" color="primary" onClick={handleSubmit}>
            Submit
          </Button>
        </Box>
      </Modal>
    </div>
  );
};

export default AuctionModal;
