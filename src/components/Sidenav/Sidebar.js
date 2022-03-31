// import React, { useState } from 'react'
// // import Icon from "awesome-react-icons"
// import styled from 'styled-components';
// import Hamburger from 'hamburger-react'
// import Navigationbar from './Navigationbar';


// const SideWrapper = styled.div`
//     .top{
//         margin: 10px;
//         border: 1px solid #ECEBF5;
//         box-sizing: border-box;
//         border-radius: 8px;
//     }
// `;

// const Sidebar = () => {
//     const [ isOpen, setIsOpen ] = useState(false);

//   return (
//     <SideWrapper>
//         {!isOpen && (<div className="mobile-menu-icon">
//                 <Hamburger
//                 toggled={isOpen} toggle={setIsOpen} size={32}   
//                 />
//         </div>)}

//         {isOpen && (
//             <div className = "sidenav">
//                 <span onClick={() => setIsOpen(!isOpen)} className="close-icon">
//                     &times;
//                 </span>
//                 <div className = "top">
//                     <h1>Metacare</h1>
//                     <h2>adeyinka@metacare.app</h2>
//                 </div>

//                 <Navigationbar />

//                 {/* <ul className="mobile-links">
//                     <li>
//                         <Icon name="coffee" />
//                         <span>Home</span>
//                     </li>
//                     <li>
//                         <Icon name="coffee" />
//                         <span href='#'>Haflah</span>
//                     </li>
//                 </ul> */}
//             </div>
        
//         )}
//     </SideWrapper>
//   )
// }

// export default Sidebar;