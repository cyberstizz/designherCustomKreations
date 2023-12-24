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
      <ul className='navUlTag'>
        <li className='firstNavItem'>Jackets</li>
        <li className='navItem'>Crocs</li>
      </ul>
    </div>

    <div className='navigationBarTwo'>
       <ul className='navUlTag'> 
        <li className='firstNavItem'>Sneakers</li>
        <li className='navItem'>Boots</li>
      </ul>
    </div>
</form>
</header>

<video className="homeVideo" width="100%" height="50%" loop="true" autoPlay muted>
  <source src="/output_video.mp4" type="video/mp4"/>
  Your browser does not support the video tag.projects/designherCustomKreations/designhercustomkreations/public/VID_158480824_122841_103.mp4
</video>

<section className='categoriesSection'>
<h1 className='categoriesHeader'>Categories</h1>

<div className='imageCard'></div>
<div className='imageCardTwo'></div>
<div className='imageCardThree'></div>


</section>


    
        </React.Fragment>
  );
}

export default Home;
