import React, {useState} from 'react';
import {Cards, SearchBar} from './components';
import styles from './App.module.css';
import {fetchData, fetchToday, fetchZipCode} from './api';
import titleImage from './images/apptitle2.png';
import {Typography} from '@material-ui/core'

//import { fetchData } from './api'; // you dont need to specifiy index file
//import coronaImage from './images/image.png';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = { };
        
        
    }
    
    async componentDidMount() {
        const fetchedData = await fetchData("95014");
        const todayData = await fetchToday("95014");
       
        const allData = todayData.concat(fetchedData.futuredays);
        const entirety = { 
            cityname: fetchedData.cityname,
            futuredays: allData
        }
        this.setState({data : entirety, cityName : entirety.cityname, zip : "95014", zipError : false});
        console.log(this.state.data);
        this.cityName = fetchedData.cityname;
        
    }

    handleZipCodeChange = async(zip) => { 
        const fetchedData = await fetchData(zip);
        const todayData = await fetchToday(zip);
        
        console.log(fetchedData);
        if(!todayData || !fetchedData)  {
            return "Loading ... ";
        }
        const allData = todayData.concat(fetchedData.futuredays);
        const entirety = { 
            cityname: fetchedData.cityname,
            futuredays: allData
        }
        this.setState({data : entirety, cityName : entirety.cityname, zip : zip, zipError : false});
    }

    zipCodeChange = async(change) => { 
        
        const validation = await fetchZipCode(change);
        if(validation != "Error") { 
            
            this.handleZipCodeChange(change);
        }
        
        else { 
            
            this.zipError = true;
            
        }
        // if(change == "10027") { 
        //     this.handleZipCodeChange(change);

        // }
        // else { 
        //     this.setState({zipError : true });
        // }
    }

    render() {
       
        return (
            <div classNames = {styles.container}>

                <img className={styles.image} src={titleImage} alt = "WeatherApp"/>
                <Typography className = {styles.typography} gutterBottom variant="h5" component="h2" align = "center">
                    {this.state.cityName} Forecast 
                </Typography>
                
                <SearchBar zipCodeChange = { this.zipCodeChange } error={this.state.zipError}/>
                <Cards data={this.state.data}/>
            </div>
                )
    }
}

export default App;