/* custom */
const WHITE_COLOR = "#FFFFFF";
const BLOCK_COLOR = "#151515";
const GREY_COLOR = "#676564";
const HOVER_GREY_COLOR = "#F8F8F8";
const LIGHT_GREY_COLOR = "#E7E8E6";
const GERY_BROWN_COLOR = "#AAAAAA";
const BRWON_COLOR = "#AFA196";
const DARK_BROWN_COLOR = "#676564";
const RED_COLOR = "#CE4C44";
const YELLOW_COLOR = "#FBF9F7";
const LIGHT_BRWON_COLOR = "#FBF9F7";

export default {
  /* custom Color */
  whiteColor: `${WHITE_COLOR}`,
  blackColor: `${BLOCK_COLOR}`,
  lightBrownColor: `${LIGHT_BRWON_COLOR}`,
  brownColor: `${BRWON_COLOR}`,
  darkBrownColor: `${DARK_BROWN_COLOR}`,
  greyColor: `${GREY_COLOR}`,
  lightGreyColor: `${LIGHT_GREY_COLOR}`,
  redColor: `${RED_COLOR}`,
  yellowColor: `${YELLOW_COLOR}`,
  hoverGreyColor: `${HOVER_GREY_COLOR}`,

  /* custom border */
  borderDefault: `1px solid ${LIGHT_GREY_COLOR};`,
  borderBrownTransparent: `2px solid transparent`,
  borderBrown: `2px solid ${BRWON_COLOR};`,
  borderBrownDefault: `4px solid transparent;`,
  borderBrownHover: `4px solid ${GERY_BROWN_COLOR};`,
  borderBrownStrong: `4px solid ${BRWON_COLOR};`,

  borderBrownDefault1px: `1px solid transparent;`,
  borderBrownHover1px: `1px solid ${GERY_BROWN_COLOR};`,
  borderBrownStrong1px: `1px solid ${BRWON_COLOR};`,

  borderRed: `1px solid ${RED_COLOR};`,
  borderRadius: "30px",
  boxBorder: `1px solid ${LIGHT_GREY_COLOR}`,

  /**shadow */
  boxShadow: `0 0 2px 0.5px rgba(21, 21, 21, 0.05),0 1px 5px 0 rgba(21, 21, 21, 0.15)`,

  /*breakpoints */

  breakpoints: {
    sm: "576px",
    md: "768px",
    lg: "992px",
    xl: "1200px",
  },
};

// const example = `

//   background-color: ${(props) => props.theme.brownColor};

//   border-bottom: ${(props) => props.theme.borderDefault};

//   display: flex;
//   justify-content: center;
//   align-items: center;
//  `;
