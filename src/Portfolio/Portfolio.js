/* eslint-disable import/no-dynamic-require */
/* eslint-disable global-require */
import React from 'react';
import portfolioProjects from './Portfolio.json';

class Portfolio extends React.Component {
  render() {
    const printPortfolios = portfolioProjects.map((project) => {
      let imagePath = '';
      if (project.image) {
        imagePath = require(`../img/portfolio/${project.image}`);
      }
      return <div className="col-md-4 col-sm-6 portfolio-item" key={project.client}>
          <a className="portfolio-link" data-toggle="modal" href={project.url}>
            <div className="portfolio-hover">
              <div className="portfolio-hover-content">
                <i className="fas fa-plus fa-3x"></i>
              </div>
            </div>
            <img className="img-fluid" src={imagePath} alt=""/>
          </a>
          <div className="portfolio-caption">
            <h4>{project.client}</h4>
            <p className="text-muted">{project.workType}</p>
          </div>
        </div>;
    });

    return (
      <div className="Portfolio row">
        { printPortfolios }
      </div>
    );
  }
}

export default Portfolio;
