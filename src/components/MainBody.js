import React from 'react'
// import 'semantic-ui-css/semantic.min.css'
import styled from "styled-components";
import MainTop from './main-body-components/MainTop';
import { Tabs } from './main-body-components/Tabs';

const BodyWrapper = styled.div`
    /* margin: 30px; */
    display: flex;
    flex-direction: column;
    margin-left: 262px;
    Input{
        width: 441px;
        height: 54px;
        left: 40px;
        top: 12px;
        background: #FAFAFC;
        border-radius: 10px;
    }
`;


const MainBody = () => {
  return (
    <BodyWrapper>
        <MainTop />
        <Tabs />
    </BodyWrapper>
  )
}

export default MainBody;