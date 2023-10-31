import React from "react";
import { Outlet } from "react-router-dom";
import { Navbar } from "../components";
import { About, Footer, Header, Skills, Testimonial, Work } from "../container";
import FooterCompo from "../container/FooterCompo/FooterCompo";

export default function MainLayout() {
  return (
    <div>
      <Navbar />
      <div className="pt-16">
        <Header />
        <Skills />
        <Work />
        <Testimonial />
        {
          // <About />
        }

        <Footer />
        <FooterCompo />
        <Outlet />
      </div>
    </div>
  );
}
