import React, { useState, useEffect } from "react";
import "./App.css";
import Photo from "./components/Photo";
import { BASE_URL, API_KEY } from './constants/index';
import axios from 'axios';

function App() {
  const [url, setUrl] = useState()

  useEffect(() => {
    console.log('Side effect');
    //setUrl('https://static2.srcdn.com/wordpress/wp-content/uploads/2019/02/Danny-DeVito-on-Its-Always-Sunny-in-Philadelphia.jpg');
    axios
    .get(`${BASE_URL}?api_key=${API_KEY}`)
    .then(res => {
      setUrl(res.data.url);
    })
    .catch(err => {
      console.log(err);
    })
  }, []);

  return (
    <div className="App">
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun <span role="img" aria-label='go!'>🚀</span>!
      </p>
      <Photo url={url}/>
    </div>
  );
}

export default App;
