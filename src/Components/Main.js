import React, { useState } from "react";
import Style from "./Main.module.scss";
import { Route, Routes } from "react-router-dom";
import { Box, Grid } from "@mui/material";

import Nav from "./Nav";
import Home from "./Home/Home";
import Footer from "./Footer/Footer";
import Portfolio from "./Portfolio/Portfolio";
import ContactForm from "./Contact/Contact";

export default function Main() {
  let [darkMode, setDarkMode] = useState(true);

  function handleClick() {
    setDarkMode(!darkMode);
  }

  return (
    <Box className={darkMode ? Style.dark : Style.light}>
      <Grid
        container
        display={"flex"}
        flexDirection={"column"}
        minHeight={"100vh"}
        justifyContent={"space-between"}
      >
        <Grid item>
          <Nav darkMode={darkMode} handleClick={handleClick} />
        </Grid>

        <Grid item flexGrow={1}>
          <Routes>
            <Route exact path={"//portolfiov3/"} element={<Home />} />
            <Route
              exact
              path={"/portolfiov3/portfolio"}
              element={<Portfolio />}
            />
            <Route
              exact
              path={"/portolfiov3/contactForm"}
              element={<ContactForm />}
            />
          </Routes>
        </Grid>
        <Footer />
      </Grid>
    </Box>
  );
}
