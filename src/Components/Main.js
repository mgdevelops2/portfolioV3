import React, { useState } from "react";
import Style from "./Main.module.scss";
import { Route, Routes } from "react-router-dom";
import { Box, Grid } from "@mui/material";

import Nav from "./Nav";
// import Home from "./Home/Home";
// import Portfolio from "./Portfolio/Portolio";
// import ContactForm from "./Contact/Contact";
// import Footer from "./Footer/Footer";

export default function Main() {
  let [darkMode, setDarkMode] = useState(false);

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
            <Route
              exact
              path={"//portolfiov3/"}
              // element={<Home />}
            />
            {/* <Route exact path={"/resume"} element={<Resume />} /> */}
            <Route
              exact
              path={"/portolfiov3/contactForm"}
              // element={<ContactForm />}
            />
            <Route
              exact
              path={"/portolfiov3/portfolio"}
              // element={<Portfolio />}
            />
          </Routes>
        </Grid>
        {/* <Footer /> */}
      </Grid>
    </Box>
  );
}
