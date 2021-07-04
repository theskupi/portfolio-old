import React from 'react';

const GridCard = ({ pageData, imgUrl }) => {
  return (
    <div className="websitesCol">
      <div className="photo-container" style={{ backgroundImage: `url(${imgUrl && imgUrl.node.publicURL})` }}></div>

      <a href={pageData.url} target="_blank" rel="noreferrer" className="slide">
        {pageData.name}
      </a>
    </div>
  );
};

export default GridCard;
