import "./App.css";
import Home from "./pages/Home";
import SideHeader from "./pages/components/SideHeader";

function App() {
  return (
    <>
      <div className="grid  grid-cols-12">
        <div className=" col-span-2">
          <SideHeader />
        </div>
        <div className="mx-5 col-span-10">
          <Home />
        </div>
      </div>
    </>
  );
}

export default App;
