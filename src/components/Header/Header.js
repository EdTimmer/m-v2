import React from 'react';

const Header = () => {
  return (
    <div className="header">
      <div className="card">
        <div className="photo"></div>
        <div className="info">
          <h1 className="heading-1 margin-bottom-small">Maria Josefson</h1>
          <h3 className="heading-3 heading-3 margin-bottom-medium">
            GIS Professional
          </h3>

          <h3 className="heading-3">Skills:</h3>
          <p className="paragraph paragraph--skills">ArcGIS Desktop/Pro</p>
          <p className="paragraph paragraph--skills">ArcGIS Online</p>
          <p className="paragraph paragraph--skills">JavaScript</p>
          <p className="paragraph paragraph--skills">Python</p>
          <p className="paragraph paragraph--skills">SQL</p>
          <p className="paragraph paragraph--skills margin-bottom-large">
            Microsoft Office Suite
          </p>

          <h3 className="heading-3">Email:</h3>
          <p className="paragraph margin-bottom-small">
            Josefson.Maria@gmail.com
          </p>
          <h3 className="heading-3">Address:</h3>
          <p className="paragraph">Swampscott, MA</p>
        </div>
        {/* <div className="bottom">
        </div> */}
      </div>
    </div>
  );
}

export default Header;