import ExtraCardImg from "./ExtraCardImg";
import ExtraCard from "./ExtraCard";

const Extracurriculars:React.FC = () => {

    const extraImg = [
        {
            title: "Varsity Athlete",
            description: `As a D1 swimmer at Duke, I dedicate a lot of my time to improving in the pool. My experiences have taught me the power of resilience and hard work, and have given me the desire for personal growth in my daily life.  I hope to carry this commitment to improvement into the future, always striving to become the best version of myself that I can be. <br/><br/> Swimming has taught me many lessons, and in order to give back to the sport, I’ve served as a private swim coach for the past three summers. It’s incredibly rewarding to see my students develop and find joy through the sport of swimming.`,
            imageURLs: ["/images/head.jpg", "/images/food.png"],
        }
    ]

    const extra = [
        {
            title: "Teaching Assistant",
            description: `When I’m excited about something, I want others to feel that excitement too. That’s why I work as a TA for CS101—so I can share my passion for programming with students. Whether it’s during lab sessions or office hours, I always strive to provide clear explanations that help students build confidence in the material. <br/> <br/> In addition to my role as a TA, I’m actively involved in several other mentorship positions on campus. For instance, I serve as a Blue Devil Buddy, where I provide guidance and support to an incoming first-year student.`,
        },
        {
            title: "ACE Participant",
            description: `During the summer of 2024, I was selected to join 11 other student-athletes on a one-week long trip to Panama, where we led a volleyball camp at a rural elementary school. The experience not only helped me grow my leadership and collaboration skills, but also gave me a fresh perspective on the world.  <br/><br/> After reflecting on the trip, our group of student-athletes is now in the process of launching the Rising Athletes Foundation, an organization aimed at providing comprehensive support to high school athletes, enabling them to turn their athletic abilities into opportunities for higher education.`,
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