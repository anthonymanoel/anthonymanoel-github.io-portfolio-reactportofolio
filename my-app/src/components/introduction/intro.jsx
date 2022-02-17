import "./intro.css"


const Intro = () => {
    return(
        <div className="h">
            <div className="container">
                <div className="navbar">
                    <div className="containerFluid">
                        <a id="n_logo" href="#">AM</a>
                        {/*Put the button span for responsive mode here*/}
                        <div className="nb-Nav">
                            <ul>
                                <li className="n-item">
                                    <a className="n-link" href="#">Resume</a>
                                </li>
                                <li className="n-item">
                                    <a className="n-link" href="#">Curriculum</a>
                                </li>
                                <li className="n-item">
                                    <a className="n-link" href="https://github.com/anthonymanoel?tab=repositories">Projects</a>
                                </li>
                                <li className="n-item">
                                    <a className="n-link" href="#">Contacts</a>
                                </li>
                            </ul>
                    </div>
                </div>
            </div>
            </div>
            <div>
                <div className="i-left">
                    <div className="i-left-wrapper">
                        <h2 className="i-intro">Hey, I'am</h2>
                        <h1 className="i-name">Anthony Manoel</h1>
                        <div className="i-title">
                        <div className="i-tile-wrapper">
                            <div className="i-tile-item">Web Developer</div>
                            <div className="i-tile-item">Front-End</div>
                            <div className="i-tile-item">Writter</div>
                            <div className="i-tile-item">Protographer
                            </div>
                        </div>
                        </div>
                        <div className="i-resume">I'm a front-end developer in Sorocaba, São Paulo - Brazil and also student. I enjoy creat things that live on the internet, whether that be websites and apps or anything like these things. I have been freelancing for a months now while studying at the web courses, and I've manage to gain a decent amount of experience and valuable knowledge from all different kinds of fields throughout my projects/work.</div>
                    </div>
                </div>
                <div className="i-right">

                </div>
            </div>
        </div>
    )
}

export default Intro