import React from 'react';
import { Grid, Typography, Button, Box, CardActions, CardMedia, Card } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

const TournamentList = ({ tournaments, onEdit, onDelete, viewTournament }) => {
  return (
    <Grid container spacing={3}>
      {tournaments.map((tournament) => {
        const dateObj = new Date(tournament.date);
        const date = dateObj.toLocaleDateString();
        const time = dateObj.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

        return (
          <Grid item xs={12} sm={12} md={6} lg={4} xl={3} key={tournament._id}>
            <Card
              elevation={3}
              className="rounded-xl overflow-hidden shadow-md p-4 transition-transform transform hover:scale-[1.015] hover:shadow-xl cursor-pointer w-full"
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
                  className="w-24 h-24 object-cover rounded-md"
                />

                <Box className="flex flex-col">
                  <Typography variant="h6" className="font-bold">
                    {tournament.title}
                  </Typography>
                  <Typography variant="subtitle2" color="text.secondary">
                    {tournament.subtitle}
                  </Typography>
                  <Typography variant="body2">Season: {tournament.season}</Typography>
                </Box>
              </Box>

              <CardActions className="flex justify-end gap-2 mt-4">
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
