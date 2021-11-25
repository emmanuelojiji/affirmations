import "./SoundCard.scss";

const SoundCard = ({ soundTitle, backgroundImage, color }) => {
  return (
    <div
      className="SoundCard"
      style={{ backgroundImage: `url("${backgroundImage}"` }}
    >
      <span>{soundTitle} <i class="fas fa-play-circle" style={{color: color }}></i></span>
    </div>
  );
};

export default SoundCard;
