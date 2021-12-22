import React, { useState, useEffect } from "react";
import axios from "axios";
import './App.css';


const getUrl = "https://api.tvmaze.com/search/shows?q=all";

function App() {

  const [shows, setshows] = useState([]);

  useEffect(() => {
    axios
      .get(getUrl)
      .then((res) => {
        console.log(res);
        setshows(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <h1 className="heading">Movie Deatils</h1>
      
     
      {shows.map((item) => {
        return (
          <>
            
            <div className="details">
            
             
              <p>Movie Name: {item.show.name} </p>
              <p>Language: {item.show.language} </p>
              <p>Rating: {item.show.rating.average} </p>
              <p className="summary">Summary: {item.show.summary} </p>
              
              <button> Movie Deatils</button>
              
            </div>
          </>
        );
      })}
    </div>
  );
}
export default App;
