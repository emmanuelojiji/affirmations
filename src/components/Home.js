import Quote from "./Affirmation";
import Verse from "./Verse";
import "./Home.scss";
import NightBackground from "../landscape-night.gif";
import DayBackground from "../morning-landscape.jpg";

const Home = ({ showReligiousVerse, greeting}) => {

  console.log(greeting);
  
  return (
    <>
      <div
        className="page-billboard"
        style={{backgroundImage: greeting == 'Good Evening' ? `url(${NightBackground})` : `url(${DayBackground})`}}
      ></div>
      <h2 className="section-heading">Today</h2>
      <div class="quote-verse-wrap">
        <Quote backgroundColor="#42ccc9" />
        {showReligiousVerse && <Verse backgroundColor="#4fa7d3" />}
      </div>
    </>
  );
};

export default Home;
