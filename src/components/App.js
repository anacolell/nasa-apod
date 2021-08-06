import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./Home";
import NasaPhoto from "./NasaPhoto";

function App() {
  return (
    <BrowserRouter>
      <div>
        <div>
          <Route component={Home} path="/" exact />
          <Route component={NasaPhoto} path="/nasaphoto" />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
