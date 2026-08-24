import { useState } from "react";
import "./App.css";
import CookieCounter from "./components/Cookie-clicker/Counter";
import CatPicture from "./components/CatAPI/RandomCat";

function App() {
  return (
    <>
      <CookieCounter />
      <CatPicture />
    </>
  );
}

export default App;
