import { useState } from "react";

interface ExtraCardImgProps {
    title: string,
    description: string,
    imageURLs: string[],
}

const ExtraCardImg:React.FC<ExtraCardImgProps> = ( {title, description, imageURLs}) => {

    const [index, setIndex] = useState(0);
    
    const handleImageClick = () => {
        if (index === imageURLs.length - 1) {
            setIndex(0);
        }
        else {
            setIndex(index + 1);
        }
    }

    return (
        <div className="extra-card-img">
            <div className="extra-image-container" onClick={handleImageClick}>
                <img 
                    src={imageURLs[index]} 
                    className="extra-image" 
                ></img>
            </div>
            <div className="extra-content-img">
                <div className="extra-title"> {title} </div>
                <div className="extra-body">{description}</div>
            </div>
        </div>
    )
}

export default ExtraCardImg;