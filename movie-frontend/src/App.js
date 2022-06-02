import React, {useEffect, useState} from "react"
import './App.css';
import axios from "axios"
import BasicGrid from "./Component/MediaGrid";

function App() {
    const [ movies, setMovie ] = useState([])
    const fetchMovies = async ()=>{
        const response =await axios.get("http://localhost:5000/api")
        const {data} = response
	//set Movie
        setMovie(data)
    }
    useEffect(()=>{
        fetchMovies()
    }, [])
  return (
    <div>
        <BasicGrid movies={movies}/>
    </div>
  );
}

export default App;
