
import { ReactDOM } from 'react';
import './Home.css';
import React, { useState, useEffect } from "react";
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Contact from './pages/Contact';

function Home() {
  const info= document.getElementById("searchInput");

 
  const url =`https://api.dictionary.dev/api/v2/enttries/en/${info}`;
  const [data, setData] = useState([]);

  const fetchInfo = () => {
    return fetch(url)
      .then((res) => res.json())
      .then((d) => setData(d))
      .catch(err=>console.log(err))
  }


  useEffect(() => {
    fetchInfo();
  }, []);
  // console.log(data);
  return (
    <>
    <div className="home">
      <Navbar/>
      <body>
        <div className='middle'>
          <form>
            <input id="searchInput"  type='textfield' pattern="[a-zA-Z]+" maxLength={100}required />
            <input className="search"  type="button" value="Search" />
         </form> 
        </div>
      </body>
      <Footer/>
    </div>
    </>
  );
}

export default Home;
