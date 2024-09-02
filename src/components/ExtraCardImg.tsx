interface ExtraCardImgProps {
    title: string,
    description: string,
    imageURL: string,
}

const ExtraCardImg:React.FC<ExtraCardImgProps> = ( {title, description, imageURL}) => {
    return (
        <div className="extra-card-img">
            <div className="extra-image-container-img">
                <img src={imageURL} className="extra-image-img"></img>
            </div>
            <div className="extra-content-img">
                <div className="extra-title"> {title} </div>
                <div className="extra-body">{description}</div>
            </div>
        </div>
    )
}

export default ExtraCardImg;