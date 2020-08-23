import React from 'react';

const Publications = () => {
  return (
    <div className="publications">
      <div className="publications__item">
        Gao, P. and Josefson, M. (2012).{" "}
        <a
          href="https://www.sciencedirect.com/science/article/abs/pii/S0169555X11006015"
          className="outside-link"
          rel="noopener noreferrer"
          target="_blank"
        >
          Event-based suspended sediment dynamics in a central New York
          watershed
        </a>
        . Geomorphology, 139-140, 425-437.
      </div>

      <div className="publications__item">
        Gao, P. and Josefson, M. (2012){" "}
        <a
          href="https://www.sciencedirect.com/science/article/abs/pii/S0022169412000558"
          className="outside-link"
          rel="noopener noreferrer"
          target="_blank"
        >
          Temporal variations of suspended sediment transport in Oneida Creek
          watershed, Central New York
        </a>
        . Journal of Hydrology, 426-427, 17-27.
      </div>

      <div className="publications__item">
        Gao, P., Borah, D., and Josefson, M. (2013). <a
          href="https://www.jstor.org/stable/26203384"
          
          className="outside-link"
          rel="noopener noreferrer"
          target="_blank"
        >
          Evaluation of the storm event model DWSM on a medium-sized watershed
          in Central New York, USA
        </a>. Journal of Urban and Environmental Engineering, 7(1), 1-7.
      </div>
    </div>
  );
}

export default Publications;