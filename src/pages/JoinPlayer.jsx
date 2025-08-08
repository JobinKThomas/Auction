import { useState } from "react";
import { TOURNAMENTS } from "../assests/MockData/tournaments";
import TournamentCodeInput from "../components/TournamentCodeInput";
import PlayerModal from "../components/PlayerModal";

const JoinPlayer = () => {
  const inputLength = 6;
  const defaultValue = Array(inputLength).fill('')
  const [values, setValues] = useState(defaultValue);
  const [openModal, setOpenModal] = useState(false);
  const [tData, setTData] = useState([])

  const handleOpenModal = () => setOpenModal(true);
  const handleCloseModal = () => setOpenModal(false);
  
  
  const handleCodeEntered = (code) => {
    const exists = TOURNAMENTS.some((item) => item.code === code);
    const data = TOURNAMENTS?.filter((item) => item.code === code);
    setTData(data)
    if (exists) {
      handleOpenModal()
    }
    setTimeout(() => {
      setValues(defaultValue)
    }, 1000);

  };

  return (
    <div className="flex flex-col items-center mt-20">
      <h2 className="text-2xl font-bold mb-4">Enter Tournament Code</h2>
      <TournamentCodeInput onComplete={handleCodeEntered} setValues={setValues} values={values} inputLength={inputLength} />
      <PlayerModal openModal={openModal} handleCloseModal={handleCloseModal} data={tData} />
    </div>
  );
 }

export default JoinPlayer;
