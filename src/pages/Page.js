import React from 'react'
import MainBody from '../components/main-body/MainBody';
import Sidebarn from '../components/sidenav/Sidebarn';
import styled from "styled-components";

const PageWrapper = styled.div`
    /* display: flex;
    flex-direction: column; */
`;

const Page = () => {
  return (
    <PageWrapper>
        <Sidebarn />
        <MainBody />
    </PageWrapper>
  )
}

export default Page;