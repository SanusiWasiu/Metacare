import { Top, Frame, Counter, Divider, Circle, DropIcon, SearchBar, Search } from '../../assets/styles/Top.styled'
import { FaRegBell } from "react-icons/fa";
import { FiChevronDown } from "react-icons/fi";
import { IoMdSearch } from 'react-icons/io';

const MainTop = () => {
  return (
    <Top>
      <Search>
        <SearchBar 
          id="search-bar" 
          type="search"
          placeholder="Ask us any question">
        </SearchBar>
        <IoMdSearch style={{marginLeft: "25rem", position: "absolute", alignItems: "flex-end"}} color="#A3A3C2" size="1.5em" />
      </Search>
        <Frame>
            <FaRegBell />
            <Counter>
                3
            </Counter>
            <Divider></Divider>
            <Circle></Circle>
            <DropIcon>
              <FiChevronDown />
            </DropIcon>
        </Frame>
    </Top>
  )
}

export default MainTop