import React, { useState, useEffect } from "react";
import { Button, Grid, Card, CardContent } from "@mui/material";
export const Us = () => {
  const [place, setPlace] = useState("");
  const [path, setPath] = useState("");
  useEffect(() => {
    setPath(`images/US/${place}.jpg`);
  }, [place]);
  return (
    <Grid container spacing={2.2} align="center">
      <Grid item xs={2.2}>
        <Button
          onClick={() => setPlace("NewYork")}
          variant="contained"
          color="error"
          fullWidth
        >
          NewYork
        </Button>
      </Grid>
      <Grid item xs={2.2}>
        <Button
          onClick={() => setPlace("Washington")}
          variant="contained"
          color="error"
          fullWidth
        >
          Washington
        </Button>
      </Grid>
      <Grid item xs={2.2}>
        <Button
          onClick={() => setPlace("Wikiki")}
          variant="contained"
          color="error"
          fullWidth
        >
          Wikiki
        </Button>
      </Grid>


      <Grid item xs={12}>
        <Card
          style={{
            background: `url(${path})`,
            height: 500,
            width: 900,
            border: "2px solid  black",
            boxShadow: "5px 5px",
          }}
        >
          <CardContent>
            <h1 style={{ height: 100, width: 200 }}>{place}</h1>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};
