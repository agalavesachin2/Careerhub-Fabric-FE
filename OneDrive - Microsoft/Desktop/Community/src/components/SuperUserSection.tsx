function SuperUserSection({ SubNavigationData }: { SubNavigationData: any }) {
  if (!SubNavigationData) return null;

  const { sectionTitle, description, ctaButtonText, ctaButtonLink, imageUrl } = SubNavigationData.superUserData;

  return (
    <div id="participate">
      <div className="participate">
        {/* Left: Text Content */}
        <div className="participate-content">
          <div className="participate-heading-subheading">
            <h2 className="how-to-participate">{sectionTitle}</h2>
            <p className="participate-description">{description}</p>
            {/* Button Wrapper */}
            {ctaButtonText && ctaButtonLink && (
              <div>  
                <a href={ctaButtonLink} className="get-started" aria-label="Get Started">
                  <span className="get-started-text">{ctaButtonText}</span>
                  <img src="/html/assets/careerhubnew_Vector.png" alt="External Link" style={{ marginLeft: '8px' }} />
                </a>
              </div>
            )}
          </div>
        </div>

        {/* Right: Image Section */}
        <div className="participate-image" style={{ backgroundImage: `url(${imageUrl})` }}></div>
      </div>
    </div>
  );
}

export default SuperUserSection;
