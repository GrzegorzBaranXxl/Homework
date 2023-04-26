import React from "react";
import { Metric1 } from "./Metric1";
import { Metric2 } from "./Metric2";
import { Metric3 } from "./Metric3";
import classes from "./components.module.css"

export const Metrics = () => {
    return (
        <div className={classes.manyBox}>
            <Metric1 />
            <Metric2 />
            <Metric3 /> 
        </div>
    )
    
}