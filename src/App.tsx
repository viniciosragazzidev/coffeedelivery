import { useState } from "react";
import "./styles/global.css";
import ContextProvider from "./context/ContextApp";
import { Outlet } from "react-router-dom";
import Header from "./components/header/Header";
function App() {
  return (
    <ContextProvider>
      <Header />

      <Outlet />
    </ContextProvider>
  );
}

export default App;
