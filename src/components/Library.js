import Quote from "./Affirmation";
import Verse from "./Verse";
import "./Home.scss";

import pageBillboard from '../morning-landscape.jpg'

const Library = (props) => {
  return (
    <>
      <div className="page-billboard" style={{backgroundImage: `url(${pageBillboard})`}}></div>
      <h2 className="section-title">Library</h2>
      
  </>
  );
};

export default Library;
