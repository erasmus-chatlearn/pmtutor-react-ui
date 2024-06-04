import "./App.css";
import Home from "./pages/Home";
import Help from "./pages/Help";
import Tutor from "./pages/Tutor";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ProSidebarProvider } from "react-pro-sidebar";

function App() {
  return (
    <ProSidebarProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Help" element={<Help />} />
          <Route path="/Tutor" element={<Tutor />} />
        </Routes>
      </Router>
    </ProSidebarProvider>
  );
}

export default App;
