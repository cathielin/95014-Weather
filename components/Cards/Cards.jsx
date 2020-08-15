import React from 'react';
import { Card, CardContent, CardMedia, Typography, makeStyles, Grid } from '@material-ui/core/';
import { shadows } from '@material-ui/system';
import {sizing} from '@material-ui/system';
import cx from 'classnames';
import styles from './Cards.module.css';
import suncon from '../../images/suncon.png';
import cloudcon from '../../images/cloudycon.png';
import lightraincon from '../../images/lightraincon.png';
import lightningcon from '../../images/lightningcon.png';
import heavyraincon from '../../images/heavyraincon.png';

const Cards = (weatherData) => {
    
    console.log(weatherData.data);
    if(!weatherData.data) {
        return "Loading..";
    }
    var weathericons = {
        "Clouds" : cloudcon,
        "Clear" : suncon,
        "Drizzle" : lightraincon, 
        "Rain" : heavyraincon,
        "Thunderstorm" : lightningcon
    };
    

    //const extractedData = { weatherData.name, weatherData.days};
    return (
        
        <div>
            <Grid container direction = "row" justify = "center" alignItems = "center" >
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

// <a target="_blank" href="https://icons8.com/icons/set/partly-cloudy-day">Partly Cloudy Day icon</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a>
// <a target="_blank" href="https://icons8.com/icons/set/clouds">Clouds icon</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a>
// <a target="_blank" href="https://icons8.com/icons/set/cloud-lighting">Cloud Lightning icon</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a>
// <a target="_blank" href="https://icons8.com/icons/set/light-rain">Light Rain icon</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a>
// <a target="_blank" href="https://icons8.com/icons/set/moderate-rain">Moderate Rain icon</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a>
// <a target="_blank" href="https://icons8.com/icons/set/light-snow">Light Snow icon</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a>
// <a target="_blank" href="https://icons8.com/icons/set/intense-rain">Heavy Rain icon</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a>
// <a target="_blank" href="https://icons8.com/icons/set/windy-weather">Windy Weather icon</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a>
// <a target="_blank" href="https://icons8.com/icons/set/wind">Wind icon</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a>
