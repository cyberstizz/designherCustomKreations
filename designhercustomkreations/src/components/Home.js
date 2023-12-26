import './Home.css';
import React from 'react';
import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookSquare, faInstagram, faTiktok } from '@fortawesome/free-brands-svg-icons';
import crocsOne from '../crocsOne.webp';
import crocsTwo from '../crocsTwo.webp';
import crocsThree from '../crocsThree.mp4';
import crocsFour from '../crocsFour.webp';
import crocsFive from '../crocsFive.webp';
import crocsSix from '../crocsSix.webp';
import crocsSeven from '../crocsSeven.webp';
import crocsEight from '../crocsEight.webp';
import crocsNine from '../crocsNine.webp';
import crocsTen from '../crocsTen.webp';
import crocsEleven from '../crocsEleven.webp';
import crocsTwelve from '../crocsTwelve.webp';
import crocsThirteen from '../crocsThirteen.heic';
import crocsFourteen from '../crocsFourteen.heic';
import crocsFifteen from '../crocsFifteen.heic';
import crocsSixteen from '../crocsSixteen.heic';
import crocsSeventeen from '../crocsSeventeen.heic';
import crocsEighteen from '../crocsEighteen.heic';




function Home() {

const slideShow = [crocsOne,
   crocsTwo,
   crocsThree,
   crocsFour, 
   crocsFive, 
   crocsSix, 
   crocsSeven, 
   crocsEight, 
   crocsNine, 
   crocsTen,
   crocsEleven,
   crocsTwelve,
   crocsThirteen,
   crocsFourteen,
   crocsFifteen,
   crocsSixteen,
   crocsSeventeen,
   crocsEighteen
  ]

  const iconStyle = {
    fontSize: '120px', // Set the desired font size for the icon
    color: '#FF0000', // Set the desired color for the icon
    height: '70px', // Set the height (adjust as needed)
    width: '70px', // Set the width (adjust as needed)
    display: 'inline-flex', // Ensure icons align properly
    alignItems: 'center', // Align content vertically
    justifyContent: 'center', // Align content horizontally
  };


  const [currentNumber, setCurrentNumber] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentNumber((prevNumber) =>
        prevNumber === slideShow.length - 1 ? 0 : prevNumber + 1
      );
    }, 2000);

    return () => clearInterval(intervalId);
  }, [slideShow.length]);



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

<section className='slideShowSection'>
  <h1 className='slideShowText'>As seen on </h1>

  <a className='customIcon' href="https://www.facebook.com/yourPage" target="_blank" rel="noopener noreferrer" style={iconStyle}>
        <FontAwesomeIcon icon={faFacebookSquare} /> {/* Facebook Icon */}
      </a>

      <a className='customIcon' href="https://www.instagram.com/yourAccount" target="_blank" rel="noopener noreferrer" style={iconStyle}>
        <FontAwesomeIcon icon={faInstagram} /> {/* Instagram Icon */}
      </a>

      <a className='customIcon' href="https://www.tiktok.com/@yourUsername" target="_blank" rel="noopener noreferrer" style={iconStyle}>
        <FontAwesomeIcon icon={faTiktok} /> {/* TikTok Icon */}
      </a>

<img className='theSlideShow' src={slideShow[currentNumber]} alt="pic of crcocs"></img>
</section>

<section className='categoriesSection'>
<h1 className='categoriesHeader'>Categories</h1>

<div className='imageCard'></div>
<div className='imageCardTwo'></div>
<div className='imageCardThree'></div>


</section>


<section className='aboutSection'>
<h1 className='aboutHeader'>About</h1>
<p className='aboutParagraph'>
DesignHerInc Custom Kreations, born from the visionary mind of Dianna Beaty in 2022, embodies the fusion of creativity and fabric, springing from a humble abode in Queens, New York. 
<br />
<br />


What began as a fervent dream has blossomed into an artistic venture, redefining fashion and individual expression.

<br />
<br />


Dianna, an artistic virtuoso, wielded her innate flair for clothing decoration, embellishing fabrics with rhinestones and intricate designs that left onlookers spellbound. 
<br />
<br />



Her initial showcases at college booths garnered immense fascination, swiftly transforming into a daily influx of orders.

Specializing in bespoke designs for Women, children, and Men, DesignHerInc has ignited a sartorial revolution. 
<br />
<br />


The allure of personalized apparel has captured the city's heart, ushering in an era of distinctive style. With each stitch, DesignHerInc crafts narratives woven into fabric, resonating with individuals seeking unique sartorial statements.

<br />
<br />


As our brand takes flight, painting the city in vibrant hues, DesignHerInc remains rooted in its digital abode, catering to customers nationwide. 
<br />
<br />


While our storefronts are in the making, our website stands as a beacon, offering nationwide delivery.

With a 14-day turnaround for custom orders, we invite you to join the DesignHerInc narrative, where fashion meets artistry, and every garment tells a tale. Embrace the personalized elegance that is uniquely yours, as DesignHerInc marches toward becoming a household name."

This excerpt aims to capture the essence of DesignHerInc, portraying its evolution from a dream to a burgeoning fashion entity, inviting customers to become part of its narrative while emphasizing the uniqueness and artistry embedded within each creation. Adjustments can be made to suit specific preferences or requirements.
</p>
</section>

<section className='videosSection'>
<h1 className='videosHeader'>Videos</h1>


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
