import React from 'react'
import { Card, CardContent, Typography, Grid } from '@material-ui/core'
import styles from './Cards.module.css'
import CountUp from 'react-countup' // counter animation
import cx from 'classnames' // links classes together to apply styling for  multiple classes

const Cards = ({ data: { confirmed, recovered, deaths, lastUpdate }, country }) => { // destructuring data and country and then another destructuring is taking place

    //console.log(`country: ${country}`)

    if(!confirmed){ // data.confirmed if not destructured
        //return 'Error: Data could not be loaded from API'
        return ''
    }

    else if (country === 'United States'){ // separate conditional required due to separate API call

        let stringLastUpdate = '' + lastUpdate
        //console.log(typeof (stringLastUpdate))

        let formattedLastUpdate = stringLastUpdate.substring(0,4) + '-' + stringLastUpdate.substring(4,6) + '-' + stringLastUpdate.substring(6,8)
        //console.log(formattedLastUpdate)

        var priorDate = new Date (formattedLastUpdate)

        var updatedDate = new Date(priorDate.getTime()+1000*60*60*24*4)

        return (
            <div className = {styles.container}>
                <Grid container spacing = {3} justify = "center" >
                    <Grid item component = {Card} xs = {12} md = {3} className = {cx(styles.card, styles.infected)}>
                        <CardContent >
                            <Typography color = "textPrimary" gutterBottom>
                                Total cases
                            </Typography>
                            <Typography variant = "h5">
                                <CountUp start = {0} end = {confirmed} duration = {2.5} separator = ",">
                                </CountUp>
                            </Typography>
                            <Typography color = "textSecondary">
                                {`Updated: ${updatedDate.toDateString()}`} {/* human readable format of lastUpdate  */}
                            </Typography>
                        </CardContent>
                    </Grid>

                    <Grid item component = {Card} xs = {12} md = {3} className = {cx(styles.card, styles.recovered)}>
                        <CardContent>
                            <Typography color = "textPrimary" gutterBottom>
                                Recovered
                            </Typography>
                            <Typography variant = "h5">
                                <CountUp start = {0} end = {recovered} duration = {2.5} separator = ",">
                                </CountUp>
                            </Typography>
                            <Typography color = "textSecondary">
                                {`Updated: ${updatedDate.toDateString()}`} {/* human readable format of lastUpdate  */}
                            </Typography>
                        </CardContent>
                    </Grid>

                    <Grid item component = {Card} xs = {12} md = {3} className = {cx(styles.card, styles.active)}>
                        <CardContent>
                            <Typography color = "textPrimary" gutterBottom>
                                Active
                            </Typography>
                            <Typography variant = "h5">
                                <CountUp start = {0} end = {confirmed - recovered - deaths} duration = {2.5} separator = ",">
                                </CountUp>
                            </Typography>
                            <Typography color = "textSecondary">
                                {`Updated: ${updatedDate.toDateString()}`} {/* human readable format of lastUpdate  */}
                            </Typography>
                        </CardContent>
                    </Grid>

                    <Grid item component = {Card} xs = {12} md = {3} className = {cx(styles.card, styles.deaths)}>
                        <CardContent>
                            <Typography color = "textPrimary" gutterBottom>
                                Deaths
                            </Typography>
                            <Typography variant = "h5">
                                <CountUp start = {0} end = {deaths} duration = {2.5} separator = ",">
                                </CountUp>
                            </Typography>
                            <Typography color = "textSecondary">
                                {`Updated: ${updatedDate.toDateString()}`} {/* human readable format of lastUpdate  */}
                            </Typography>
                        </CardContent>
                    </Grid>
                </Grid>
            </div>
        )


    }

    else{

        return (
            <div className = {styles.container}>
                <Grid container spacing = {3} justify = "center" >
                    <Grid item component = {Card} xs = {12} md = {3} className = {cx(styles.card, styles.infected)}>
                        <CardContent >
                            <Typography color = "textPrimary" gutterBottom>
                                Total cases
                            </Typography>
                            <Typography variant = "h5">
                                <CountUp start = {0} end = {confirmed.value} duration = {2.5} separator = ",">
                                </CountUp>
                            </Typography>
                            <Typography color = "textSecondary">
                                {`Updated: ${new Date(lastUpdate).toDateString()}`} {/* human readable format of lastUpdate  */}
                            </Typography>
                        </CardContent>
                    </Grid>

                    <Grid item component = {Card} xs = {12} md = {3} className = {cx(styles.card, styles.recovered)}>
                        <CardContent>
                            <Typography color = "textPrimary" gutterBottom>
                                Recovered
                            </Typography>
                            <Typography variant = "h5">
                                <CountUp start = {0} end = {recovered.value} duration = {2.5} separator = ",">
                                </CountUp>
                            </Typography>
                            <Typography color = "textSecondary">
                                {`Updated: ${new Date(lastUpdate).toDateString()}`} {/* human readable format of lastUpdate  */}
                            </Typography>
                        </CardContent>
                    </Grid>

                    <Grid item component = {Card} xs = {12} md = {3} className = {cx(styles.card, styles.active)}>
                        <CardContent>
                            <Typography color = "textPrimary" gutterBottom>
                                Active
                            </Typography>
                            <Typography variant = "h5">
                                <CountUp start = {0} end = {confirmed.value - recovered.value - deaths.value} duration = {2.5} separator = ",">
                                </CountUp>
                            </Typography>
                            <Typography color = "textSecondary">
                                {`Updated: ${new Date(lastUpdate).toDateString()}`} {/* human readable format of lastUpdate  */}
                            </Typography>
                        </CardContent>
                    </Grid>

                    <Grid item component = {Card} xs = {12} md = {3} className = {cx(styles.card, styles.deaths)}>
                        <CardContent>
                            <Typography color = "textPrimary" gutterBottom>
                                Deaths
                            </Typography>
                            <Typography variant = "h5">
                                <CountUp start = {0} end = {deaths.value} duration = {2.5} separator = ",">
                                </CountUp>
                            </Typography>
                            <Typography color = "textSecondary">
                                {`Updated: ${new Date(lastUpdate).toDateString()}`} {/* human readable format of lastUpdate  */}
                            </Typography>
                        </CardContent>
                    </Grid>
                </Grid>
            </div>
        )

    }
}

export default Cards