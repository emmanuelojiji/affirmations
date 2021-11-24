import Quote from "./Affirmation";
import Verse from "./Verse";
import "./Library.scss";


import pageBillboard from "../morning-landscape.jpg";
import SoundCard from "./SoundCard";

const Library = ({soundTitle}) => {
  return (
    <>
      <div
        className="page-billboard"
        style={{ backgroundImage: `url(${pageBillboard})` }}
      ></div>
      <h2 className="section-heading">Library</h2>
      <h3 className="section-sub-heading">SOUNDS</h3>
      <div className="sound-row">
        <SoundCard soundTitle='Rain'/>
        <SoundCard soundTitle='Ocean'/>
        <SoundCard  soundTitle='Fireplace'/>
        <SoundCard  soundTitle='Thunder'/>
        <SoundCard soundTitle='Waterfall'/>
        <SoundCard soundTitle='Title'/>
        <SoundCard soundTitle='Title'/>
        <SoundCard soundTitle='Title'/>
      </div>

      <div className="player">
        <h1>Hey</h1>
      </div>
    </>
  );
};

export default Library;
