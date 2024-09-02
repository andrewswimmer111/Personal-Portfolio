import Intro from "../components/Intro";
import Header from "../components/Header";
import Projects from "../components/Projects";
import Hline from "../components/Hline";

const Home: React.FC = () => {
    return (
        <>
            <Header/>
            <Intro/>
            <Hline/>
            <Projects/>
        </>
    );
};

export default Home;