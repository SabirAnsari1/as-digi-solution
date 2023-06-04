import React from "react";
import { Routes, Route } from "react-router-dom";
import { Home } from "./Home";
import { Services } from "./Services";
import { Solutions } from "./Solutions";
import { Download } from "./Download";
import { About } from "./About ";
import { Contact } from "./Contact ";
import { PageNotFound } from "./PageNotFound";

export const AllRoutes = () => {
  return (
    <Routes>
      <Route path={"/"} element={<Home />} />
      <Route path={"/services"} element={<Services />} />
      <Route path={"/solutions"} element={<Solutions />} />
      <Route path={"/download"} element={<Download />} />
      <Route path={"/about"} element={<About />} />
      <Route path={"/contact"} element={<Contact />} />
      <Route path={"*"} element={<PageNotFound />} />
    </Routes>
  );
};
