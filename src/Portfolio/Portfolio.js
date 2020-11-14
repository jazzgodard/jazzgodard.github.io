/* eslint-disable import/no-dynamic-require */
/* eslint-disable global-require */
import React, { useState } from 'react';
import ModalPortal from '../Modal/ModalPortal';
import PortfolioModal from '../Modal/PortfolioModal';
import getImage from '../helpers/getImage';

export default function Portfolio({ project }) {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => { setIsOpen(!isOpen); };

  let imagePath = '';
  if (project.image) {
    imagePath = getImage(project.image);
  }

  return (
    <>
      <div className="col-md-4 col-sm-6 portfolio-item" key={project.client}>
        <div className="portfolio-link" data-toggle="modal" onClick={toggle}>
          <div className="portfolio-hover">
            <div className="portfolio-hover-content">
              <i className="fas fa-plus fa-3x"></i>
            </div>
          </div>
          <img className="img-fluid" src={imagePath} alt=""/>
        </div>
        <div className="portfolio-caption">
          <h4>{project.client}</h4>
          <p className="text-muted">{project.workType}</p>
        </div>
      </div>

      {isOpen && (
        <ModalPortal>
          <PortfolioModal
            isOpen={isOpen}
            toggle={toggle}
            project={project}
          />
        </ModalPortal>
      )}
    </>
  );
}
