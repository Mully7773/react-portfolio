const About = () => {
    return ( 
<div className="container col-xxl-8 px-4 py-5" id="about-me">
    <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
      <div className="col-lg-6">
        <h1 className="display-5 fw-bold lh-1 mb-3">About Me</h1>
        <p className="lead">Hello and thank you for visiting my webpage. I am training to become a full-stack web developer. I am
          enthusiastic about coding and I constantly strive to learn new technologies and implement them in my work.</p>
        <div className="d-grid gap-2 d-md-flex justify-content-md-start">
        </div>
      </div>
      <div className="col-10 col-sm-8 col-lg-6">
        <img src={`${process.env.PUBLIC_URL}/assets/joanna-kosinska-bF2vsubyHcQ-unsplash.jpg`} className="d-block mx-lg-auto img-fluid img-thumbnail rounded" alt="Picture of desk"
          width="300" height="200" loading="lazy" />
      </div>
    </div>
  </div>

     );
}
 
export default About;