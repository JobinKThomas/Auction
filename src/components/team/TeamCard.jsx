import React, { useState } from 'react';
import {
  Box, Tab, Tabs, TextField, Typography, Button, Avatar, Stack, Paper,
  Snackbar,
  Alert
} from '@mui/material';
import axios from 'axios';

function TabPanel({ children, value, index }) {
  return value === index && (
    <Box sx={{ p: 3 }}>
      {children}
    </Box>
  );
}

export default function TeamRegistration({results}) {
  const [value, setValue] = useState(0);
  const [alert, setAlert] = useState({ open: false, message: '', severity: 'info' });

  const [team, setTeam] = useState({ name: '', image: null });
  const [owner, setOwner] = useState({ name: '', image: null, mobile: '' });
  const [icon, setIcon] = useState({ name: '', image: null, mobile: '' });

  const handleTabChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleFileChange = (e, setter) => {
    const file = e.target.files[0];
    if (file) {
      setter(prev => ({ ...prev, image: URL.createObjectURL(file) }));
    }
  };

  const handleSave = async (e) => {
    e.preventDefault();

    const formData = new FormData();

    formData.append('tournamentCode', results?.code);
    formData.append('teamName', team?.name);
    if (team?.image) formData.append('teamImage', team?.image);

    formData.append('ownerName', owner?.name);
    formData.append('ownerMobile', owner?.mobile);
    if (owner?.image) formData.append('ownerImage', owner?.image);

    formData.append('iconName', icon?.name);
    formData.append('iconMobile', icon?.mobile);
    if (icon?.image) formData.append('iconImage', icon?.image);

  };

  return (
    <Paper sx={{ width: 500, margin: 'auto', mt: 5, p: 2 }}>
      <Tabs value={value} onChange={handleTabChange} centered>
        <Tab label="Team Info" />
        <Tab label="Owner Details" />
        <Tab label="Icon Player" />
      </Tabs>

      <TabPanel value={value} index={0}>
        <Box display="flex" justifyContent="center" my={2}>
          <Avatar
            src={team.image}
            sx={{ width: 100, height: 100, cursor: 'pointer' }}
          />
        </Box>
        <TextField
          label="Team Name"
          fullWidth
          margin="normal"
          value={team.name}
          onChange={e => setTeam({ ...team, name: e.target.value })}
        />
        <Button component="label" variant="outlined">
          Upload Logo
          <input type="file" hidden onChange={e => handleFileChange(e, setTeam)} />
        </Button>
        {/* {team.image && <Avatar src={team.image} sx={{ mt: 2, width: 60, height: 60 }} />} */}
      </TabPanel>

      <TabPanel value={value} index={1}>
        <Box display="flex" justifyContent="center" my={2}>
          <Avatar
            src={owner.image}
            sx={{ width: 100, height: 100, cursor: 'pointer' }}
          />
        </Box>
        <TextField
          label="Owner Name"
          fullWidth
          margin="normal"
          value={owner.name}
          onChange={e => setOwner({ ...owner, name: e.target.value })}
        />
        <TextField
          label="Contact Number"
          fullWidth
          margin="normal"
          value={owner.mobile}
          onChange={e => setOwner({ ...owner, mobile: e.target.value })}
        />
        <Button component="label" variant="outlined">
          Upload Owner Photo
          <input type="file" hidden onChange={e => handleFileChange(e, setOwner)} />
        </Button>
        {/* {owner.image && <Avatar src={owner.image} sx={{ mt: 2, width: 60, height: 60 }} />} */}
      </TabPanel>

      <TabPanel value={value} index={2}>
        <Box display="flex" justifyContent="center" my={2}>
          <Avatar
            src={icon.image}
            sx={{ width: 100, height: 100, cursor: 'pointer' }}
          />
        </Box>
        <TextField
          label="Icon Player Name"
          fullWidth
          margin="normal"
          value={icon.name}
          onChange={e => setIcon({ ...icon, name: e.target.value })}
        />
        <TextField
          label="Contact Number"
          fullWidth
          margin="normal"
          value={icon.mobile}
          onChange={e => setIcon({ ...icon, mobile: e.target.value })}
        />
        <Button component="label" variant="outlined">
          Upload Icon Player Photo
          <input type="file" hidden onChange={e => handleFileChange(e, setIcon)} />
        </Button>
        {/* {icon.image && <Avatar src={icon.image} sx={{ mt: 2, width: 60, height: 60 }} />} */}
      </TabPanel>

      <Box sx={{ textAlign: 'center', mt: 3 }}>
        <Button variant="contained" color="primary" onClick={handleSave}>
          Save All
        </Button>
      </Box>
      <Snackbar
        open={alert.open}
        autoHideDuration={4000}
        onClose={() => setAlert({ ...alert, open: false })}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      >
        <Alert severity={alert.severity} sx={{ width: '100%' }}>
          {alert.message}
        </Alert>
      </Snackbar>
    </Paper>
  );
}
