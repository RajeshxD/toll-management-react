import "./App.css";
import Main from "./components/Main";
import { Routes, Route } from "react-router-dom";
import AddEntry from "./components/Modals/VehicleEntryModal";
import AddToll from "./components/Modals/TollEntryModal";
import TollList from "./components/viewTolls";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/viewlist" element={<TollList />} />
        <Route path="/addnewvehicle" element={<AddEntry />} />
        <Route path="/addnewtoll" element={<AddToll />} />
      </Routes>
    </div>
  );
}

export default App;
