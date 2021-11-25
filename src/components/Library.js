import Quote from "./Affirmation";
import Verse from "./Verse";
import "./Library.scss";

import pageBillboard from "../morning-landscape.jpg";
import SoundCard from "./SoundCard";

import OceanIcon from '../ocean-icon.PNG'
import RainIcon from '../rain-icon.PNG'
import FireplaceIcon from '../fireplace-icon.PNG'
import ThunderIcon from '../thunder-icon.PNG'

const Library = () => {
  return (
    <>
      <div
        className="page-billboard"
        style={{ backgroundImage: `url(${pageBillboard})` }}
      ></div>
      <h2 className="section-heading">Library</h2>
      <h3 className="section-sub-heading">SOUNDS</h3>
      <div className="sound-row">
        <SoundCard soundTitle="Rain" backgroundImage={RainIcon}/>
        <SoundCard soundTitle="Ocean" backgroundImage={OceanIcon}/>
        <SoundCard soundTitle="Fireplace" backgroundImage={FireplaceIcon}/>
        <SoundCard soundTitle="Thunder" backgroundImage={ThunderIcon} />
        <SoundCard soundTitle="Waterfall" />
        <SoundCard soundTitle="Title" />
        <SoundCard soundTitle="Title" />
        <SoundCard soundTitle="Title" />
      </div>

      <div className="player">
        <h1>Hey</h1>
      </div>
    </>
  );
};

export default Library;
