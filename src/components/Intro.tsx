const Intro: React.FC = () => {
    return (
        <div id="About" className="intro-container">
            <div className="intro-photo-container">
                <img src="/images/head.JPG" className="profile-picture" alt="Profile Picture"></img>
            </div>
            <div className="intro-text"> 
                <h1> Andrew Li </h1>
                <h3>
                    I’m a junior student-athlete at Duke University majoring in computer science. 
                    I’m open to exploring all areas within the tech field where I can learn and grow. 
                    I love personal development, so I’m always looking for opportunities to take on new challenges and expand my skills!
                </h3>
            </div>
        </div>
    )
}

export default Intro;