import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./Home";
import NasaPhoto from "./NasaPhoto";
import Photos from "./Photos";

function App() {
  return (
    <BrowserRouter>
      <div>
        <div>
          <Route component={Home} path="/" exact />
          <Route component={NasaPhoto} path="/nasaphoto" />
          <Route component={Photos} path="/photos" />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
