import React from "react";
import classes from "./components.module.css";
import {Logo} from "./Logo"
import { Details } from "./Details";
import { Metrics } from "./Metrics";



export const Profile = () =>{
return (
    <div className={classes.bigBox} >
    <Logo />
    <Details />
    <Metrics />
    </div>
)
};