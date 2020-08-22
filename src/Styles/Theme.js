/* custom */
const WHITE_COLOR = "#FFFFFF";
const BLOCK_COLOR = "#151515";
const GREY_COLOR = "#676564";
const LIGHT_GREY_COLOR = "#E9EAE9";
const BRWON_COLOR = "#AFA196";
const DARK_BROWN_COLOR = "#676564";
const RED_COLOR = "#CE4C44";
const YELLOW_COLOR = "#FBF9F7";

export default {
  /* custom Color */
  whiteColor: `${WHITE_COLOR}`,
  blackColor: `${BLOCK_COLOR}`,
  brownColor: `${BRWON_COLOR}`,
  darkBrownColor: `${DARK_BROWN_COLOR}`,
  greyColor: `${GREY_COLOR}`,
  lightGreyColor: `${LIGHT_GREY_COLOR}`,
  redColor: `${RED_COLOR}`,
  yellowColor: `${YELLOW_COLOR}`,

  /* custom border */
  borderDefault: `1px solid ${LIGHT_GREY_COLOR};`,
  borderBrown: `2px solid ${BRWON_COLOR};`,
  borderBrownStrong: `3px solid ${BRWON_COLOR};`,
  borderRed: `1px solid ${RED_COLOR};`,
  borderRadius: "30px",
  boxBorder: `1px solid ${LIGHT_GREY_COLOR}`,
  /*breakpoints */

  breakpoints: {
    sm: "576px",
    md: "768px",
    lg: "992px",
    xl: "1200px",
  },
};
const example = `
 
  background-color: ${(props) => props.theme.brownColor};
  
  border-bottom: ${(props) => props.theme.borderDefault};
  
  display: flex;
  justify-content: center;
  align-items: center;
 `;
