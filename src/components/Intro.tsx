const Intro: React.FC = () => {
    return (
        <div className="intro-container">
            <img src="/public/images/head.JPG" className="profile-picture"></img>
            <div className="intro-text"> 
                <h1> Hi. I'm Andrew Li. </h1>
                <h3>
                    I’m a sophmore at Duke University majoring in computer science. I want to make peoples’ lives easier and 
                    more enjoyable using technology.  While I currently have a strong interest in software engineering, I’m 
                    also open to exploring other areas within the tech field where I can learn and grow. I love personal growth, 
                    so I’m always looking for opportunities to expand my skills and take on new challenges.
                </h3>
            </div>
        </div>
    )
}

export default Intro;