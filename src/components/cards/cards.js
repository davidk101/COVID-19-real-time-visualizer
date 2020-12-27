import React from 'react'
import { Card, CardContent, Typography, Grid } from 'material-ui'
import styles from './cards.module.css'

const cards = (props) => {
    return (
        <div className = {styles.container}>
            <Grid container spacing = {3} justify = "center">
                <Grid item component = {Card}>
                    <CardContent>
                        <Typography color = "textSecondary" gutterBottom>
                            Infected
                        </Typography>
                        <Typography variant = "h5">
                            INSERT DATA FROM API
                        </Typography>
                        <Typography color = "textSecondary">
                            INSERT DATE FROM API
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
                            INSERT DATA FROM API
                        </Typography>
                        <Typography color = "textSecondary">
                            INSERT DATE FROM API
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
                            INSERT DATA FROM API
                        </Typography>
                        <Typography color = "textSecondary">
                            INSERT DATE FROM API
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