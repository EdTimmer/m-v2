import React from 'react';

import resume from '../../images/Maria_Josefson_Resume.pdf';

const Footer = () => {
  return (
    <div className="footer">
      <a href={resume} rel="noopener noreferrer" target="_blank" className="footer__link">
        <div className="footer__btn">download resume</div>
      </a>
    </div>
  );
}

export default Footer;