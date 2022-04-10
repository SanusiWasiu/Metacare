import React from 'react'
import MainBody from '../components/MainBody';
import Sidebar from '../components/Sidebar';
import styled from "styled-components";

const PageWrapper = styled.div`
    /* display: flex;
    flex-direction: column; */
`;

const Page = () => {
  return (
    <PageWrapper>
        <Sidebar />
        <MainBody />
    </PageWrapper>
  )
}

export default Page;