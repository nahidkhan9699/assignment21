import React,{useState,useEffect} from "react";
import { Grid,Button,Card,CardContent } from "@mui/material";
export const UK=()=>{
    const[place,setPlace]=useState("");
    const[path,setPath]=useState("");
    useEffect(()=>{
        setPath(`images/Uk/${place}.jpg`);
    },[place])
return(
    <Grid container spacing={2.2} align="center">
<Grid item xs={2.2}>
    <Button onClick={()=>setPlace("England")} variant="contained" color="error" fullWidth>England</Button>
</Grid>
<Grid item xs={2.2}>
    <Button onClick={()=>setPlace("Scotland")} variant="contained" color="error" fullWidth>scotland</Button>
</Grid>
<Grid item xs={2.2}>
    <Button onClick={()=>setPlace("Wales")} variant="contained" color="error" fullWidth>wales</Button>
</Grid>
<Grid item xs={12}>
<Card>
    <CardContent>
        <Grid container spacing={2}>
                    <Grid item xs={3}></Grid>
                    <Grid item xs={6} style={{background:`url(${path})` }}>
                                  <h1 style={{ height: 400, width: 200 }}>{place}</h1>

                    </Grid>
                </Grid>
    </CardContent>
</Card>
</Grid>
</Grid>

)
}