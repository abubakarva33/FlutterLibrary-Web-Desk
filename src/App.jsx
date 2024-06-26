import "./App.css";
import Home from "./pages/Home";
import SideHeader from "./pages/components/SideHeader";
import Header from "./pages/components/Header";
import { useState } from "react";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div className="flex mx-5">
        <div
          className={`lg:w-72 lg:relative overflow-y-scroll lg:overflow-hidden h-screen lg:h-auto bg-white w-full fixed top-0 nav ${
            isOpen ? "active" : ""
          } lg:left-0 transition-all`}
        >
          <SideHeader setIsOpen={setIsOpen} />
        </div>
        <div className=" grid grid-cols-1  max-w-full w-full">
          <Header setIsOpen={setIsOpen} />
          <Home />
        </div>
      </div>
    </>
  );
}

export default App;
