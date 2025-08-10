// components/TournamentCard.jsx
import React from "react";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";

const TournamentCard = ({ tournament, onClick }) => {
  return (
    <Card
      className="rounded-2xl shadow hover:shadow-lg cursor-pointer transition-all duration-300"
      onClick={() => onClick(tournament)}
    >
      <CardMedia
        component="img"
        height="140"
        image={tournament.logo}
        alt={tournament.title}
      />
      <CardContent className="space-y-1">
        <Typography variant="h6" className="font-bold text-blue-700">
          {tournament.title} - S{tournament.season}
        </Typography>
        <Typography variant="body2">📅 {tournament.date}</Typography>
        <Typography variant="body2">
          👥 Teams: {tournament.teamLimit}
        </Typography>
        <Typography variant="body2">
          🎮 Players: {tournament.playerLimit}
        </Typography>
        <Typography variant="body2">📞 {tournament.contact}</Typography>
        <Typography variant="body2">
          🆔 Code: <strong>{tournament.code}</strong>
        </Typography>
      </CardContent>
    </Card>
  );
};

export default TournamentCard;
