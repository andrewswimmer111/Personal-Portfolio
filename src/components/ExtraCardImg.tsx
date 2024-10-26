import { useState, useEffect, useRef } from "react";

interface ExtraCardImgProps {
    title: string,
    description: string,
    imageURLs: string[],
}

const ExtraCardImg:React.FC<ExtraCardImgProps> = ( {title, description, imageURLs}) => {

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
                <div className="extra-title"> {title} </div>
                <div className="extra-body" dangerouslySetInnerHTML={{ __html: description }}></div>
            </div>
        </div>
    )
}

export default ExtraCardImg;