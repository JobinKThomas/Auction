import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import _ from "lodash";

// export const fetchTournaments = createAsyncThunk(
//   "tournament/fetchTournaments",
//   async (query) => {
//     const res = await fetch(`http://localhost:5000/api/tournaments/search?query=${query}`);
//     return await res.json();
//   }
// );
const TOURNAMENTS = [
  {
    "_id": "688864317cbbdaa78ca5a717",
    "title": "ABC League",
    "subtitle": "ABC",
    "date": "2025-08-02",
    "season": "1",
    "teamLimit": 2,
    "playerLimit": 20,
    "contact": "9656003456",
    "code": "0MUGDY",
    "logo": "https://picsum.photos/300/200",
    "__v": 0
  },
  {
    "_id": "688864a97cbbdaa78ca5a719",
    "title": "ABC League",
    "subtitle": "ABC",
    "date": "2025-08-04",
    "season": "2",
    "teamLimit": 2,
    "playerLimit": 20,
    "contact": "9656000477",
    "code": "RXGGL4",
    "logo": "https://picsum.photos/300/201",
    "__v": 0
  },
  {
    "_id": "688866f37cbbdaa78ca5a71c",
    "title": "ABC League",
    "subtitle": "ABC",
    "date": "2025-08-05",
    "season": "3",
    "teamLimit": 2,
    "playerLimit": 20,
    "contact": "9656000477",
    "code": "N4JWG2",
    "logo": "https://picsum.photos/300/202",
    "__v": 0
  },
  {
    "_id": "68888f330471cddafd812c25",
    "title": "ABC League",
    "subtitle": "ABC",
    "date": "2025-08-06",
    "season": "4",
    "teamLimit": 2,
    "playerLimit": 10,
    "contact": "9656000477",
    "code": "58OBPL",
    "logo": "https://picsum.photos/300/203",
    "__v": 0
  },
  {
    "_id": "6892f44233f5bad900a0ea3d",
    "title": "XYZ league",
    "subtitle": "XYZ",
    "date": "2025-08-09",
    "season": "1",
    "teamLimit": 3,
    "playerLimit": 15,
    "contact": "9656000477",
    "code": "2B03ZS",
    "logo": "https://picsum.photos/300/204",
    "__v": 0
  },
  {
    "title": "ffj",
    "subtitle": "jjj",
    "date": "2025-08-08",
    "season": "2",
    "teamLimit": 6,
    "playerLimit": 10,
    "contact": "9656000477",
    "_id": "6899f4ab5757d0bbb4f3f00f",
    "code": "IG9O7R",
    "__v": 0
  }
]
const tournamentSlice = createSlice({
  name: "tournament",
  initialState: {
    // list: [],
    list: TOURNAMENTS,
    tournament: [],
    loading: false,
    error: null
  },
  reducers: {
    selectedTournament: (state, action) => {
      _.set(state, 'tournament', action.payload)
    }
  },
  // extraReducers: (builder) => {
  //   builder
  //     .addCase(fetchTournaments.pending, (state) => {
  //       state.loading = true;
  //       state.error = null;
  //     })
  //     .addCase(fetchTournaments.fulfilled, (state, action) => {
  //       state.loading = false;
  //       state.list = action.payload;
  //     })
  //     .addCase(fetchTournaments.rejected, (state, action) => {
  //       state.loading = false;
  //       state.error = action.error.message;
  //     });
  // }
});

export const { selectedTournament } = tournamentSlice.actions;
export default tournamentSlice.reducer;