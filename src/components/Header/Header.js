import React from 'react';

const Header = () => {
  return (
    <div className="header">
      <div className="card">
        <div className="photo"></div>
        <div className="info">
          <h1 className="heading-1 margin-bottom-small">Maria Josefson</h1>
          <h3 className="heading-3 heading-3 margin-bottom-medium">GIS Professional</h3>

          <h3 className="heading-3">Skills:</h3>
          <p className="paragraph">ArcGIS Desktop/Pro</p>
          <p className="paragraph">ArcGIS Online</p>
          <p className="paragraph">JavaScript</p>
          <p className="paragraph">Python</p>
          <p className="paragraph">SQL</p>
          <p className="paragraph margin-bottom-medium">
            Microsoft Office Suite
          </p>

          <h3 className="heading-3">Email:</h3>
          <p className="paragraph margin-bottom-medium">
            Josefson.Maria@gmail.com
          </p>
          <h3 className="heading-3">Address:</h3>
          <p className="paragraph">Swampscott, MA</p>
        </div>
        <div className="bottom">
          {/* <div className="bar bar--left"></div>
          <div className="ball"></div>
          <div className="bar bar--right"></div> */}
        </div>
      </div>
    </div>
  );
}

export default Header;