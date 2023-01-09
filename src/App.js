import "./App.css";
import Sidebar from "./Components/Sidebar/Sidebar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./Components/Dashboard/Dashboard";
import Configuration from "./Components/Configuration/Configuration";
import Analytics from "./Components/Analytics/Analytics";
import UserManage from "./Components/UserManage/UserManage";
import Roal from "./Components/RoalManage/Roal";
import Settings from "./Components/Settings/Settings";
import Context from "./Components/context/Context";
import { useState } from "react";
import SheduledTime from "./Components/SheduledTime/SheduledTime";

function App() {
  const [darkTheme, setDarkTheme] = useState(false);
  const toggleTheme = () => {
    setDarkTheme(!darkTheme);
    console.log(darkTheme);
  };
  return (
    <>
      <Context.Provider
        value={{
          darkTheme,
          toggleTheme: toggleTheme,
        }}
      >
        <BrowserRouter>
          <Sidebar />
          <Routes>
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="configuration" element={<Configuration />} />
            <Route path="sheduledtime" element={<SheduledTime />} />
            <Route path="analytics" element={<Analytics />} />
            <Route path="usermanage" element={<UserManage />} />
            <Route path="roalmanage" element={<Roal />} />
            <Route path="settings" element={<Settings />} />
          </Routes>
        </BrowserRouter>
      </Context.Provider>
    </>
  );
}

export default App;
