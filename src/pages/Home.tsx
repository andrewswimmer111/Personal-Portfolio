import Intro from "../components/Intro";
import Header from "../components/Header";
import Projects from "../components/Projects";
import Hline from "../components/Hline";
import Extracurriculars from "../components/Extracurriculars";
import Skills from "../components/Skills";

const Home: React.FC = () => {
    return (
        <>
            <Header/>
            <Intro/>
            <Hline/>
            <Projects/>
            <Hline/>
            <Extracurriculars/>
            <Hline/>
            <Skills/>
        </>
    );
};

export default Home;