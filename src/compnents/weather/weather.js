import React from 'react'
import classes from './weather.module.css'
import Date from '../date/date'

const Weather = props => {
    
   
    return (
        <div className={classes.box}>
            <h1 className={classes.header}>{props.city}, {props.country}</h1>

            <Date /> 

            <p className={classes.temp}>{props.temp} ºc</p>   
            <p className={classes.description}>{props.description}</p>
        </div>
    )
       
    
}
export default Weather
