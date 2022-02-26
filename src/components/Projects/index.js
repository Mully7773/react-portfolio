import './styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { FaGithub } from "react-icons/fa"


const Projects = () => {
    return ( 
        <div className="container" id="portfolio">
        <div className="row justify-description-center">
            <div className="col-xs-12 col-sm-12 col-lg-4 mb-4">
                <div className="card text-center h-100">
                    <div className="imageBox">
                        <img src={`${process.env.PUBLIC_URL}/assets/Resternal.jpg`} className="card-img-top border-bottom"
                            alt="Screenshot of project" />
                    </div>
                    <div className="card-body mb-5 pl-0">
                        <h3>Resternal</h3>
                        <p className="card-text">
                            A restaurant journal website
                        </p>
                        <p className="card-text">
                            <small>
                                Features: JavaScript, Node, Express
                            </small>
                        </p>

                        <div className="links w-100 py-3 pt-3 pl-0 position-absolute">
                            <a href="https://morning-island-13574.herokuapp.com/" target="_blank" className="btn mr-2" rel="noreferrer">
                                <i className="fas fa-laptop-code"></i></a>
                            <a href="https://github.com/Mully7773/Restaurant-Journal-Project-II" target="_blank" className="btn" rel="noreferrer">
                            <i class="fa-brands fa-github"></i></a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="col-xs-12 col-sm-12 col-lg-4 mb-4">
                <div className="card text-center h-100">
                    <div className="imageBox">
                        <img src={`${process.env.PUBLIC_URL}/assets/Note-Taker.jpg`} className="card-img-top border-bottom"
                            alt="Screenshot of Note Taker" />
                    </div>
                    <div className="card-body mb-5 pl-0">
                        <h3>Note Taker</h3>
                        <p className="card-text">
                            An app that allows you to store notes.
                        </p>
                        <p className="card-text">
                            <small>
                                Features: JavaScript, 
                        </small>
                        </p>
                        <div className="links w-100 py-3 pt-3 pl-0 position-absolute">
                            <a href="https://mighty-anchorage-28221.herokuapp.com/" target="_blank" className="btn mr-2" rel="noreferrer">
                                <i className="fas fa-laptop-code"></i></a>
                            <a href="https://github.com/Mully7773/Note-Taker" target="_blank" className="btn" rel="noreferrer">
                                <FaGithub/></a>
                        </div>
                    </div>
                </div>
            </div >

            <div className="col-xs-12 col-sm-12 col-lg-4 mb-4">
                <div className="card text-center h-100 pb-5">
                    <img src={`${process.env.PUBLIC_URL}/assets/Team-Generator.jpg`} className="card-img-top border-bottom"
                        alt="Screenshot of Team Generator" />
                    <div className="card-body mb-5 pl-0">
                        <h3>Team Profile Generator</h3>
                        <p className="card-text">
                            Generate a team for your workplace.
                        </p>
                        <p className="card-text">
                            <small>
                                Features: HTML, CSS, 
                            </small>
                        </p>
                        <div className="links w-100 py-3 pt-3 pl-0 position-absolute">
                            <a href="https://watch.screencastify.com/v/o6eHttpA2PThGAOTMNt1" className="btn mr-2" target="_blank" rel="noreferrer">
                            <i className="fa-solid fa-circle-video"></i></a>
                            <a href="https://github.com/Mully7773/Team-Profile-Generator" target="_blank" className="btn" rel="noreferrer">
                                <i className="fab fa-github"></i></a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="col-xs-12 col-sm-12 col-lg-4 mb-4">
                <div className="card text-center h-100">
                    <div className="imageBox">
                        <img src={`${process.env.PUBLIC_URL}/assets/Weather-Dashboard.jpg`} className="card-img-top border-bottom"
                            alt="Screenshot of Weather Dashboard" />
                    </div>
                    <div className="card-body mb-5 pl-0">
                        <h3>Weather Dashboard</h3>
                        <p className="card-text">
                            A weather dashboard that allows you to search for weather conditions.
                        </p>
                        <p className="card-text">
                            <small>
                                Features: JavaScript, CSS
                            </small>
                        </p>
                        <div className="links w-100 py-3 pt-3 pl-0 position-absolute">
                            <a href="https://mully7773.github.io/Weather-Dashboard/" target="_blank" className="btn mr-2" rel="noreferrer">
                                <i className="fas fa-laptop-code"></i></a>
                            <a href="https://github.com/Mully7773/Weather-Dashboard" target="_blank" className="btn" rel="noreferrer">
                                <i className="fab fa-github"></i></a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="col-xs-12 col-sm-12 col-lg-4 mb-4">
                <div className="card text-center h-100">
                    <div className="imageBox">
                        <img src={`${process.env.PUBLIC_URL}/assets/Work-Day.jpg`} className="card-img-top border-bottom"
                            alt="Screenshot of Work Day Scheduler" />
                    </div>
                    <div className="card-body mb-5 pl-0">
                        <h3>Work Day Scheduler</h3>
                        <p className="card-text">
                            An app that allows you to schedule your work day.
                        </p>
                        <p className="card-text">
                            <small>
                                Features: HTML, CSS, 
                        </small>
                        </p>
                        <div className="links w-100 py-3 pt-3 pl-0 position-absolute">
                            <a href="https://mully7773.github.io/Calendar-Application/" target="_blank" className="btn mr-2" rel="noreferrer">
                                <i className="fas fa-laptop-code"></i></a>
                            <a href="https://github.com/Mully7773/Calendar-Application" target="_blank" className="btn" rel="noreferrer">
                                <i className="fab fa-github"></i></a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="col-xs-12 col-sm-12 col-lg-4 mb-4">
                <div className="card text-center h-100">
                    <div className="imageBox">
                        <img src={`${process.env.PUBLIC_URL}/assets/DND.jpg`} className="card-img-top border-bottom"
                            alt="Screenshot of DND Seekers" />
                    </div>
                    <div className="card-body mb-5 pl-0">
                        <h3>D&D Seekers</h3>
                        <p className="card-text">
                            A search application that allows you to find monter challenge ratings for Dungeons and Dragons.
                    </p>
                        <p className="card-text">
                            <small>
                                Features: HTML, CSS, JavaScript, jQuery, server-side APIs, Foundation
                        </small>
                        </p>
                        <div className="links w-100 py-3 pt-3 pl-0 position-absolute">
                            <a href="https://the-wake.github.io/project-1-dnd/" target="_blank" className="btn mr-2" rel="noreferrer">
                                <i className="fas fa-laptop-code"></i></a>
                            <a href="https://github.com/Mully7773/project-1-dnd" target="_blank" className="btn" rel="noreferrer">
                                <i className="fab fa-github"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
     );
}
 
export default Projects;