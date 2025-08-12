import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import _ from "lodash";

const PLAYERS = [
  {
    "status": "unsold",
    "_id": "6889be26a999d3ede2a617d2",
    "name": "Jobin",
    "role": "Batsman",
    "basePrice": 1000,
    "mobile": 9961932921,
    "image": "https://picsum.photos/300/200",
    "playerImage": "https://picsum.photos/300/200",
    "soldTo": null,
    "soldPrice": 0,
    "tournamentCode": "0MUGDY",
    "__v": 0
  },
  {
    "status": "unsold",
    "_id": "6889c071011ca11a89e4915a",
    "name": "Rohith",
    "role": "Bowler",
    "basePrice": 1000,
    "mobile": 9961932922,
    "image": "https://picsum.photos/300/202",
    "playerImage": "https://picsum.photos/300/202",
    "soldTo": null,
    "soldPrice": 0,
    "tournamentCode": "0MUGDY",
    "__v": 0
  },
  {
    "status": "unsold",
    "_id": "6889c109011ca11a89e49162",
    "name": "Jith",
    "role": "All-Rounder",
    "basePrice": 1000,
    "mobile": 9961932923,
    "image": "https://picsum.photos/300/204",
    "playerImage": "https://picsum.photos/300/204",
    "soldTo": null,
    "soldPrice": 0,
    "tournamentCode": "0MUGDY",
    "__v": 0
  },
  {
    "status": "unsold",
    "_id": "688a0742ecca0b6bfdc22559",
    "name": "Sreejesh",
    "role": "Bowler",
    "basePrice": 1000,
    "mobile": 9961932092,
    "image": "https://picsum.photos/300/203",
    "playerImage": "https://picsum.photos/300/203",
    "soldTo": null,
    "soldPrice": 0,
    "tournamentCode": "RXGGL4",
    "__v": 0
  }
]
const playerSlice = createSlice({
  name: "player",
  initialState: {
    list: PLAYERS,
    playersIn: []
  },
  reducers: {
    selectedPlayers: (state, action) => {
      _.set(state, 'playersIn', action.payload)
    }
  },
});

export const { selectedPlayers } = playerSlice.actions;

export default playerSlice.reducer