import React, { useState } from "react";
import "./App.css";

import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";

function App() {
  const [Mode, setMode] = useState("light");
  return (
    <>
      <Navbar special="Special" mode={Mode} />
      <div className="container my-3">
        <TextForm heading="Write A Post" />
      </div>
      <Footer />
    </>
  );
}

export default App;
