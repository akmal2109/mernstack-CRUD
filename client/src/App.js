import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Homee } from "./pages/Homee";
import { AddUser } from "./components/AddUser";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homee />} />
          <Route path="/add" element={<AddUser />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
