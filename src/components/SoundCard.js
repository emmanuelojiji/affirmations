import "./SoundCard.scss";

const SoundCard = ({ soundTitle, backgroundImage }) => {
  return (
    <div
      className="SoundCard"
      style={{ backgroundImage: `url("${backgroundImage}"` }}
    >
      <span>{soundTitle} <i class="fas fa-play-circle"></i></span>
    </div>
  );
};

export default SoundCard;
