import React from 'react';
import { Card, CardContent, CardMedia, Typography, makeStyles, Grid } from '@material-ui/core/';
import cx from 'classnames';
import styles from './Cards.module.css';
import suncon from '../../images/suncon.png';
import cloudcon from '../../images/cloudycon.png';
import lightraincon from '../../images/lightraincon.png';
import lightningcon from '../../images/lightningcon.png';
import heavyraincon from '../../images/heavyraincon.png';
import smokecon from '../../images/smokecon.png'

const Cards = (weatherData) => {
    
    // If weather data is not valid
    if(!weatherData.data) {
        return "Loading..";
    }

    // Set names for weather icons
    var weathericons = {
        "Clouds" : cloudcon,
        "Clear" : suncon,
        "Drizzle" : lightraincon, 
        "Rain" : heavyraincon,
        "Thunderstorm" : lightningcon,
        "Smoke" : smokecon
    };
    
    // Return grid with card components
    return (
        <div>
            <Grid container direction = "row" justify = "center" alignItems = "center" className={cx(styles.container)}>
                <Grid item component={Card} xs = {2} md = {2} className={cx(styles.card, styles.weather)}> 
                    <CardContent>
                        <CardMedia
                            className={styles.image}
                            component="img"
                            alt="Sun"
                            image= {weathericons[weatherData.data.futuredays[0][2].toString()]}
                            
                        />
                        <Typography gutterBottom variant="h5" component="h2" align = "center">
                            {weatherData.data.futuredays[0][1] + "°"}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" align = "center" component="p">
                            {weatherData.data.futuredays[0][0].toString().substring(0,15)}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" align = "center">
                            {weatherData.data.futuredays[0][2]}
                        </Typography>
                    </CardContent>
                </Grid>

                <Grid item component={Card} xs = {2} md = {2} className={cx(styles.card, styles.weather)}> 
                    <CardContent>
                        <CardMedia
                            className={styles.image}
                            component="img"
                            alt="Sun"
                            image= {weathericons[weatherData.data.futuredays[1][2].toString()]}
                        />
                        <Typography gutterBottom variant="h5" component="h2" align = "center">
                            {weatherData.data.futuredays[1][1]+ "°"}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" align = "center" component="p">
                            {weatherData.data.futuredays[1][0].toString().substring(0,15)}
                        </Typography>
                        
                        <Typography variant="body2" color="textSecondary" align = "center">
                            {weatherData.data.futuredays[1][2]}
                        </Typography>
                    </CardContent>
                </Grid>

                <Grid item component={Card} xs = {2} md = {2} className={cx(styles.card, styles.weather)}> 
                    <CardContent>
                        <CardMedia
                            className={styles.image}
                            component="img"
                            alt="Sun"
                            image= {weathericons[weatherData.data.futuredays[2][2].toString()]}
                        />
                        <Typography gutterBottom variant="h5" component="h2" align = "center">
                            {weatherData.data.futuredays[2][1] + "°"}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" align = "center" component="p">
                            {weatherData.data.futuredays[2][0].toString().substring(0,15)}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" align = "center">
                            {weatherData.data.futuredays[2][2]}
                        </Typography>
                        
                    </CardContent>
                </Grid>

                <Grid item component={Card} xs = {2} md = {2} className={cx(styles.card, styles.weather)}> 
                    <CardContent>
                        <CardMedia
                            className={styles.image}
                            component="img"
                            alt="Sun"
                            
                            image= {weathericons[weatherData.data.futuredays[3][2].toString()]}
                        />
                        <Typography gutterBottom variant="h5" component="h2" align = "center">
                            {weatherData.data.futuredays[3][1] + "°"}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" align = "center" component="p">
                            {weatherData.data.futuredays[3][0].toString().substring(0,15)}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" align = "center">
                            {weatherData.data.futuredays[3][2]}
                        </Typography>
                    </CardContent>
                </Grid>

                <Grid item component={Card} xs = {2} md = {2} className={cx(styles.card, styles.weather)}> 
                    <CardContent>
                        <CardMedia
                            className={styles.image}
                            component="img"
                            alt="Sun"
                            image= {weathericons[weatherData.data.futuredays[4][2].toString()]}
                        />
                        <Typography gutterBottom variant="h5" component="h2" align = "center">
                            {weatherData.data.futuredays[4][1] + "°"}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" align = "center" component="p">
                            {weatherData.data.futuredays[4][0].toString().substring(0,15)}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" align = "center">
                            {weatherData.data.futuredays[4][2]}
                        </Typography>
                        
                    </CardContent>
                </Grid>
            </Grid> 
    </div>
    );
}
export default Cards;

