import "./styles/global.css";
import Login from "./views/Login";
import UserProvider from "./store/userContext";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <UserProvider>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<p>HOME</p>} />
      </Routes>
    </UserProvider>
  );
}

export default App;
