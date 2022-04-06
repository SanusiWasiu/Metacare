import React, { useEffect, useState } from "react";
// import styled from "styled-components";
// import { Link } from "react-router-dom";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { SidebarData } from "./SidebarData";
import SubMenu from "./SubMenu";
import { IconContext } from "react-icons/lib";
// import Hamburger from 'hamburger-react'
import { NavIcon, SidebarNav, SidebarWrap, NavTop, Nav, SidebarWrapper } from "../../assets/styles/SideNav.styled"

const Sidebarn = () => {
const [sidebar, setSidebar] = useState(true);

useEffect(() => {
    window.addEventListener('resize', () => {
        if (window.innerWidth > 576){
            setSidebar(true)
            // console.log("water")
        }
        else {
            setSidebar(false)
            // console.log("air")
        }
    });
}, []);


const showSidebar = () => {
    setSidebar(!sidebar)
};


return (
	<SidebarWrapper>
	<IconContext.Provider value={{ color: "black" }}>
		<Nav>
            <NavIcon to="#">
                <FaIcons.FaBars onClick={showSidebar} />
            </NavIcon>
            {/* <h1
                style={{ textAlign: "center",
                        marginLeft: "200pxçç",
                        color: "green" }}
            >
            </h1> */}
		</Nav>
		<SidebarNav sidebar={sidebar}>
            <SidebarWrap>
                 <NavIcon to="#">
                    <AiIcons.AiOutlineClose onClick={showSidebar}  />
                </NavIcon>
                <NavTop>
                     <h1>Metacare</h1>
                     <h2>adeyinka@metacare.app</h2>
                 </NavTop>
                {SidebarData.map((item, index) => {
                return <SubMenu item={item} key={index} />;
                })}
            </SidebarWrap>
		</SidebarNav>
	</IconContext.Provider>
	</SidebarWrapper>
);
};

export default Sidebarn;
