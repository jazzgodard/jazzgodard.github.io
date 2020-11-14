/* eslint-disable max-len */
import React from 'react';

import Portfolio from '../Portfolio/Portfolio';
import MyNavbar from '../MyNavbar/MyNavbar';
import portfolioProjects from '../Portfolio/Portfolio.json';

import '../styles/scss/agency.scss';

// TODO: make theme responsive
function App() {
  return (
    <div id="App" className="App">
      <div id="modal"></div>
      <MyNavbar />

      <header className="masthead" id="masthead">
        <div className="container">
          <div className="intro-text">
            <div className="intro-lead-in">Marketing & Communications</div>
            <div className="intro-heading text-uppercase">JG Portfolio</div>
            <a className="btn btn-primary btn-xl text-uppercase js-scroll-trigger" href="#services">Tell Me More</a>
          </div>
        </div>
      </header>

      <section id="services">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <h2 className="section-heading text-uppercase">Services</h2>
              <h3 className="section-subheading text-muted">I provide a diverse range of digital marketing, internal communication, and event marketing services to meet client needs and provide results-driven success through innovative and effective solutions.</h3>
            </div>
          </div>
          <div className="row text-center justify-content-between">
            <div className="col-md-5">
              <span className="fa-stack fa-4x">
                <i className="fas fa-circle fa-stack-2x text-primary"></i>
                <i className="fas fa-copy fa-stack-1x fa-inverse"></i>
              </span>
              <h4 className="service-heading">Content + Copy</h4>
              <p className="text-justify text-muted">Press releases, internal comms, blogs, web copy, and more. Better engagement, succinct writing, and stronger leads. Content creation includes but is not limited to department workflows, client presentations, social media graphics, and digital ads.</p>
            </div>
            <div className="col-md-5">
              <span className="fa-stack fa-4x">
                <i className="fas fa-circle fa-stack-2x text-primary"></i>
                <i className="fas fa-laptop fa-stack-1x fa-inverse"></i>
              </span>
              <h4 className="service-heading">Social Media Management</h4>
              <p className="text-justify text-muted">Putting social media best practices into place and the best foot forward. Providing both editorial and content calendars to manage and grow a brand or business' following, reach, and leads.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-light" id="portfolio">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <h2 className="text-white section-heading text-uppercase">Portfolio</h2>
            </div>
          </div>
          <div className="row">
            <div className="Portfolio row">
              {portfolioProjects.map((project) => <Portfolio
                  key={project.client}
                  project={project}
                />)}
            </div>
          </div>
        </div>
      </section>

      <footer id="footer">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <span className="copyright">&copy; 2020 Godard Copywriting</span>
            </div>
            <div className="col-md-4">
              <ul className="list-inline social-buttons">
                <li className="list-inline-item">
                  <a href="mailto:jazzgodard@gmail.com">
                    <i className="far fa-envelope"></i>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="https://www.linkedin.com/in/jazz-godard-49809494/">
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                </li>
              </ul>
            </div>

          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
