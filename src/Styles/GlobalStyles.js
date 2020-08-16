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
        color:${(props) => props.theme.darkBrownColor};
        line-height: 1.3;
        letter-spacing:.4px;
        font-weight:300;
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
    .brown{
        color:${(props) => props.theme.brownColor};
    }
    
`;
