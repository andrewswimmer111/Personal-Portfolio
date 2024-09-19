import ExtraCardImg from "./ExtraCardImg";
import ExtraCard from "./ExtraCard";

const Extracurriculars:React.FC = () => {

    const extraImg = [
        {
            title: "Testing",
            description: "I'm testing right now",
            imageURLs: ["/images/head.jpg", "/images/food.png"],
        }
    ]

    const extra = [
        {
            title: "Testing",
            description: "I'm testing right now",
        },
        {
            title: "Testing",
            description: "I'm testing right now",
        },
        {
            title: "Testing",
            description: "I'm testing right now",
        }
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