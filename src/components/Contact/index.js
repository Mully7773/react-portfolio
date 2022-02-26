import React from 'react';



const Contact = () => {
    return (
        <div className="contact">
            <h1>Contact Me!</h1>

            <div className="social">
                <h4>LinkedIn</h4>
                <p>
                    <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/nick-mullenmeister-b7a62078">
                        LinkedIn
                </a>
                </p>

                <h4>GitHub</h4>
                <p>
                    <a target="_blank" rel="noopener noreferrer" href="https://github.com/Mully7773">
                        GitHub
                </a>
                </p>

                <h4>Email</h4>
                <p>
                    <a target="_blank" rel="noopener noreferrer" href="mailto:mully7773@gmail.com">
                        Email Me
                </a>
                </p>

                <h4>Phone</h4>
                <p>
                    <a target="_blank" rel="noopener noreferrer" href="tel:612-567-3542">
                    (612) 567-3542
                </a>
                </p>
            </div>
        </div>
    )
}

export default Contact;