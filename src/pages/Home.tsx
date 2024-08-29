import Intro from "../components/Intro";
import Header from "../components/Header";
import Projects from "../components/Projects";

const Home: React.FC = () => {
    return (
        <>
            <Header/>
            <Intro/>
            <Projects/>
        </>
    );
};

export default Home;