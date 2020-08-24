import React from 'react';

const Header = () => {
  return (
    <div className="header">
      <div className="card">
        <div className="photo"></div>
        <div className="info">
          <div className="info__name">
            <h1 className="heading-1 margin-bottom-small">Maria Josefson</h1>
            <h3 className="heading-3 heading-3--spaced">
              GIS Professional
            </h3>
          </div>

          <div className="info__about">
            {/* <h3 className="heading-3--lowercase margin-bottom-small">
              About me:
            </h3> */}
            <div className="paragraph--large">
              I work with Geographic Information System (GIS) and have a passion
              for public service. I have 11 years of experience and find
              fullfillment in being able to deliver results while using latest available tools.
            </div>
          </div>

          <div className="info__email">
            <h3 className="email">Email:</h3>
            <p className="email__address">
              Josefson.Maria@gmail.com
            </p>
          </div>

          {/* <h3 className="heading-3--lowercase margin-bottom-small">Address:</h3>
          <p className="paragraph--large">Swampscott, MA</p> */}
        </div>
        {/* <div className="bottom">
        </div> */}
      </div>
    </div>
  );
}

export default Header;