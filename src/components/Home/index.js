const Home = () => {
    return ( <div className="container col-xxl-8 px-4 py-5" id="about-me">
    <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
      <div className="col-10 col-sm-8 col-lg-6">
        <img src={`${process.env.PUBLIC_URL}/assets/nick.jpg`} className="d-block mx-lg-auto img-fluid img-thumbnail rounded" alt="Picture of Nick"
          width="300" height="200" loading="lazy" />
      </div>
      <div className="col-lg-6">
        <h3 className="">Hi there! I'm</h3>
        <h1 className="display-5 fw-bold lh-1 mb-3">Nick Mullenmeister</h1>
        <div className="d-grid gap-2 d-md-flex justify-content-md-start">
          <h3>Full Stack Web Developer</h3>
        </div>
      </div>
    </div>
  </div> );
}
 
export default Home;