import "./App.css";
import { Routes, Route } from "react-router-dom";
import Sidebar from "./layout/Sidebar/Sidebar";
import Content from "./layout/Content/Content";
import Home from "./components/Home/Home";
import Projects from "./components/projects/Projects";

function App() {
  return (
    <div className="App">
      <Sidebar />
      <Content>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </Content>
    </div>
  );
}

export default App;
