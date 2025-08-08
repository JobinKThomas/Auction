import React, { useState, useCallback, useRef } from 'react';
import Cropper from 'react-easy-crop';
import getCroppedImg from './CropImage';
import axios from 'axios';
import {
  Box,
  Button,
  Card,
  CardContent,
  Typography,
  TextField,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Slider,
  Avatar,
  Dialog,
  DialogActions,
  DialogContent,
  Snackbar,
  Alert
} from '@mui/material';
import './PlayerForm.css';
const PlayerCard = (props) => {
  const { title, subtitle, season, contact, code } = props.results;
  const fileInputRef = useRef(null);
  const [error, setError] = useState("");
  const [image, setImage] = useState('https://www.w3schools.com/howto/img_avatar.png');
  const [croppedImage, setCroppedImage] = useState(null);
  const [croppedAreaPixels, setCroppedAreaPixels] = useState(null);
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [showCropper, setShowCropper] = useState(false);
  const [form, setForm] = useState({
    name: "",
    role: "",
    mobile: "",
    basePrice: 1000,
  });
  const [alert, setAlert] = useState({ open: false, message: '', severity: 'info' });
  

  const handleImageClick = () => fileInputRef.current.click();

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file));
      setShowCropper(true);
    }
  };

  const onCropComplete = useCallback((_, croppedPixels) => {
    setCroppedAreaPixels(croppedPixels);
  }, []);

  const handleCropDone = async () => {
    try {
      const cropped = await getCroppedImg(image, croppedAreaPixels);
      setCroppedImage(cropped);
      setShowCropper(false);
    } catch (e) {
      console.error(e);
    }
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <Box display="flex" justifyContent="center" alignItems="center" minHeight="100vh" bgcolor="#f3f4f6">
        <Card sx={{ maxWidth: 500, width: '100%', p: 2, bgcolor: '#f9fafb', boxShadow: 3 }}>
          <CardContent>
            <Typography variant="h5" align="center">{subtitle}</Typography>
            <Typography variant="subtitle1" align="center" gutterBottom>{title}</Typography>
            <Typography variant="subtitle2" align="center">{season}</Typography>
            <Typography variant="h6" align="center" sx={{ mt: 2 }}>Player Registration Form</Typography>

            <Box display="flex" justifyContent="center" my={2}>
              <Avatar
                src={croppedImage || image}
                sx={{ width: 100, height: 100, cursor: 'pointer' }}
                onClick={handleImageClick}
              />
              <input
                type="file"
                accept="image/*"
                ref={fileInputRef}
                style={{ display: 'none' }}
                onChange={handleFileChange}
              />
            </Box>

            <TextField
              label="Name"
              name="name"
              value={form.name}
              onChange={handleChange}
              fullWidth
              margin="normal"
              required
            />
            <FormControl fullWidth margin="normal">
              <InputLabel>Role</InputLabel>
              <Select name="role" value={form.role} onChange={handleChange} required>
                <MenuItem value="">Select Role</MenuItem>
                <MenuItem value="Batsman">Batsman</MenuItem>
                <MenuItem value="Bowler">Bowler</MenuItem>
                <MenuItem value="All-Rounder">All-Rounder</MenuItem>
                <MenuItem value="Wicket Keeper">Wicket Keeper</MenuItem>
              </Select>
            </FormControl>
            <TextField
              label="Mobile"
              name="mobile"
              type="tel"
              value={form.mobile}
              onChange={handleChange}
              fullWidth
              margin="normal"
              required
              inputProps={{ maxLength: 10 }}
            />
            {error && <Typography color="error" variant="body2">{error}</Typography>}

            <Typography variant="subtitle2" sx={{ mt: 2 }}>Organizer Contact: {contact}</Typography>

            <Button type="submit" fullWidth variant="contained" color="primary" sx={{ mt: 3 }}>
              Register
            </Button>
          </CardContent>
        </Card>
      </Box>

      <Dialog open={showCropper} onClose={() => setShowCropper(false)} fullWidth maxWidth="sm">
        <DialogContent>
          <Box position="relative" width="100%" height={400}>
            <Cropper
              image={image}
              crop={crop}
              zoom={zoom}
              aspect={1}
              cropShape="round"
              onCropChange={setCrop}
              onZoomChange={setZoom}
              onCropComplete={onCropComplete}
            />
          </Box>
          <Slider
            value={zoom}
            min={1}
            max={3}
            step={0.1}
            onChange={(e, zoom) => setZoom(zoom)}
            sx={{ mt: 2 }}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setShowCropper(false)}>Cancel</Button>
          <Button onClick={handleCropDone} variant="contained" color="primary">Crop</Button>
        </DialogActions>
      </Dialog>
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
    </form>
  );
};

export default PlayerCard;
