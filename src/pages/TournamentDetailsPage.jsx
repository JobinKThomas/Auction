import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import TabbedPanel from '../components/myTournament/TabPanel';
import { useDispatch, useSelector } from "react-redux";
import { selectedTournament } from "../store/tournamentSlice";
import { selectedTeam } from '../store/teamSlice';
import { selectedPlayers } from '../store/playerSlice';

const TournamentDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { list = [], tournament = [] } = useSelector((state) => state.tournament || {});
  const { list: team = [] } = useSelector((state) => state.team || {});
  const { list: players = [] } = useSelector((state) => state.player || {});
  
  useEffect(() => {
    dispatch(selectedTournament(list?.filter((item) => item?._id === id)))
  }, [id, list, dispatch])
  useEffect(() => {
      if (team?.length) {
        const result = team.filter(team =>
          tournament.some(tournament => tournament.code === team.tournamentCode)
        );
        dispatch(selectedTeam(result))  
      }
  }, [tournament, team, dispatch])
  useEffect(() => {
      if (players?.length) {
        const result = players.filter(player =>
          tournament.some(tournament => tournament.code === player.tournamentCode)
        );
        dispatch(selectedPlayers(result))  
        
      }
    }, [tournament, players, dispatch])
  
  return (
    <TabbedPanel />
  )
}

export default TournamentDetails;