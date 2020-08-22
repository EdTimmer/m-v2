import React from 'react';

const Separator = ({title}) => {
  return (
    <div className="separator">
      <h2 className="heading-2 separator__title">{title}</h2>
    </div>
  );
}

export default Separator;