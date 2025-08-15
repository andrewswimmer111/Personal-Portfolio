import ExtraCardImg from "./ExtraCardImg";
import ExtraCard from "./ExtraCard";

const Extracurriculars:React.FC = () => {

    const extraImg = [
        {
            title: "Varsity Athlete ",
            description: `As a D1 swimmer at Duke, I dedicate a lot of my time to improving in the pool. I've learned the power of resilience and hard work, and therefore have gained the desire for personal growth in my daily life.  I hope to carry this commitment to improvement into the future, always striving to become the best version of myself that I can be. <br/><br/> Swimming has taught me many lessons, and in order to give back to the sport, I’ve worked as a private swim coach for the past four summers. It’s incredibly rewarding to see my students develop and find joy through the sport of swimming.`,
            imageURLs: ["/images/butterfly.JPG", "/images/backstroke.JPG", "/images/breaststroke.JPG"],
            link: "https://goduke.com/sports/swimming-and-diving/roster/andrew-li/21496"
        }
    ]

    const extra = [   
        {
            title: "Student Developer Intern ",
            description: `Since the 2024-2025 school year, I have been working for Duke OIT to enhance and expand the Community Capital website, collaborating with community leaders to broaden the website's scope and impact. I also presented my work at the 2025 National Community Schools and Family Engagement Conference.`,
            link: "https://codeplus.duke.edu/project/visualizing-assets-public-school-communities-durham/"
        },
        {
            title: "Student Researcher ",
            description: `During Summer 2025, as a part of Duke's CS+ program, I researched fingerprinting-based cookie respawning, a web tracking mechanism. A partner and I designed a novel methodology and conducted a large scale measurement study. We are writing a research paper, targeting submisison in Fall 2025.`,
            link: "https://cs.duke.edu/undergraduate/research/csplus"
        },
        {
            title: "ACE Participant ",
            description: `During Summer 2024, I was selected to join a week-long trip to Panama through the Rubenstein Student-Athlete Civic Engagement Program (ACE), leading a volleyball camp at a rural elementary school. The experience strengthened my leadership, collaboration, and global perspective.`,
            link: "https://ace.duke.edu/past-programs/ace-in-panama-2024/"
        },
        {
            title: "Teaching Assistant",
            description: `When I’m excited about something, I want others to feel the same. That’s why I worked as a TA for CS101—so I could share my passion for programming with students. Whether during lab sessions or office hours, I provided clear explanations that helped students build confidence in the material.`,
            link: ""
        },     
    ]
    return (
        <div id="Extracurriculars" className="extra-section  section-correction">
            <h1> Extracurriculars / Experiences</h1>
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