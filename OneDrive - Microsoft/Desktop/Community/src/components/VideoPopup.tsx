import {
  getTheme,
  mergeStyleSets,
  FontWeights,
  Modal,
  IconButton,
  IButtonStyles,
} from "@fluentui/react";

const VideoPopup = (props: any) => {
  const { hidePopup, youtubeURL, isModalOpen } = props;

  const url = new URL(youtubeURL);
  const searchParams = new URLSearchParams(url.search);
  const videoID = searchParams.get("v");
  const videoURL = `${url.origin}/embed/${videoID}?rel=0`;

  const theme = getTheme();

  const iconButtonStyles: Partial<IButtonStyles> = {
    root: {
      color: theme.palette.neutralPrimary,
      marginLeft: "auto",
      marginTop: "4px",
      marginRight: "2px",
    },
    rootHovered: {
      color: theme.palette.neutralDark,
    },
  };

  const contentStyles = mergeStyleSets({
    container: {
      display: "flex",
      flexFlow: "column nowrap",
      alignItems: "stretch",
      width: "100%",
    },
    header: [
      theme.fonts.xLargePlus,
      {
        flex: "1 1 auto",
        color: theme.palette.neutralPrimary,
        display: "flex",
        alignItems: "center",
        fontWeight: FontWeights.semibold,
      },
    ],
    heading: {
      color: theme.palette.neutralPrimary,
      fontWeight: FontWeights.semibold,
      fontSize: "inherit",
      margin: "0",
    },
    body: {
      flex: "4 4 auto",
      overflowY: "hidden",
    },
  });

  return (
    <Modal
      onDismiss={hidePopup}
      isBlocking
      isOpen={isModalOpen}
      containerClassName={contentStyles.container}
      className="video-modal"
    >
      <div className={contentStyles.header}>
        <IconButton
          styles={iconButtonStyles}
          iconProps={{ iconName: "Cancel" }}
          ariaLabel="Close popup modal"
          onClick={hidePopup}
          title="close"
        />
      </div>

      <div className={contentStyles.body}>
        <div className="video-popup-section">
          <div className="video-content">
            <iframe src={videoURL} title="iframe"></iframe>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default VideoPopup;
