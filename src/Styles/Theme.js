const BOX_BORDER = "1px solid #e6e6e6";
const BORDER_RADIUS = "4px";

/* custom */
const WHITE_COLOR = "#FFFFFF";
const BLOCK_COLOR = "#151515";
const GREY_COLOR = "#676564";
const LIGHT_GREY_COLOR = "#E9EAE9";
const BRWON_COLOR = "#AFA196";
const DARK_BROWN_COLOR = "#676564";
const RED_COLOR = "#CE4C44";

export default {
  maxWidth: "768px",

  bgColor: "#FAFAFA",

  // blackColor: "#262626",
  darkGreyColor: "#999",
  // lightGreyColor: "#c7c7c7",
  // redColor: "#ED4956",
  blueColor: "#3C82FF",
  darkBlueColor: "#AFA196",

  boxBorder: "1px solid #e6e6e6",
  borderRadius: "30px",
  whiteBox: `border:${BOX_BORDER};
             border-radius:${BORDER_RADIUS};
             background-color:white;
            `,

  /* custom Color */
  whiteColor: `${WHITE_COLOR}`,
  blackColor: `${BLOCK_COLOR}`,
  brownColor: `${BRWON_COLOR}`,
  darkBrownColor: `${DARK_BROWN_COLOR}`,
  greyColor: `${GREY_COLOR}`,
  lightGreyColor: `${LIGHT_GREY_COLOR}`,
  redColor: `${RED_COLOR}`,

  /* custom border */
  borderDefault: `1px solid ${LIGHT_GREY_COLOR};`,
  borderBrown: `3px solid ${BRWON_COLOR};`,
  borderRed: `1px solid ${RED_COLOR};`,

  breakpoints: {
    sm: "576px",
    md: "768px",
    lg: "992px",
    xl: "1200px",
  },
};
