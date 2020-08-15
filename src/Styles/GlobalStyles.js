import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export default createGlobalStyle`
    ${reset};

    *{
        box-sizing: border-box;
    }
    body{
        /* background-color: ${(props) => props.theme.whiteColor}; */
        /* color: ${(props) => props.theme.blackColor}; */
        font-size:14px;
        font-family: 'Noto Sans KR', sans-serif;
        color:${(props) => props.theme.darkBrownColor}
    }
    a {
        color:${(props) => props.theme.blackColor};
        text-decoration:none;
    }
    input:focus{
        outline:none;
    }
    .black{
        color:${(props) => props.theme.blackColor};
    }
    
`;
