import React from 'react';

const Experience = () => {
  return (
    <div className="experience">
      <div className="details-container">
        <div className="details-container__vertical-bar"></div>

        <div className="details">
          <div className="details--left">
            <h3 className="heading-job">GIS Coordinator</h3>
            <h3 className="heading-year">May 2014 - June 2020</h3>
            <h3 className="heading-address">Everett MA</h3>
          </div>

          <span className="details__dot">&bull;</span>

          <div className="details--right">
            <h3 className="heading-company">
              City of Everett, Department of Planning and Dev.
            </h3>
            <p className="paragraph paragraph--description">
              Provided in-house GIS expertise for a medium-sized urban
              municipality. Collected, created, updated and managed geospatial
              data for city departments. Maintained{" "}
              <a
                href="https://everettma.maps.arcgis.com/home/index.html"
                className="outside-link"
                rel="noopener noreferrer"
                target="_blank"
              >
                Online Maps and Apps
              </a>{" "}
              portal, prepared clear and engaging city maps, designed
              custom-tailored web maps. Fulfilled internal and external geodata
              and mapping requests. Assisted coworkers with varying technical
              skills on how to use GIS tools and interpret GIS data.
              <p className="paragraph paragraph--description">
                Non-GIS Planning Projects: awarded and completed a $12,000{" "}
                <a
                  href="https://www.sec.state.ma.us/mhc/mhcspg/spg-recipients.htm"
                  className="outside-link"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  MHC Historical Survey & Planning Grant FY2017
                </a>
                ; facilitated Open Space Initiatives with MAPC:{" "}
                <a
                  href="https://carolynl.net/2018/10/09/everett-earthworks-a-ripple-effect/"
                  className="outside-link"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Everett Earthworks: A Ripple Effect
                </a>{" "}
                and{" "}
                <a
                  href="https://everettindependent.com/2019/11/08/a-conservationist-before-conservation-was-cool/"
                  className="outside-link"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Jon Norton
                </a>{" "}
                <a
                  href="https://everettindependent.com/2019/11/08/rain-garden-goes-from-paper-to-purpose-on-wyllis-avenue/"
                  className="outside-link"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Community
                </a>{" "}
                <a
                  href="https://carolynl.net/2019/06/17/muddle-the-puddle-transforming/"
                  className="outside-link"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Rain Garden
                </a>.
              </p>
            </p>
          </div>

          <div className="details--left">
            <h3 className="heading-job">Staff Administrator</h3>
            <h3 className="heading-year">July 2018 - June 2020</h3>
            <h3 className="heading-address">Everett MA</h3>
          </div>

          <span className="details__dot">&bull;</span>

          <div className="details--right">
            <h3 className="heading-company">
              City of Everett, Everett Cultural Council
            </h3>
            <p className="paragraph paragraph--description">
              Reconvened and administratively supported the{" "}
              <a
                href="https://www.facebook.com/EverettCulturalCouncil/"
                className="outside-link"
                rel="noopener noreferrer"
                target="_blank"
              >
                Everett Cultural Council
              </a>
              . Recruited and onboarded new members, organized and facilitated
              meetings in accordance with Open Meeting Law, maintained financial
              records and processed reimbursements for over $20,000 in grant
              funding annually. In collaboration with the Communications
              Department, created the City Hall Art Gallery and held three art
              exhibits. Awarded a{" "}
              <a
                href="https://everettindependent.com/2020/02/13/everett-citizens-foundation-announces-grant-awards/"
                className="outside-link"
                rel="noopener noreferrer"
                target="_blank"
              >
                $4,446 Grant
              </a>{" "}
              from the{" "}
              <a
                href="http://www.cityofeverett.com/719/The-Everett-Citizens-Foundation"
                className="outside-link"
                rel="noopener noreferrer"
                target="_blank"
              >
                Everett Citizens Foundation
              </a>{" "}
              on behalf of the Cultural Council.
            </p>
          </div>

          <div className="details--left">
            <h3 className="heading-job">GIS Intern</h3>
            <h3 className="heading-year">September 2011 - March 2014</h3>
            <h3 className="heading-address">Dedham MA</h3>
          </div>

          <span className="details__dot">&bull;</span>

          <div className="details--right">
            <h3 className="heading-company">
              Town of Dedham, Department of Infrastructure Engineering
            </h3>
            <p className="paragraph paragraph--description">
              Performed geospatial data creation and maintenance, cartographic
              production and application development under the mentorship of GIS
              Manager. Carried out updates for various data layers including
              parking, trash/recycling routes, street signs and open space.
              Other duties included GPS field work and fulfilling GIS requests
              for the Engineering Department and other town departments.
            </p>
          </div>

          <div className="details--left">
            <h3 className="heading-job">Graduate Teaching Assistant</h3>
            <h3 className="heading-year">August 2009 - May 2011</h3>
            <h3 className="heading-address">Syracuse NY</h3>
          </div>

          <span className="details__dot">&bull;</span>

          <div className="details--right">
            <h3 className="heading-company">
              Syracuse University, Maxwell School
            </h3>
            <p className="paragraph paragraph--description">
              Responsible for the computer laboratory component of an upper
              level introductory GIS course; independently taught weekly
              laboratory sections and graded student work. Assisted students
              with completion of final projects in a diverse array of
              disciplines, encompassing humanities, social and physical
              sciences.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Experience;