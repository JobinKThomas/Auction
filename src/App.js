import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import MyTournaments from './pages/MyTournamentsPage';
import TournamentForm from './components/tournament/TournamentForm'
import JoinPlayer from './pages/JoinPlayer';
import Layout from './pages/Layout';
import TournamentDetails from './pages/TournamentDetailsPage';
import { Provider } from "react-redux";
import { store } from "./store/store";

function App() {
  return (
    <Provider store={store}>
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
    </Provider>

  );
}

export default App;
