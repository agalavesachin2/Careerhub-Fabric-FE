import StickyNav from "../components/StickyNav";
import BringingOpportunity from "../components/bringing-oppurtunity/BringingOpportunity";
import HeroBanner from "../components/HeroBanner";
import SuperUserSection  from "../components/SuperUserSection";
import ContestWinners from "../components/ContestWinners";
import FaqSection from "../components/FaqSection/FaqSection";
import PublicPreviewBanner from "../components/PublicPreviewBanner";
import {
  CHHeroBannerData,
  CHSuperUserData,
  CHCustomCardData,
  CHBringingOppurtunityCC,
} from "../assets/freemarkerVariables";
import { getJSONParsed, navItemsData, IOverflowData } from "../assets/utils";

// Parse Hero Banner Data (Hero banner data and bringingOppurtunity data are from same Json.(custom content))
const HeroBannerData = getJSONParsed(CHHeroBannerData);
// This superuserdata contains participate and faq data
const SuperUserData = getJSONParsed(CHSuperUserData);
const CustomCardData = getJSONParsed(CHCustomCardData);

const mainContentsList = [
  getJSONParsed(CHBringingOppurtunityCC),
];

const [
  BringingOppurtunityCC,
] = mainContentsList;
// Define nav items
const navItems: IOverflowData = { ...navItemsData };

const CareerHubAppNew = () => {
  return (
    <div>
      {HeroBannerData && <HeroBanner HeroBannerData={HeroBannerData.heroData} />}
      
      {/* Pass updated navItems to StickyNav */}
      {navItems && <StickyNav navItems={navItems} />}
      <div id="main">
        {SuperUserData && <SuperUserSection SubNavigationData={SuperUserData} />}
        {CustomCardData && <ContestWinners CustomCardData={CustomCardData} />}
        {BringingOppurtunityCC && (
          <BringingOpportunity
            BringingOppurtunityCC={BringingOppurtunityCC.getinspiredContent}
          />
        )}
        {SuperUserData && SuperUserData.faqs && (
          <FaqSection FaqData={{ faqs: SuperUserData.faqs }} />
        )}
      </div>
    </div>
  );
};

export default CareerHubAppNew;
