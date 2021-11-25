import "./SoundCard.scss";

const SoundCard = ({ soundTitle, backgroundImage }) => {
  return (
    <div
      className="SoundCard"
      style={{ backgroundImage: `url("${backgroundImage}"` }}
    >
      <span>{soundTitle}</span>
    </div>
  );
};

export default SoundCard;
