import { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";

interface ExtraCardImgProps {
    title: string,
    description: string,
    imageURLs: string[],
    link: string,
}

const ExtraCardImg:React.FC<ExtraCardImgProps> = ( {title, description, imageURLs, link}) => {

    let startIndex = Math.floor(Math.random() * imageURLs.length)
    const [index, setIndex] = useState(startIndex);
    const intervalRef = useRef<number | null>(null);

    const startInterval = () => {
        intervalRef.current = window.setInterval(() => {
            setIndex((prevIndex) => (prevIndex === imageURLs.length - 1 ? 0 : prevIndex + 1));
        }, 7000); // 7 seconds
    };
    
    useEffect(() => {
        const preloadImages = () => {
            imageURLs.forEach((url) => {
                const img = new Image();
                img.src = url;
            });
        };
        preloadImages();
    }, []); 

    useEffect(() => {
        startInterval();
        return () => clearInterval(intervalRef.current!);
    }, []); 

    const handleImageClick = () => {
        setIndex((prevIndex) => (prevIndex === imageURLs.length - 1 ? 0 : prevIndex + 1));
        clearInterval(intervalRef.current!);
        startInterval();
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
            {
                link === "" ? 
                <div className="extra-title-img"> {title} </div> :
                <a href={link} 
                    className="extra-title-img" 
                    target="_blank" 
                    rel="noopener noreferrer"
                > 
                    {title} 
                    <FontAwesomeIcon icon={faExternalLinkAlt} style={{ fontSize: "0.6em", marginBottom: "0.1em"}}/> 
                </a> 
            }
                <div className="extra-body" dangerouslySetInnerHTML={{ __html: description }}></div>
            </div>
        </div>
    )
}

export default ExtraCardImg;