import React from 'react'
import { Card, CardContent, Typography, Grid } from 'material-ui'
import styles from './cards.module.css'
import CountUp from "react-countup" // counter animation

const cards = ({data: {confirmed, recovered, deaths, lastUpdate}}) => { // destructuring data and then another destructuring

    if(!confirmed){ // data.confirmed if not destructured
        return 'Error retrieving data from API'
    }

    return (
        <div className = {styles.container}>
            <Grid container spacing = {3} justify = "center">
                <Grid item component = {Card}>
                    <CardContent>
                        <Typography color = "textSecondary" gutterBottom>
                            Infected
                        </Typography>
                        <Typography variant = "h5">
                            <CountUp start = {0} end = {confirmed.value} duration = {2.5} separator = ",">
                            </CountUp>
                        </Typography>
                        <Typography color = "textSecondary">
                            {new Date(lastUpdate).toDateString()} {/* human readable format of lastUpdate  */}
                        </Typography>
                        <Typography variant = "body2">
                            Number of active cases
                        </Typography>
                    </CardContent>
                </Grid>
                <Grid item component = {Card}>
                    <CardContent>
                        <Typography color = "textSecondary" gutterBottom>
                            Recovered
                        </Typography>
                        <Typography variant = "h5">
                            <CountUp start = {0} end = {recovered.value} duration = {2.5} separator = ",">
                            </CountUp>
                        </Typography>
                        <Typography color = "textSecondary">
                            {new Date(lastUpdate).toDateString()} {/* human readable format of lastUpdate  */}
                        </Typography>
                        <Typography variant = "body2">
                            Number of recoveries
                        </Typography>
                    </CardContent>
                </Grid>
                <Grid item component = {Card}>
                    <CardContent>
                        <Typography color = "textSecondary" gutterBottom>
                            Deaths
                        </Typography>
                        <Typography variant = "h5">
                            <CountUp start = {0} end = {deaths.value} duration = {2.5} separator = ",">
                            </CountUp>
                        </Typography>
                        <Typography color = "textSecondary">
                            {new Date(lastUpdate).toDateString()} {/* human readable format of lastUpdate  */}
                        </Typography>
                        <Typography variant = "body2">
                            Number of deaths
                        </Typography>
                    </CardContent>
                </Grid>
            </Grid>
        </div>
    )
}

export default cards