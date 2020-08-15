import React from 'react';
import {TextField} from '@material-ui/core';
import cx from 'classnames';
import styles from './SearchBar.module.css';

const SearchBar = ({zipCodeChange, error}) => {
    
    return ( 
        !error ? 
        <div> 
            <TextField id= "standard-basic" label = "Search for a zip code" justify = "center"
                className={cx(styles.search)}
            onChange={ (e) => zipCodeChange(e.target.value)}/> 
        </div>
        :

        <div> 
            <TextField id= "standard-basic" label= "Invalid Zipcode" 
                error id= "standard-error-helper-text"
                className={cx(styles.search)}
            onChange={ (e) => zipCodeChange(e.target.value)}/> 
        </div>


    );
}

export default SearchBar;