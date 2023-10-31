import React from "react";
import { Header, Footer, Work, Testimonial, Skills, About } from "./container";
import { Navbar } from "./components";
import "./App.scss";
import MainLayout from "./layouts/MainLayout";
const App = () => {
  return (
    <div className="app">
      <MainLayout />
    </div>
  );
};

export default App;
