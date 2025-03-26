import { useBoolean } from "@fluentui/react-hooks";
import VideoPopup from "./VideoPopup";
import { scrollToSection } from "../assets/utils";

function HeroBanner({ HeroBannerData }: any) {
  console.log("HeroBannerData before rendering:", JSON.stringify(HeroBannerData, null, 2));

  const [isPopupVisible, { setTrue: showPopup, setFalse: hidePopup }] = useBoolean(false);

  // Array of image sources for different screen sizes
  const imageSources = [
    { srcSet: HeroBannerData.unauthBgImgURL320x120, media: "(min-width:320px) and (max-width:479px)" },
    { srcSet: HeroBannerData.unauthBgImgURL480x120, media: "(min-width:480px) and (max-width:629px)" },
    { srcSet: HeroBannerData.unauthBgImgURL640x140, media: "(min-width:630px) and (max-width:1023px)" },
    { srcSet: HeroBannerData.unauthBgImgURL1024x450, media: "(min-width:1024px) and (max-width:1389px)" },
    { srcSet: HeroBannerData.unauthBgImgURL1440x450, media: "(min-width:1390px) and (max-width:2050px)" },
    { srcSet: HeroBannerData.unauthBgImgURL1920x450, media: "(min-width:2051px)" }
  ];

  return (
    <div className="career-hub-hero-banner">
      <div className="ch-hero-banner">
        <div className="ch-hero-banner-wp">
          <picture>
            {imageSources.map(({ srcSet, media }, index) => (
              <source key={index} srcSet={srcSet} media={media} />
            ))}
            <img
              alt="Power BI user groups Hero banner"
              src={HeroBannerData.unauthBgImgURL1920x450}
            />
          </picture>

          <div className="ch-hero-banner-container">
            <div className="ch-hero-banner-content">
              <div className="ch-hero-text-wrapper">
                <p className="public_preview_text">{HeroBannerData.smallTitle}</p>
                <h1>{HeroBannerData.title}</h1>
                <p>{HeroBannerData.description}</p>

                <a
                  href="https://aka.ms/browsecontests"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ textDecoration: "none" }}
                >
                  <button
                    type="button"
                    role="button"
                    className="ch-hero-button"
                    data-bi-id="careerhub_herobanner_playvideo"
                    data-bi-name="Hero Banner Play Video"
                    data-bi-area="Career Hub Hero Banner"
                    onClick={showPopup}
                  >
                    {HeroBannerData.playVideoBtnText}
                    <img
                      alt="Play Button Icon"
                      src="/html/assets/ch_playbutton_icon.svg"
                      aria-hidden
                    />
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroBanner;
