import styled from "styled-components";

export const Top = styled.div`
    /* position: fixed; */
    width: 1178px;
    height: 78px;
    /* margin-left: 262px;  */
    margin-top: -70px;
    padding: 10px 16px;
    border-bottom: 1px solid #ECEBF5;
    position: fixed;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    /* align-items: stretch; */
`;

export const Frame = styled.div`
    border: 1px solid #ECEBF5;
    box-sizing: border-box;
    border-radius: 8px;
    width: 175px;
    height: 54px;
    left: 947px;
    top: 12px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 11px 16px;
    margin-right: 50px;
`;

export const Counter = styled.div`
    background: #F25A68;
    border-radius: 4px;
    width: 16px;
    height: 16px;
    left: 22px;
    top: 1px;
    color: #FFFFFF;
    justify-content: center;
    align-items: center;
    font-family: 'Gelion';
    font-style: normal;
    font-weight: 800;
    font-size: 12px;
    line-height: 20px;
    padding: 1px;
    text-align: center;
    margin-left: 5px;
`;

export const Divider = styled.div`
    flex: none;
    /* order: 1; */
    flex-grow: 0;
    margin: 0px 24px;
    position: static;
    width: 1px;
    height: 24px;
    left: 78px;
    top: 15px;
    background: #ECEBF5;
`;

export const Circle = styled.div`
    position: static;
    width: 32px;
    height: 32px;
    left: 0px;
    top: 0px;
    flex: none;
    order: 0;
    flex-grow: 0;
    margin: 0px 8px;
    border: 1px solid #6837EF;
    border-radius: 50%;
`;

export const DropIcon = styled.div`
    color: #696D8C;
    height: 4.6666669845581055px;
    /* position: absolute; */
    left: 25%;
    right: 25%;
    top: 37.5%;
    bottom: 33.33%;
`;

// export const SearchBar = styled.form`
/* icon = {<FaRegBell />} */
    /* color: #555;
    display: flex;
    padding: 2px;
     */
// `;

export const Search = styled.div`
  padding: .5rem;
  position: relative;
  display: flex;  
  align-items: center;
  width: 100%;
`;

export const SearchBar = styled.input`
  padding: 1rem 1rem 1rem 1rem;
  width: 100%;
`;
