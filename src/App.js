import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import MyTournaments from './pages/MyTournamentsPage';
import TournamentForm from './components/TournamentForm'
// import CreateTournament from './pages/CreateTournament';
// import ViewAuctions from './pages/ViewAuctions';
import JoinPlayer from './pages/JoinPlayer';
import Layout from './pages/Layout';
import TournamentDetails from './pages/DetailsPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Navigate to="/my-tournaments" />} />
          <Route path="my-tournaments" element={<MyTournaments />} />
          <Route path="my-tournament/:id" element={<TournamentDetails />} />
          <Route path="create-tournament" element={<TournamentForm />} />
          <Route path="view-auctions" element={<MyTournaments />} />
          <Route path="join-as-player" element={<JoinPlayer />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
