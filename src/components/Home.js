import Quote from "./Affirmation";
import Verse from "./Verse";
import "./Home.scss";

const Home = (props) => {
  return (
    <section className="Home">
      <div className="landscape"></div>
      <h2 className="section-title">Yours</h2>
      <div class="quote-verse-wrap">
        <Quote backgroundColor="#42ccc9" />
        <Verse backgroundColor="#4fa7d3" />
      </div>
    </section>
  );
};

export default Home;
