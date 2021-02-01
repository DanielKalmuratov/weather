import React, {Component} from 'react';
import './App.css';
import Weather from './compnents/weather/weather'


const Api_Key = 'a2625e2a0d7706f1b3d8e3d6bae5e7de'

const news_Api_Key = '1aeacc55f6634bc89e33178a0cd62e5e'

class App extends Component {
  constructor() {
    super()
    
    
    
    this.state = {
      city: undefined,
      country: undefined,
      temp: undefined,
      description: ""

    }
    
  }
  

  getNews = async()=>{
    const new_api_call = await fetch(`http://newsapi.org/v2/top-headlines?language=ru&apiKey=${news_Api_Key}`)
    const response = await new_api_call.json()

    console.log(response)
  
  }  

  


  getWeather = async()=>{
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=Bishkek&appid=${Api_Key}&lang=ru&units=metric`)
    const response = await api_call.json()

    this.setState({
      city: response.name,
      country: response.sys.country,
      temp: response.main.temp,
      description: response.weather[0].description

    })
  }
  
 componentDidMount(){
  this.getWeather()
    this.getNews() 
 }


  render(){
    return (
      <div className="app"> 

        <Weather
          city={this.state.city}
          country={this.state.country}
          temp={this.state.temp}
          description={this.state.description}
        /> 
       
          
      </div>
    );
  }

 
}

export default App;
