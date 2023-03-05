import React from "react";
import { Routes, Route } from "react-router-dom";
import logo from "./images/logo.png";

// Page [ Development ]
import Events from "./containers/Events";
import Home from "./containers/Home";
import MasterLayout from "./components/MasterLayout";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<MasterLayout />}>
          <Route path="" element={<Home />} />
          <Route path="events" element={<Events />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
