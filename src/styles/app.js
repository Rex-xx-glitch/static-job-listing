import styled, {createGlobalStyle} from "styled-components";
import {fontSize, fontFamily, primaryColor, mobile, desktop} from "./variables";

export const StylesResets = createGlobalStyle`
    *, *::before, *::after{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-size: ${fontSize};
        font-family: ${fontFamily};
    }
`;

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

export const Header = styled.header`

    width: 100%;
    height: 156px;
    

    @media screen and (max-width: ${desktop}){
        background: url("./images/bg-header-mobile.svg"), linear-gradient(${primaryColor}, ${primaryColor});;
    }

    @media screen and (min-width: ${mobile}){
        background: url("./images/bg-header-desktop.svg"), linear-gradient(${primaryColor}, ${primaryColor});
    }
`;