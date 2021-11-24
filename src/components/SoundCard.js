import './SoundCard.scss'

const SoundCard = ({soundTitle}) => {
    return(
        <div className="SoundCard">
            <img src="https://via.placeholder.com/70"/>
            <span>{soundTitle}</span>
        </div>
    )
}

export default SoundCard;