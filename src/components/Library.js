import Quote from "./Affirmation";
import Verse from "./Verse";
import "./Library.scss";

import pageBillboard from "../morning-landscape.jpg";
import SoundCard from "./SoundCard";

import OceanIcon from "../ocean-icon.PNG";
import RainIcon from "../rain-icon.PNG";
import FireplaceIcon from "../fireplace-icon.jpg";
import WaterfallIcon from "../waterfall-icon.jpg";

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
          <SoundCard soundTitle="Rain" backgroundImage={RainIcon} color="#4ab0e0" />
          <SoundCard soundTitle="Ocean" backgroundImage={OceanIcon} color="#4ab0e0" />
          <SoundCard soundTitle="Fireplace" backgroundImage={FireplaceIcon} color="orange" />
          <SoundCard soundTitle="Sound" />
          <SoundCard soundTitle="Sound" />
          <SoundCard soundTitle="Sound" />
        </div>
      </div>

      <div className="player">
        <h1>Hey</h1>
      </div>
    </>
  );
};

export default Library;
