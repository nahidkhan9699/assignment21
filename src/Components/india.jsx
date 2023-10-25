import React, { useState, useEffect } from "react";
import { Button, Grid, Card, CardContent } from "@mui/material";
export const India = () => {
  const [place, setPlace] = useState("");
  const [path, setPath] = useState("");
  useEffect(() => {
    setPath(`images/india/${place}.jpg`);
  }, [place]);
  return (
    <Grid container spacing={2.2} align="center">
      <Grid item xs={2.2}>
        <Button
          onClick={() => setPlace("Agra")}
          variant="contained"
          color="error"
          fullWidth
        >
          Agra
        </Button>
      </Grid>
      <Grid item xs={2.2}>
        <Button
          onClick={() => setPlace("Rajasthan")}
          variant="contained"
          color="error"
          fullWidth
        >
          Rajasthan
        </Button>
      </Grid>
      <Grid item xs={2.2}>
        <Button
          onClick={() => setPlace("Delhi")}
          variant="contained"
          color="error"
          fullWidth
        >
          Delhi
        </Button>
      </Grid>
      <Grid item xs={2.2}>
        <Button
          onClick={() => setPlace("Mumbai")}
          variant="contained"
          color="error"
          fullWidth
        >
          mumbai
        </Button>
      </Grid>
      <Grid item xs={2.2}>
        <Button
          onClick={() => setPlace("Goa")}
          variant="contained"
          color="error"
          fullWidth
        >
          goa
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
