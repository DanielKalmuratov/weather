import React, {Component} from 'react'
import classes from './time.module.css';


class Time extends Component {
   

    timeBuilder=(d)=>{
        let days = ["Восскресенье","Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"]
        let months = ["Января", "Февраля", "Марта", "Апреля", "Мая", "Июня", "Июля", "Августа", "Сентября", "Октября", "Ноября", "Декабря"];
      
        const day = days[d.getDay()]
        const month = months[d.getMonth()]
        const date = d.getDate()
        const year = d.getFullYear()
        return `${date}  ${month} ${year} ${day}` 
      }
   
   render(){
       return(
        <div className={classes.time}>
            {this.timeBuilder(new Date())}
        </div>
       )
   }
       
    
}
export default Time