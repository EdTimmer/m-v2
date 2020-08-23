import React from 'react';

const Education = () => {
  return (
    <div className="education">
      <div className="details-container">
          <div className="details-container__vertical-bar"></div>
          <div className="details">
            
            <div className="details--left">
              <h3 className="heading-job">
                Graduate Level Physical Geography Coursework
              </h3>
            </div>

            <span className="details__dot">&bull;</span>

            <div className="details--right">
              <h3 className="heading-company">Syracuse University</h3>
              <p className="paragraph paragraph--description">
                Sediment Transport, Quantitative Geographic Analysis,
                Environmental GIS, GIS-Based Modeling, Spatial Analysis, River
                Form and Function.
              </p>
            </div>

            <div className="details--left">
              <h3 className="heading-job">
                Graduate Level Computer Science Coursework
              </h3>
            </div>

            <span className="details__dot">&bull;</span>

            <div className="details--right">
              <h3 className="heading-company">
                Harvard University Extension School
              </h3>
              <p className="paragraph paragraph--description">
                Computer Science, Data Structures, Web Development, GIS,
                Biostatistics.
              </p>
            </div>

            <div className="details--left">
              <h3 className="heading-job">BA, Environmental Science</h3>
            </div>

            <span className="details__dot">&bull;</span>

            <div className="details--right">
              <h3 className="heading-company">Boston University</h3>
              <p className="paragraph paragraph--description">
                Biology, Chemistry, Environmental Sciences with labs; “Semester
                at Sea” at Marine Biological Laboratories.
              </p>
            </div>
          </div>
        
      </div>
    </div>
  );
}

export default Education;