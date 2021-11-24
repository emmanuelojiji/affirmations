import Quote from "./Affirmation";
import Verse from "./Verse";
import "./Home.scss";

import pageBillboard from "../morning-landscape.jpg";
import SoundCard from "./SoundCard";

const Library = (props) => {
  return (
    <>
      <div
        className="page-billboard"
        style={{ backgroundImage: `url(${pageBillboard})` }}
      ></div>
      <h2 className="section-heading">Library</h2>
      <h3 className="section-sub-heading">SOUNDS</h3>
      <div className="sound-row">
        <SoundCard />
        <SoundCard />
        <SoundCard />
        <SoundCard />
        <SoundCard />
        <SoundCard />
        <SoundCard />
        <SoundCard />
      </div>
    </>
  );
};

export default Library;
