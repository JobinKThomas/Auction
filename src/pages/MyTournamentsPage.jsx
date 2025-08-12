import React, { useEffect, useState } from "react";
import TournamentList from "../components/tournament/TournamentList";
import { Box, Button, Fab, TextField } from "@mui/material";
import RestartAltIcon from "@mui/icons-material/RestartAlt";
import AddIcon from "@mui/icons-material/Add";
import Tooltip from "@mui/material/Tooltip";
import TournamentsModal from "../components/tournament/TournamentModal";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchTournaments } from "../store/tournamentSlice";

const MyTournamentsPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { list } = useSelector((state) => state.tournament);

  const [searchTitle, setSearchTitle] = useState("");
  const [debouncedTitle, setDebouncedTitle] = useState("");
  const [openModal, setOpenModal] = useState(false);
  const [tournament, setTournaments] = useState([]);

  const handleOpenModal = () => setOpenModal(true);
  const handleCloseModal = () => setOpenModal(false);

  const handleEdit = (id) => {
    console.log("Edit tournament:", id);
  };

  const handleDelete = (id) => {
    console.log("Delete tournament:", id);
  };

  const viewTournament = (id) => {
    navigate(`/my-tournament/${id}`);
  };

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedTitle(searchTitle);
    }, 300);

    return () => {
      clearTimeout(handler);
    };
  }, [searchTitle]);

  useEffect(() => {
    if (list.length) {
      const filteredData = list?.filter((item) => {
      return (
        !debouncedTitle ||
        item.title.toLowerCase().includes(debouncedTitle.toLowerCase())
      );
      });
      setTournaments(filteredData)
    }
  }, [list, debouncedTitle])
  
  // useEffect(() => {
  //   dispatch(fetchTournaments("9656000477"));
  // },[])

  return (
    <div className="p-4">
      <h1 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6">
        My Tournaments
      </h1>

      <Box className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 mb-6 flex-wrap">
        <TextField
          label="Search by Title"
          variant="outlined"
          size="small"
          value={searchTitle}
          onChange={(e) => setSearchTitle(e.target.value)}
          className="w-full sm:w-64 md:w-80"
        />
        <Button
          variant="contained"
          color="secondary"
          size="small"
          startIcon={<RestartAltIcon />}
          onClick={() => setSearchTitle("")}
          disabled={!searchTitle}
          className="w-full sm:w-auto"
        >
          Reset Filters
        </Button>
      </Box>

      <TournamentList
        tournaments={tournament}
        onEdit={handleEdit}
        onDelete={handleDelete}
        viewTournament={viewTournament}
      />

      <Tooltip title="Create Tournament" placement="left">
        <Fab
          color="primary"
          aria-label="add"
          className="!fixed !bottom-6 !right-6 !z-50"
          onClick={handleOpenModal}
        >
          <AddIcon />
        </Fab>
      </Tooltip>

      <TournamentsModal
        openModal={openModal}
        handleCloseModal={handleCloseModal}
      />
    </div>
  );
};

export default MyTournamentsPage;
