import { Route, Routes } from "react-router-dom";
import "./App.css";
import EmployeePage from "./pages/Employee";

function App() {
  return (
    <Routes>
      <Route element={<EmployeePage />} path="/" />
    </Routes>
  );
}

export default App;
