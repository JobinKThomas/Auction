import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import _ from "lodash";

const TEAMS = [
  {
    "team": {
      "name": "Huskers",
      "image": "https://picsum.photos/300/200",
    },
    "owner": {
      "name": "Jobin",
      " ": "https://picsum.photos/300/201",
      "mobile": "9898989898"
    },
    "icon": {
      "name": "Rohith",
      "image": "https://picsum.photos/300/202",
      "mobile": "9595959595"
    },
    "_id": "688b00cb2bff174a0126b46d",
    "tournamentCode": "0MUGDY",
    "__v": 0,
    "playerLimit": 10,
    "purseLimit": 20000
  },
  {
    "team": {
      "name": "Invinciable",
      "image": "https://picsum.photos/300/203",
    },
    "owner": {
      "name": "Chakkara",
      "image": "https://picsum.photos/300/204",
      "mobile": "8787878787"
    },
    "icon": {
      "name": "Rono",
      "image": "https://picsum.photos/300/205",
      "mobile": "4545454545"
    },
    "_id": "688b1a9d9fcd936b8b40e0c5",
    "tournamentCode": "0MUGDY",
    "__v": 0,
    "playerLimit": 10,
    "purseLimit": 20000
  },
  {
    "team": {
      "name": "avc",
      "image": "https://picsum.photos/300/206",
    },
    "owner": {
      "name": "xyz",
      "image": "https://picsum.photos/300/200",
      "mobile": "1212121212"
    },
    "icon": {
      "name": "asd",
      "image": "https://picsum.photos/300/203",
      "mobile": "2323232323"
    },
    "_id": "6892f52633f5bad900a0ea5a",
    "tournamentCode": "RXGGL4",
    "purseLimit": 0,
    "playerLimit": 0,
    "__v": 0
  }
];
const teamSlice = createSlice({
  name: "team",
  initialState: {
    list: TEAMS,
    teamsIn: []
  },
  reducers: {
    selectedTeam: (state, action) => {
      _.set(state, 'teamsIn', action.payload)
    }
  },
});

export const { selectedTeam } = teamSlice.actions;
export default teamSlice.reducer