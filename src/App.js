import "./App.css";
import Main from "./components/Main";
import { Routes, Route } from "react-router-dom";
import VehicleEntryModal from "./components/Modals/VehicleEntryModal";
import TollEntryModal from "./components/Modals/TollEntryModal";
import ViewTolls from "./components/ViewTolls";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/viewlist" element={<ViewTolls />} />
        <Route path="/addnewvehicle" element={<VehicleEntryModal />} />
        <Route path="/addnewtoll" element={<TollEntryModal />} />
      </Routes>
    </div>
  );
}

export default App;
