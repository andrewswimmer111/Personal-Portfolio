import Intro from "../components/Intro";
import Header from "../components/Header";
import Projects from "../components/Projects";
import Extracurriculars from "../components/Extracurriculars";
import Skills from "../components/Skills";
import ContactMe from "../components/ContactMe";

const Home: React.FC = () => {
    return (
        <>
            <Header/>
            <Intro/>
            <hr></hr>            
            <Projects/>
            <hr></hr>           
            <Extracurriculars/>
            <hr></hr>
            <Skills/>
            <ContactMe/>
        </>
    );
};

export default Home;