import ExtraCardImg from "./ExtraCardImg";
import ExtraCard from "./ExtraCard";

const Extracurriculars:React.FC = () => {

    const extraImg = [
        {
            title: "Testing",
            description: "I'm testing right now",
            imageURL: "/public/images/head.jpg",
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
        <div className="extra-section">
            <h1> Extracurriculars</h1>
            <div className="extra-grid">
                {extraImg.map((extra, index) => ( 
                    <ExtraCardImg
                        key={index}
                        title={extra.title}
                        description={extra.description}
                        imageURL={extra.imageURL}
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