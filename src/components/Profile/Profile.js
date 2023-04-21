import { Details } from "../Details/Details"
import { Metrics } from "../Metrics/Metrics"
import { Logo } from "../Logo/Logo"
import classes from "./Profile.module.css"

export const Profile = () => {
    return (
        <div className={classes.Profile}>
            <Logo />
            <Details />
            <Metrics /> 
        </div>
    )
}