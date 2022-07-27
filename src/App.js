import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Dashboard from "./Admin/Dashboard"
import Overview from "./Admin/Overview/Index"
import OverAdd from "./Admin/Overview/Add"
import OverProgres from "./Admin/Overview/Progres"
import Ideas from "./Admin/Ideas/index"
import Login from "./Admin/Login";
import Agents from "./Admin/Agents/Index"
import AgentAdd from "./Admin/Agents/Add"
import Speed from "./Components/SpedoMeter";



function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Dashboard />} />

        <Route path="/Speed" element={<Speed />} />   

        <Route path="/overview" element={<Overview />} />
        <Route path="/overview/add" element={<OverAdd />} />
        <Route path="/overview/progres" element={<OverProgres />} />

        <Route path="/ideas" element={<Ideas />} />
        <Route path="/agents" element={<Agents />} />
        <Route path="/agents/add" element={<AgentAdd />} />

        <Route path="/login" element={<Login/>} />
      </Routes>
    </Router>
  );
}

export default App;
