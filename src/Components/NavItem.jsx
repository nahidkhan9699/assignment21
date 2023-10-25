import React from "react";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
export const NavItem=({path,label})=>{                                          //  dynamic button banare apan     //  
    return(
       <Link to={path}>
        <Button variant="contained" fullWidth>{label}</Button>
       </Link> 
    );

}