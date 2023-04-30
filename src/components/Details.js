import React from "react";
import classes from "./components.module.css"

export const Details =() =>{

    return(
        <div className={classes.person}>
            <form className={classes.data}>
                <p><b>Victor Crest</b>  26</p>

                <p>London</p>
            </form>

        </div>
    );
};