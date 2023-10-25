import React from "react";
import { Card, CardContent, Grid } from "@mui/material";
import { NavItem } from "./NavItem";
export const Nav = () => {
  return (
    <Card>
      <CardContent>
        <Grid container spacing={2}>
          <Grid item xs={4}>
            <NavItem path="/" label="india" />
          </Grid>
          <Grid item xs={4}>
            <NavItem path="/Us" label="Us" />
          </Grid>
          <Grid item xs={4}>
            <NavItem path="/Uk" label="Uk" />
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};
