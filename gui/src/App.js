import './App.css';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div>
          <div>
            {/* <Routes>
            <Route path="/" element={< />}>
              <Route index element={< />} />
              <Route path="teams" element={<Teams />}>
                <Route path=":teamId" element={<Team />} />
                <Route path="new" element={<NewTeamForm />} />
                <Route index element={<LeagueStandings />} />
              </Route>
            </Route>
            </Routes> */}
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
