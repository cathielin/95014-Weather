import React, {useState} from 'react';
import {Cards, SearchBar} from './components';
import styles from './App.module.css';
import {fetchData, fetchToday, fetchZipCode} from './api';
import titleImage from './images/apptitle2.png';
import {Typography} from '@material-ui/core'


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = { };
    }
    
    async componentDidMount() {
        // Fetch initial weather data for 95014
        const fetchedData = await fetchData("95014");
        const todayData = await fetchToday("95014");
       
        // Add the data for today with the forecast 
        // as forecast data excludes data for the present day
        const allData = todayData.concat(fetchedData.futuredays);
        const entirety = { 
            cityname: fetchedData.cityname,
            futuredays: allData
        }

        this.setState({data : entirety, cityName : entirety.cityname, zip : "95014", zipError : false});
        this.cityName = fetchedData.cityname;
        
    }

    handleZipCodeChange = async(zip) => { 
        // If zipcode changes, fetch the weather data again
        const fetchedData = await fetchData(zip);
        const todayData = await fetchToday(zip);
        
        // If data is undefined
        if(!todayData || !fetchedData)  {
            return "Loading ... ";
        }

        // Add the data for today with the forecast 
        // as forecast data excludes data for the present day
        const allData = todayData.concat(fetchedData.futuredays);
        const entirety = { 
            cityname: fetchedData.cityname,
            futuredays: allData
        }
        this.setState({data : entirety, cityName : entirety.cityname, zip : zip, zipError : false});
    }

    zipCodeChange = async(change) => { 
        // Awaits to see if a zipcode entered by the user is valid
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
       // Title, search bar, and cards
        return (
            <div classNames = {styles.container}>
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