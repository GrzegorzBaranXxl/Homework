import React from "react";
import classes from "./components.module.css"

import zdjecieKuby from "./Kuba.jpg"


export const Logo = () => { 

  
return (
    <div className={classes.photo}>
    <img 
    width={70}
    height={70}
    src={zdjecieKuby}
    
    />
    </div>
)

}