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


<section className='aboutSection'>
<h1 className='categoriesHeader'>About</h1>
<p className='aboutParagraph'>
DesignHerInc Custom Kreations, born from the visionary mind of Dianna Beaty in 2022, embodies the fusion of creativity and fabric, springing from a humble abode in Queens, New York. What began as a fervent dream has blossomed into an artistic venture, redefining fashion and individual expression.

Dianna, an artistic virtuoso, wielded her innate flair for clothing decoration, embellishing fabrics with rhinestones and intricate designs that left onlookers spellbound. Her initial showcases at college booths garnered immense fascination, swiftly transforming into a daily influx of orders.

Specializing in bespoke designs for Women, children, and Men, DesignHerInc has ignited a sartorial revolution. The allure of personalized apparel has captured the city's heart, ushering in an era of distinctive style. With each stitch, DesignHerInc crafts narratives woven into fabric, resonating with individuals seeking unique sartorial statements.

As our brand takes flight, painting the city in vibrant hues, DesignHerInc remains rooted in its digital abode, catering to customers nationwide. While our storefronts are in the making, our website stands as a beacon, offering nationwide delivery.

With a 14-day turnaround for custom orders, we invite you to join the DesignHerInc narrative, where fashion meets artistry, and every garment tells a tale. Embrace the personalized elegance that is uniquely yours, as DesignHerInc marches toward becoming a household name."

This excerpt aims to capture the essence of DesignHerInc, portraying its evolution from a dream to a burgeoning fashion entity, inviting customers to become part of its narrative while emphasizing the uniqueness and artistry embedded within each creation. Adjustments can be made to suit specific preferences or requirements.
</p>
</section>

<section className='videosSection'>
<h1 className='categoriesHeader'>Videos</h1>


<video className="homeVideo" width="95%" height="50%" loop="true" autoPlay muted>
  <source src="/newVideoThree.mp4" type="video/mp4"/>
  Your browser does not support the video tag
</video>

<video className="homeVideo" width="95%" height="50%" loop="true" controls>
  <source src="/newVideoTwo.mp4" type="video/mp4"/>
  Your browser does not support the video tag
</video>

<video className="homeVideo" width="95%" height="50%" loop="true" controls>
  <source src="/newVideoOne.mp4" type="video/mp4"/>
  Your browser does not support the video tag
</video>

</section>


    
        </React.Fragment>
  );
}

export default Home;
