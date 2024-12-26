import ExtraCardImg from "./ExtraCardImg";
import ExtraCard from "./ExtraCard";

const Extracurriculars:React.FC = () => {

    const extraImg = [
        {
            title: "Varsity Athlete ",
            description: `As a D1 swimmer at Duke, I dedicate a lot of my time to improving in the pool. My experiences have taught me the power of resilience and hard work, and have given me the desire for personal growth in my daily life.  I hope to carry this commitment to improvement into the future, always striving to become the best version of myself that I can be. <br/><br/> Swimming has taught me many lessons, and in order to give back to the sport, I’ve served as a private swim coach for the past three summers. It’s incredibly rewarding to see my students develop and find joy through the sport of swimming.`,
            imageURLs: ["/images/butterfly.JPG", "/images/backstroke.JPG", "/images/breaststroke.JPG"],
            link: "https://goduke.com/sports/swimming-and-diving/roster/andrew-li/21496"
        }
    ]

    const extra = [
        {
            title: "Teaching Assistant",
            description: `When I’m excited about something, I want others to feel that excitement too. That’s why I work as a TA for CS101—so I share my passion for programming with students. Whether it’s during lab sessions or office hours, I strive to provide clear explanations that help students build confidence in the material.`,
            link: ""
        },        
        {
            title: "Student Developer Intern ",
            description: `As a Student Developer Intern for Duke OIT, I enhance and expand the Community Capital website by implementing upgrades to improve its functionality. I also collaborate with community leaders from various counties to broaden the website's scope and impact.`,
            link: "https://codeplus.duke.edu/project/visualizing-assets-public-school-communities-durham/"
        },
        {
            title: "ACE Participant ",
            description: `During Summer 2024, I was selected to join a week-long trip to Panama through the Rubenstein Student-Athlete Civic Engagement Program (ACE), leading a volleyball camp at a rural elementary school. The experience strengthened my leadership, collaboration, and global perspective.`,
            link: "https://ace.duke.edu/past-programs/ace-in-panama-2024/"
        },
        {
            title: "RAF Mentor ",
            description: `After reflecting on the ACE trip to Panama, my group of student-athletes is in the process of launching the Rising Athletes Foundation, an organization aimed at providing comprehensive support to high school athletes, enabling them to turn their athletic abilities into opportunities for higher education.`,
            link: "https://rafwebsite.pages.dev/"
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
                        link={extra.link}
                    />
                ))}
            </div>
            <div className="extra-grid">
                {extra.map((extras, index) => (
                    <ExtraCard
                        key={index}
                        title={extras.title}
                        description={extras.description}
                        link={extras.link}
                    />
                ))}
            </div>
        </div>
    )
}

export default Extracurriculars;