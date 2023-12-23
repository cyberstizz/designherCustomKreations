import './Home.css';
import React from 'react';


function Home() {
  return (
    <React.Fragment>
<header className="mainHeader">

<div className='mainLogo' alt="designHerLogo" src="../public/Designher.jpg" > </div>
<form className='headerRightSide'>
    <input type='search' className='searchBar'></input>
    <div className='navigationBar'>
      <ul className='navigationBar'>
        <li>Jackets</li>
        <li>Crocs</li>
      </ul>
    </div>

    <div className='navigationBarTwo'>
       <ul className='navigationBar'> 
        <li>Sneakers</li>
        <li>Boots</li>
      </ul>
    </div>
</form>
</header>

<video className="homeVideo" width="100%" height="50%" loop="true" autoPlay muted>
  <source src="/output_video.mp4" type="video/mp4"/>
  Your browser does not support the video tag.projects/designherCustomKreations/designhercustomkreations/public/VID_158480824_122841_103.mp4
</video>

    
        </React.Fragment>
  );
}

export default Home;
