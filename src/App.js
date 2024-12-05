
import Login from './components/Login.js';
import Callback from './components/Callback.js';
import TopTracks from './components/TopTracks.js';
import TopTracksTest from './components/TopTracksTest.js';
import { Route, BrowserRouter , Routes } from 'react-router-dom';


function App() {

  return (
    <BrowserRouter >
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/callback" element={<Callback />} />
      <Route path="/top-tracks" element={<TopTracks />} />
      <Route path="/top-tracks-test" element={<TopTracksTest />} />

    </Routes>
  </BrowserRouter >

  );
}

export default App;
