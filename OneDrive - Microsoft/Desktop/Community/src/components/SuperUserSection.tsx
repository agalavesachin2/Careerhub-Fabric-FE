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
          {ctaButtonText && ctaButtonLink && (
            <a href={ctaButtonLink} className="get-started" target="_blank" aria-label="Get Started">
              <span className="get-started-text">{ctaButtonText}</span>
            </a>
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
