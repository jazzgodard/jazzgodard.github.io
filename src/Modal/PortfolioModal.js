import React from 'react';
import {
  Button, Modal, ModalHeader, ModalBody,
} from 'reactstrap';
import getImage from '../helpers/getImage';

import './PortfolioModal.scss';

export default function PortfolioModal({
  isOpen, toggle, project, ...props
}) {
  const {
    client,
    workType,
    image,
    url,
    description,
    links,
  } = project;

  const buildLinkButtons = links.map((link) => {
    const handleBtn = () => {
      window.open(link.url);
    };
    return <Button className="btn btn-primary w-50 m-1" onClick={handleBtn}>{link.mediaType}</Button>;
  });

  // TODO: make fix images so that they are square and fit a max width
  return (
    <Modal isOpen={isOpen} toggle={toggle} className="PorfolioModal">
      <ModalHeader className="border-0" toggle={toggle}></ModalHeader>
      <ModalBody className="ModalBody">
        <a className="ModalPhoto" href={url} target="_blank" rel="noopener noreferrer">
          <img className="ModalImg" alt={`${client} logo`} src={getImage(image)} />
        </a>
        <div className="ModalDetails">
          <h3 className="border-primary m-1">{client}</h3>
          <h4 className="text-secondary m-1">{workType}</h4>
          <p className="m-1">{description}</p>
          <div className="d-flex flex-row row-wrap justify-content-left">
            { buildLinkButtons }
          </div>
        </div>
      </ModalBody>
    </Modal>
  );
}
