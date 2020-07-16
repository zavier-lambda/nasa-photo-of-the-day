import React, {useState, useEffect}from "react";
import axios from "axios";
import ImageOfTheDay from "./components/imageOfTheDay/ImageOfTheDay"
import Header from "./components/header/Header";
import Description from "./components/description/Description";
import {API_KEY}from "./constants/Constants";
import "./App.css";



function App() {
  const [imageOfTheDay, setImageOfTheDay] = useState({})
  const [astroids, setAstroids] = useState({})
  const astroidsApiURL = `https://api.nasa.gov/neo/rest/v1/feed?start_date=2015-09-07&end_date=2015-09-08&api_key=${API_KEY}`
  const imageOfTheDayApiURL = `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}&date=2020-07-15`
  
  useEffect(() => {
    axios.get(astroidsApiURL)
      .then((res) => {
        let astroids = res.data.near_earth_objects

        let dates = Object.keys(astroids)

        dates.forEach(date => {
          let resp = astroids[date]
          setAstroids(resp)
        })
          
      })
      .catch(err => {console.log(err)})
  }, [])

  useEffect(() => {
    axios.get(imageOfTheDayApiURL)
      .then( res => {
        setImageOfTheDay(res.data)
      })
      .catch( err => {
        console.log(err)
      })
  }, [])

  return (
    <div className="App">
      <Header />
      <ImageOfTheDay imgOTD={imageOfTheDay}/>
      <Description astroid={astroids}/>
    </div>
  );
}

export default App;
