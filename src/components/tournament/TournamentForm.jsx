import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { tournamentSchema } from "../../validationSchema";
import {
  TextField,
  Button,
  Grid,
  Typography,
  Box,
  InputLabel,
} from "@mui/material";

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

  const imageFile = watch("image");

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
      className="max-w-2xl mx-auto p-6 bg-white rounded-xl shadow-lg space-y-5"
    >
      {/* Title */}
      <Typography
        variant="h5"
        className="font-bold text-xl sm:text-2xl border-b pb-2"
      >
        Create Tournament
      </Typography>

      {/* Input Fields */}
      {[
        ["title", "Title"],
        ["subtitle", "Subtitle"],
        ["date", "Date"],
        ["season", "Season"],
        ["teamLimit", "Team Limit"],
        ["playerLimit", "Player Limit"],
        ["contact", "Contact Number"],
      ].map(([name, label]) => (
        <div key={name} className="w-full">
          <TextField
            label={label}
            type={
              name === "date"
                ? "date"
                : name.includes("Limit") || name === "contact"
                ? "number"
                : "text"
            }
            fullWidth
            variant="outlined"
            InputLabelProps={name === "date" ? { shrink: true } : {}}
            error={Boolean(errors[name])}
            helperText={errors[name]?.message}
            {...register(name)}
            inputProps={{
              className: "text-sm sm:text-base",
            }}
            sx={{
              "& .MuiOutlinedInput-root": {
                borderRadius: "0.5rem",
              },
            }}
          />
        </div>
      ))}

      {/* Image Upload */}
      <div className="w-full">
        <InputLabel className="mb-2 font-medium text-gray-700">
          Tournament Image
        </InputLabel>
        <input
          type="file"
          accept="image/*"
          {...register("image")}
          className="w-full border border-gray-300 rounded-md p-2 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        {errors.image && (
          <p className="text-red-500 text-xs mt-1">{errors.image.message}</p>
        )}
        {imagePreview && (
          <div className="mt-3 flex justify-center sm:justify-start">
            <img
              src={imagePreview}
              alt="Preview"
              className="h-28 w-28 sm:h-32 sm:w-32 object-cover rounded-lg border"
            />
          </div>
        )}
      </div>

      {/* Submit Button */}
      <div className="w-full">
        <Button
          type="submit"
          variant="contained"
          fullWidth
          className="!bg-blue-600 hover:!bg-blue-700 text-white text-sm sm:text-base py-3 rounded-lg shadow-md"
        >
          Submit
        </Button>
      </div>
    </form>
  );
};

export default TournamentForm;
