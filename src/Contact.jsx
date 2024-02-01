import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

export const Contact = () => {
  return (
    <div className="col-md-6 d-flex align-items-center m-auto  justify-content-center"> {/* Added d-flex and centering classes */}
      <div className="text-center">
        <div className="title-box-2 pt-4 pt-md-0">
          <h1 className="title-left">Get in Touch</h1>
        </div>
        <div className="more-info">
          <p className="lead">
            Whether you want to get in touch, talk about a project collaboration, or just say hi, I'd love to hear from you.
            <br />
            Here are my Socials:
          </p>
        </div>
        <div className="fw-medium">
          <FontAwesomeIcon icon={faFacebook} style={{ color: "#212121" }} />
          <FontAwesomeIcon icon={faGithub} style={{ color: "#212121" }} />
          <FontAwesomeIcon icon={faLinkedin} style={{ color: "#212121" }} />
        </div>
      </div>
    </div>
  );
};

