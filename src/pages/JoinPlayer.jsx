import { useState } from "react";
import { TOURNAMENTS } from "../assests/MockData/tournaments";
import TournamentCodeInput from "../components/common/CodeInput";
import PlayerModal from "../components/playerInfo/PlayerModal";

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
      <h2 className="text-2xl font-bold mb-4">Join As A Player</h2>
      <h3 className="text-2xl font-bold mb-4">Enter Your Tournament Code</h3>
      <TournamentCodeInput onComplete={handleCodeEntered} setValues={setValues} values={values} inputLength={inputLength} />
      <PlayerModal openModal={openModal} handleCloseModal={handleCloseModal} data={tData} />
      <ul className="list-disc pl-6 bg-white p-4 rounded-lg shadow w-full max-w-md">
      <li className="text-gray-800 hover:text-blue-600">Please enter correct tournament code to join as a player.</li>
      <li className="text-gray-800 hover:text-blue-600">If you don't have tournament code, Please contact the tournament organizer</li>
    </ul>
    </div>
  );
 }

export default JoinPlayer;
