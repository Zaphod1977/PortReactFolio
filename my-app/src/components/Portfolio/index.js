import React from 'react';
import { capitalizeFirstLetter } from '../../utils/helpers';
import podcastImage from '../../assets/images/The vizit.jfif'
import movieJuice from '../../assets/images/movieJuice.jpg'
import STL_Happens from '../../assets/images/STL_Happens screenshot.PNG'
import weatherApp from '../../assets/images/weather resize.jpg'
import art_eclipse from '../../assets/images/art_eclipse.JPG'



function Portfolio(props) {
  return (
<section id="work" className="work">
  <h2 className="work-leftside">Portfolio</h2>
  <div className="work-rightside">
    <div className="container">
      <img src={art_eclipse} alt="" />
      <div className="pictextt">Placeolder</div>
    </div>
    <div className="btmw">
      <div>
        <a href="https://open.spotify.com/show/2ip0Ojn7AwzukeawerfPDE">
          <img src={podcastImage} alt="" />
          {/* style="width:13em ;height:7em;"> */}
          <div className="pictext">The Vizit</div>
        </a>
      </div>
      <div>
        <a
          href="https://agile-harbor-58683.herokuapp.com/"
          alt="STL_Happens app"
        >
          <img
            src={STL_Happens}
            alt="STL_Happens screenshot"
          />
          {/* style="width:13em ;height:7em;"> */}
          <div className="pictext">STL Happens</div>
        </a>
      </div>
    </div>
    <div className="btmw">
      <div>
        <a
          href="https://zaphod1977.github.io/Weather-Dashboard/"
          alt="weather app"
        >
          <img
            src={weatherApp}
            alt="webpage screengrab"
          />
          {/* style="width:13em ;height: 7em;"> */}
          <div className="pictext">Weather App</div>
        </a>
      </div>
      <div>
        <a href="https://amymgardiner.github.io/movieJuice/">
          <img src={movieJuice} alt="webpage screengrab" />
          {/* style="width:13em ;height:7em;"> */}
          <div className="pictext">movieJuice</div>
        </a>
      </div>
    </div>
  </div>
</section>

  );
}
export default Portfolio;
