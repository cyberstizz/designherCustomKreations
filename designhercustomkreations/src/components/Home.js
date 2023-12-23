import './Home.css';
import React from 'react';


function Home() {
  return (
    <React.Fragment>
<header className="mainHeader">

<div className='mainLogo' alt="designHerLogo" src="../public/Designher.jpg" > </div>
<form className='headerRightSide'>
    <input type='search' className='searchBar'></input>
    <ul className='navigationBar'>
      <li>Jackets</li>
      <li>Crocs</li>
    </ul>

    <ul className='navigationBarTwo'>
      <li>Sneakers</li>
      <li>Boots</li>
    </ul>
</form>
</header>
    
        </React.Fragment>
  );
}

export default Home;
