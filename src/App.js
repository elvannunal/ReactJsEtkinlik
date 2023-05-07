
import { Routes, Route, } from "react-router-dom";
import React from "react";
import HomePage from "./components/homePage";

function App() {
  return (
    <>
        <Routes>
            <Route path="/" element={<HomePage/>}> </Route>
        </Routes>

    </>
  );
}

export default App;
