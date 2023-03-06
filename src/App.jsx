import React from "react";
import { Routes, Route } from "react-router-dom";
import { useLocation } from "react-router-dom";

// Page [ Development ]
import Team from "./containers/Team";
import Events from "./containers/Events";
import Home from "./containers/Home";
import MasterLayout from "./components/MasterLayout";

const App = () => {
  const { pathname } = useLocation();

  const getCurrentPath = () => {
    switch (pathname) {
      case "/":
        return "home";
      case "/team":
        return "team";
      case "/events":
        return "events";
    }
  };

  return (
    <div>
      <Routes>
        <Route path="/" element={<MasterLayout currPath={getCurrentPath()} />}>
          <Route path="" element={<Home />} />
          <Route path="events" element={<Events />} />
          <Route path="team" element={<Team />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
