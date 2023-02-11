const uiConfig = {
  style: {
    gradientBgImage: {
      dark: {
        backGroundImage:
          "linear-gradient(to top, rgba(0,0,0,1), rgba(0,0,0,0))",
      },
      light: {
        backGroundImage:
          "linear-gradient(to top, rgba(245,245,245,1), rgba(0,0,0,0))",
      },
    },
    horizontalGradienBgImage: {
      dark: {
        backGroundImage:
          "linear-gradient(to right, rgba(0,0,0,1), rgba(0,0,0,0))",
      },
      light: {
        backGroundImage:
          "linear-gradient(to right, rgba(245,245,245,1), rgba(0,0,0,0))",
      },
    },
    typoLines: (lines, textAlign) => ({
      textAlign: textAlign || "justify",
      display: "-webkit-box",
      overflow: "hidden",
      WebkitBoxOrient: "vertical",
      WebkitLineClamp: lines,
    }),
    maonContent: {
      maxWidth: "1366px",
      margin: "auto",
      padding: 2,
    },
    backgroundImage: (imgPath) => ({
      position: "relative",
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundColor: "darkgrey",
      backgroundImage: `url(${imgPath})`,
    }),
  },
  size: {
    sidebarWidth: "300px",
    contentMaxWidth: "1366px",
  },
};

export default uiConfig;
