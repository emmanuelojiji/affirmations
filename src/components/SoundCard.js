import './SoundCard.scss'

const SoundCard = ({soundTitle, backgroundImage}) => {
    return(
        <div className="SoundCard">
            <div className="img-container" style={{backgroundImage: `url("${backgroundImage}"`}}></div>
        
            <span>{soundTitle}</span>
        </div>
    )
}

export default SoundCard;