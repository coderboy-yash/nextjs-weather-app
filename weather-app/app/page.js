"use client"
import Image from "next/image";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Modal from "./components/Modal";
import { useState  } from 'react';
import axios from 'axios';
import Details from "./components/Details";
import { useAppContext } from "@/context";


// import getCoords from 'city-to-coords';
 


export default function Home() {
  const {data,setData}=useAppContext();

  
  const [modal, setModal] = useState();
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [country, setCountry] = useState('');
  // const [data,setData]=useState("");




 

  const handleSubmit = async (event) => {
    event.preventDefault();
    // const { city, state, country } = req.query; // Get city, state, and country from query parameters

  // Replace with your actual API key
  const apiKey = '7980e5764a2f6ae7be4f5ac31e76831a';

  // 1. Fetch coordinates using Geocoding API
  try {
    const geocodingResponse = await axios.get(
      `http://api.openweathermap.org/geo/1.0/direct?q=${city},${state},${country}&limit=1&appid=${apiKey}`
    );

    const { lat, lon } = geocodingResponse.data[0]; // Get latitude and longitude

    // 2. Fetch weather data using Weather API
    const weatherResponse = await axios.get(
      `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}`
    );

    // console.log(weatherResponse)
    setData(weatherResponse.data) // Send weather data as JSON response
  } catch (error) {
    console.error(error);
    // res.status(500).json({ error: 'Failed to fetch weather data' }); // Handle errors
  }
    

    setModal(false);
  };


  return (
    <div>
      <Navbar></Navbar>

      <Hero setModal={setModal}></Hero>
      {data!=""&&<Details data={data}></Details>}

      <Modal setModal={setModal} show={modal}>
      <h2 className="text-2xl font-semibold mb-4">Enter Your City</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            placeholder="City"
            className="w-full px-4 py-2 mb-4 border rounded-lg"
            required
          />
          <input
            type="text"
            value={state}
            onChange={(e) => setState(e.target.value)}
            placeholder="State"
            className="w-full px-4 py-2 mb-4 border rounded-lg"
            required
          />
          <input
            type="text"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            placeholder="Country"
            className="w-full px-4 py-2 mb-4 border rounded-lg"
            required
          />
          <button
            type="submit"
            className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            Submit
          </button>
        </form>


        
      </Modal>
    </div>
  );
}
