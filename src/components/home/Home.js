import React from 'react'
import './home.css'
import HomeBg from '../../img/0001.png'
import Home1 from '../../img/1.png'
import Home2 from '../../img/2.png'
import Home3 from '../../img/3.png'
import Home4 from '../../img/4.png'
import Home5 from '../../img/5.png'
import Home6 from '../../img/6.png'
import Home7 from '../../img/7.png'

const Home = () => {
  return (
    <div>
      <div className="home-container">
        <img className='img-bg' src={HomeBg} alt="home bagroun foto" />
      </div>
      <div className="title-img-container">
        <div className="home-title">
          <h1>Message privately</h1>
          <h3>Simple, reliable, private messaging and calling for free*, available all over the world.</h3>
          <button>Dowload</button>
        </div>
        <div className="home-img">
          <img src={Home1} alt="" />
          <img src={Home2} alt="" />
          <img src={Home3} alt="" />
          <img src={Home4} alt="" />
          <img src={Home5} alt="" />
          <img src={Home6} alt="" />
          <img src={Home7} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Home