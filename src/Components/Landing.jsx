import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import { Grid } from "@mui/material";
import { India } from "./india";
import { UK } from "./Uk";
import { Us } from "./Us";
import { Nav } from "./Nav";

export const Landing = () => {
  return (
    // <Grid container spacing={2} sx={{ marginTop: 2 }}>
      <BrowserRouter>
        <Nav />
        <br/>
        <Routes>
          <Route path="/" element={<India />} />
          <Route path="/Us" element={<Us />} />
          <Route path="/Uk" element={<UK />} />
        </Routes>
      </BrowserRouter>
    // </Grid>
  );
};
