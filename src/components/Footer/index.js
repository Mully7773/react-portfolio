import "./style.css"
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";


const Footer = () => {
    return (
        <footer className="text-center">
            <a href="https://github.com/Mully7773" target="_blank" className="btn" rel="noreferrer">
                <FaGithub size={30} /></a>
            <a href="https://www.linkedin.com/in/nick-mullenmeister-b7a62078" target="_blank" className="btn" rel="noreferrer">
                <FaLinkedin size={30} /></a>
            <a href="mailto:mully7773@gmail.com" target="_blank" className="btn" rel="noreferrer">
                <FaEnvelope size={30} /></a>

            <p>Copyright © Nick Mullenmeister | My React Portfolio</p>
        </footer>
    )
}

export default Footer