import styled from "styled-components";
import { Link } from "react-router-dom";

export const SidebarWrapper = styled.div`
    margin: 0px;
    display: flex;
    width: 262px;
`;

export const Nav = styled.div`
    /* background: #15171c; */
    height: 80px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    color: #fff;
    width: 262px;
`;

export const NavIcon = styled(Link)`
    margin-left: 2rem;
    font-size: 2rem;
    /* height: 80px; */
    /* display: flex; */
    justify-content: flex-start;
    align-items: center;
    /* color: #fff; */
    //windows
    @media (min-width:576px){
        display: none;
    }
`;

export const Sidebarav = styled.nav`
    /* background: #15171c; */
    width: 262px;
    height: 100vh;
    display: flex;
    justify-content: center;
    position: fixed;
    overflow-y: scroll;
    top: 0;
    left: ${({ sidebar }) => (sidebar ? "0" : "-100%")};
    transition: 350ms;
    z-index: 10;
    border: 1px solid #ECEBF5;
    /* margin-bottom: 0px; */
`;

export const SidebarWrap = styled.div`
    width: 100%;
`;

export const NavTop = styled.div`
    /* margin: 10px; */
    border: 1px solid #ECEBF5;
    box-sizing: border-box;
    border-radius: 8px;
    height: 60px;
    width: 221px;
    margin-left: 22px;
    margin-top: 21px;
    margin-bottom: 0px;
    /* padding: 12px; */
    /* align-items: center; */
    h1{
        //styleName: Paragraph/cta;
        font-family: Gelion;
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        /* line-height: 22px; */
        letter-spacing: 0em;
        text-align: center;
        width: 117px;
        margin-bottom: 0px;
        /* height: 19px; */
        /* left: 20px;
        top: 10px; */
        /* color: white; */
    }
    h2{
        font-family: 'Gelion';
        font-style: normal;
        font-weight: 400;
        font-size: 12px;
        /* line-height: 20px; */
        width: 129px;
        /* margin-left: 20px;
        margin-bottom: 10px; */
        /* color: white; */
        text-align: center;
    }
`;