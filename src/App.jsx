import React from "react";
import NavBar from "./layouts/navbar";
import Footer from "./layouts/footer";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import { MyProvider } from "./context";

function App() {
  return (
    <>
      <MyProvider>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Footer />
      </MyProvider>
    </>
  );
}

export default App;
