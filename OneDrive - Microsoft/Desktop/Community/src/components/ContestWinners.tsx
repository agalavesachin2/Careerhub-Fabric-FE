import React from 'react';

function ContestWinners({ CustomCardData }: { CustomCardData: any }) {
  if (!CustomCardData) {
    return <div className="no-winners">No winners data available.</div>;
  }

  const { CJHeading, CJSubHeading, ContestWinnersData } = CustomCardData;

  const renderWinnerCard = (winner: any) => (
    <>
    <div
      key={winner.key}
      // href={winner.btnLink}
     // target={winner.openLinkInNewTab === "yes" ? "_blank" : "_self"}
      rel="noopener noreferrer"
      className="content-layout"
    >
      {/* Graphic Section */}
      <div className="graphic">
        <img src={winner.img} alt={winner.name} />
      </div>
  
      {/* Text Section */}
      <div className="text">
        {/* Winner/Project Name */}
        <div className="frame-2018777074">
          <h3 className='contest-winners-text'>{winner.name}</h3>
          <p style={{paddingBottom: '24px'}}>{winner.description}</p>
        </div>
  
      {/* Button Section */}
          <a href={winner.btnLink} rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit' }}>
            <div className="vector-button-text" style={{ alignItems: 'center', cursor: 'pointer' }}>
              <span>{winner.btnText}</span>
              <img src="/html/assets/careerhubnew_Vector.png" alt="External Link" style={{ marginLeft: '8px' }} />
            </div>
          </a>
      </div>
    </div>
    </>
  );
  
  return (
    <div id='winners'>
    <div className="contest-winners-section">
      {/* Header Section */}
      <div className="heading-subheading">
        <h2 className='heading'>{CJHeading}</h2>
        <p className='subheading'>{CJSubHeading}</p>
      </div>
  
      {/* Winners Grid */}
      <div className="content-row">
        {ContestWinnersData.map((winner: any) => renderWinnerCard(winner))}
      </div>
    </div>
    </div>
  );
  
  
}

export default ContestWinners;
