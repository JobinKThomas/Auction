import React from "react";
import {
  Grid,
  Typography,
  Button,
  Box,
  CardActions,
  CardMedia,
  Card,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

const TournamentList = ({ tournaments, onEdit, onDelete, viewTournament }) => {
  return (
    <Grid container spacing={3} justifyContent="start">
      {tournaments.map((tournament) => {
        const dateObj = new Date(tournament.date);
        const date = dateObj.toLocaleDateString();
        const time = dateObj.toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        });

        return (
          <Grid item xs={12} key={tournament._id}>
            <Card
              elevation={3}
              sx={{
                width: "100%",
                maxWidth: { sm: 320 },
                borderRadius: "0.75rem",
                overflow: "hidden",
                p: 2,
                transition: "transform 0.2s, box-shadow 0.2s",
                "&:hover": {
                  transform: "scale(1.015)",
                  boxShadow: 6,
                  cursor: "pointer",
                },
              }}
              onClick={() => viewTournament(tournament._id)}
            >
              <Box className="flex justify-between text-sm text-gray-600 mb-2">
                <Typography>{date}</Typography>
                <Typography>{time}</Typography>
              </Box>

              <Box className="flex gap-4 items-center">
                <CardMedia
                  component="img"
                  image={tournament.logo}
                  alt={tournament.title}
                  sx={{
                    width: 96,
                    height: 96,
                    objectFit: "cover",
                    borderRadius: "0.375rem",
                  }}
                />

                <Box className="flex flex-col">
                  <Typography variant="h6" fontWeight="bold">
                    {tournament.title}
                  </Typography>
                  <Typography variant="subtitle2" color="text.secondary">
                    {tournament.subtitle}
                  </Typography>
                  <Typography variant="body2">
                    Season: {tournament.season}
                  </Typography>
                </Box>
              </Box>

              <CardActions
                sx={{
                  display: "flex",
                  justifyContent: "flex-end",
                  gap: 1,
                  mt: 2,
                }}
              >
                <Button
                  variant="outlined"
                  size="small"
                  startIcon={<EditIcon />}
                  onClick={() => onEdit(tournament._id)}
                >
                  Edit
                </Button>
                <Button
                  variant="outlined"
                  color="error"
                  size="small"
                  startIcon={<DeleteIcon />}
                  onClick={() => onDelete(tournament._id)}
                >
                  Delete
                </Button>
              </CardActions>
            </Card>
          </Grid>
        );
      })}
    </Grid>
  );
};

export default TournamentList;
