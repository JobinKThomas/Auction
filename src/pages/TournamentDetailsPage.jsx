import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { TOURNAMENTS } from '../assests/MockData/tournaments';
import TabbedPanel from '../components/myTournament/TabPanel';

const TournamentDetails = () => {
  const { id } = useParams();
  const [data, setData] = useState([])
  useEffect(() => {
    setData(TOURNAMENTS?.filter((item) => item?._id === id))
  }, [id])
  
  return (
    <TabbedPanel />
  )
}

export default TournamentDetails;