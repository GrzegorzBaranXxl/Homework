
import { Metric1 } from "../Metric/Metric1"
import { Metric2 } from "../Metric/Metric2"
import { Metric3 } from "../Metric/Metric3"
import classes from "./Metrics.module.css"


export const Metrics = ()=> {
    return (
        <article className={classes.Metrics} >
            <div className={classes.bigBox}>
                <Metric1 />
                <Metric2 />
                <Metric3 />
            </div>
        </article> 
    )
};