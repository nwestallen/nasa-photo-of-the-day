import React, { useState, useEffect } from "react";
import "./App.css";
import Gallery from "./components/Gallery"
import { BASE_URL, API_KEY } from './constants/index';
import axios from 'axios';

let today = new Date();
const dd = String(today.getDate()).padStart(2, '0');
const mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
const yyyy = today.getFullYear();

//today = `${yyyy}-${mm}-${dd}`
today = '2020-02-26'


const dummyData = {
  "date": "2021-01-20",
  "explanation": "Do magnetic fields always flow along spiral arms?  Our face-on view of the Whirlpool Galaxy (M51) allows a spectacularly clear view of the spiral wave pattern in a disk-shaped galaxy.  When observed with a radio telescope, the magnetic field appears to trace the arms' curvature.  However, with NASA’s flying Stratospheric Observatory for Infrared Astronomy (SOFIA) observatory, the magnetic field at the outer edge of M51's disk appears to weave across the arms instead.  Magnetic fields are inferred by grains of dust aligning in one direction and acting like polaroid glasses on infrared light.  In the featured image, the field orientations determined from this polarized light are algorithmically connected, creating streamlines.  Possibly the gravitational tug of the companion galaxy, at the top of the frame, on the dusty gas of the reddish star-forming regions, visible in the Hubble Space Telescope image, enhances turbulence -- stirring the dust and lines to produce the unexpected field pattern of the outer arms.",
  "hdurl": "https://apod.nasa.gov/apod/image/2101/M51Bfield_Sofia_2286.jpg",
  "media_type": "image",
  "service_version": "v1",
  "title": "The Magnetic Field of the Whirlpool Galaxy",
  "url": "https://apod.nasa.gov/apod/image/2101/M51Bfield_Sofia_960.jpg"
  }


function App() {
  const [date, setDate] = useState(today)
  const [data, setData] = useState([])

  useEffect(() => {
    axios
    .get(`${BASE_URL}?api_key=${API_KEY}&date=${date}`)
    .then(res => {
      console.log(res)
      setData(res.data);
    })
    .catch(err => {
      console.log(err);
    })
  }, [date]);

  const chooseDate = (choice) => {
    let dateChoice = choice.target.value;
    setDate(dateChoice);
  };


  return (
    <div className="App">
      <input type="date" onChange={chooseDate} />
      <Gallery data={data} />
    </div>
  );
}

export default App;
