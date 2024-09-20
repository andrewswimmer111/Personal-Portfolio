import ExtraCardImg from "./ExtraCardImg";
import ExtraCard from "./ExtraCard";

const Extracurriculars:React.FC = () => {

    const extraImg = [
        {
            title: "Varsity Athlete",
            description: `As a D1 swimmer at Duke, I dedicate a lot of my time to improving myself in the pool. My experiences have taught me the power of resilience and hard work, and have given me the desire for personal growth in my daily life as well. I hope to carry this commitment to improvement, along with the habits of dedication and perseverance, into my future life. <br/> <br/> Swimming has taught me many lessons and in order to give back to the sport, I’ve served as a private swim coach for the past three summers. It’s incredibly rewarding to see my students develop and find joy through the sport of swimming. `,
            imageURLs: ["/images/head.jpg", "/images/food.png"],
        }
    ]

    const extra = [
        {
            title: "Teaching Assistant",
            description: "I'm testing right now",
        },
        {
            title: "Testing",
            description: "I'm testing right now",
        },
    ]
    return (
        <div id="Extracurriculars" className="extra-section  section-correction">
            <h1> Extracurriculars</h1>
            <div className="extra-grid">
                {extraImg.map((extra, index) => ( 
                    <ExtraCardImg
                        key={index}
                        title={extra.title}
                        description={extra.description}
                        imageURLs={extra.imageURLs}
                    />
                ))}
            </div>
            <div className="extra-grid">
                {extra.map((extras, index) => (
                    <ExtraCard
                        key={index}
                        title={extras.title}
                        description={extras.description}
                    />
                ))}
            </div>
        </div>
    )
}

export default Extracurriculars;