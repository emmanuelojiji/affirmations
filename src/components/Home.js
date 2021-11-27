import Quote from "./Affirmation";
import Verse from "./Verse";
import "./Home.scss";
import pageBillboard from "../landscape-night.gif";

const Home = ({showReligiousVerse}) => {
  return (
    <>
      <div
        className="page-billboard"
        style={{ backgroundImage: `url(${pageBillboard})` }}
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
