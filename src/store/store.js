import { configureStore } from "@reduxjs/toolkit";
import tournamentReducer from "./tournamentSlice";
import playerReducer from "./playerSlice";
import teamReducer from "./teamSlice";

export const store = configureStore({
  reducer: {
    tournament: tournamentReducer,
    player: playerReducer,
    team: teamReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat() // Thunk is already included
});