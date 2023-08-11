import React from 'react'
import { Link } from 'react-router-dom'
import homeimg from "../images/home-img.jpg"
import "../styles/home.css"

function Home() {

  return (
    <div className="home">
      <div className="home-container">
        <div className="home-text">
          <div className="home-content">
            <p>In this season, find the best 🔥</p>
            <h1>Exclusive collection for everyone</h1>
            <p>Discover more.<span>Good things are waiting for you</span></p>
          </div>
        </div>
        <div className="home-image">
          <img src={homeimg} alt="Exclusive collection for everyone" />
        </div>

      </div>
    </div>
  )
}

export default Home