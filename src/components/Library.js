import Quote from "./Affirmation";
import Verse from "./Verse";
import "./Library.scss";

import pageBillboard from "../morning-landscape.jpg";
import SoundCard from "./SoundCard";

import OceanIcon from '../ocean-icon.webp'
import RainIcon from '../rain-icon.jpg'
import FireplaceIcon from '../fireplace-icon.jpg'
import WaterfallIcon from '../waterfall-icon.jpg'

const Library = () => {
  return (
    <>
      <div
        className="page-billboard"
        style={{ backgroundImage: `url(${pageBillboard})` }}
      ></div>
      <h2 className="section-heading">Library</h2>

      <div className="sub-section-row">
      <h3 className="section-sub-heading">SOUNDS</h3>
      <div className="sound-row">
        <SoundCard soundTitle="Rain" backgroundImage={RainIcon}/>
        <SoundCard soundTitle="Ocean" backgroundImage={OceanIcon}/>
        <SoundCard soundTitle="Fireplace" backgroundImage={FireplaceIcon}/>
        <SoundCard soundTitle="Waterfall"  backgroundImage={WaterfallIcon}/>
        <SoundCard soundTitle="Title" />
        <SoundCard soundTitle="Title" />
        </div>
      </div>

      <div className="player">
        <h1>Hey</h1>
      </div>
    </>
  );
};

export default Library;
