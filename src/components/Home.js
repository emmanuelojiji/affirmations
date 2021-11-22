import Quote from "./Quote";
import Verse from "./Verse";
import "./Home.scss";

const Home = (props) => {
  return (
    <section className="Home">
      <div className="landscape"></div>
      <div class="quote-verse-wrap">
        <Quote backgroundColor="#42ccc9" />
        <Verse backgroundColor="#4fa7d3" />
      </div>
    </section>
  );
};

export default Home;
