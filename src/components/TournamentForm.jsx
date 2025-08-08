import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { tournamentSchema } from '../validationSchema';
import {
  TextField,
  Button,
  Grid,
  Typography,
  Box,
  InputLabel,
} from '@mui/material';

const TournamentForm = () => {
  const [imagePreview, setImagePreview] = useState(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm({
    resolver: yupResolver(tournamentSchema),
  });

  const imageFile = watch('image');

  useEffect(() => {
    if (imageFile && imageFile.length > 0) {
      const file = imageFile[0];
      const reader = new FileReader();
      reader.onloadend = () => setImagePreview(reader.result);
      reader.readAsDataURL(file);
    } else {
      setImagePreview(null);
    }
  }, [imageFile]);

  const onSubmit = (data) => {
    // Save to backend or Redux
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="max-w-3xl mx-auto p-4 sm:p-6 bg-white shadow rounded"
    >
      <Typography variant="h5" gutterBottom className="font-semibold">
        Create Tournament
      </Typography>

      <Grid container spacing={2}>
        {[
          ['title', 'Title'],
          ['subtitle', 'Subtitle'],
          ['date', 'Date'],
          ['season', 'Season'],
          ['teamLimit', 'Team Limit'],
          ['playerLimit', 'Player Limit'],
          ['contact', 'Contact Number'],
        ].map(([name, label]) => (
          <Grid item xs={12} sm={6} key={name}>
            <TextField
              label={label}
              type={
                name === 'date'
                  ? 'date'
                  : name.includes('Limit') || name === 'contact'
                  ? 'number'
                  : 'text'
              }
              fullWidth
              variant="outlined"
              InputLabelProps={name === 'date' ? { shrink: true } : {}}
              error={Boolean(errors[name])}
              helperText={errors[name]?.message}
              {...register(name)}
            />
          </Grid>
        ))}

        {/* Image Upload */}
        <Grid item xs={12}>
          <InputLabel className="mb-1 font-medium">Tournament Image</InputLabel>
          <input
            type="file"
            accept="image/*"
            {...register('image')}
            className="w-full"
          />
          {errors.image && (
            <p className="text-red-500 text-sm mt-1">{errors.image.message}</p>
          )}
          {imagePreview && (
            <Box className="mt-2">
              <img
                src={imagePreview}
                alt="Preview"
                className="h-32 w-32 object-cover rounded"
              />
            </Box>
          )}
        </Grid>

        {/* Submit Button */}
        <Grid item xs={12}>
          <Button
            type="submit"
            variant="contained"
            fullWidth
            className="!bg-blue-600 hover:!bg-blue-700 text-white"
          >
            Submit
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default TournamentForm;
