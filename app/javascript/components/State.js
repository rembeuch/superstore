import React, { useState } from "react";
import styled from "styled-components";

const Main = styled("div")`
  font-family: sans-serif;
`;

const DropDownContainer = styled("div")`
  width: 10.5em;
  margin: 0 auto;
`;

const DropDownHeader = styled("div")`
  margin-bottom: 0.8em;
  padding: 0.4em 2em 0.4em 1em;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.15);
  font-weight: 500;
  font-size: 1.3rem;
  color: #3faffa;
  cursor: pointer;

`;

const DropDownListContainer = styled("div")`
  position: absolute;
  z-index: 100;
  width: 10.5em;
`;

const DropDownList = styled("ul")`
  padding: 0;
  margin: 0;
  padding-left: 1em;
  background: #ffffff;
  border: 2px solid #e5e5e5;
  box-sizing: border-box;
  color: #3faffa;
  font-size: 1.3rem;
  font-weight: 500;
  &:first-child {
    padding-top: 0.8em;
  }
`;

const ListItem = styled("li")`
  list-style: none;
  margin-bottom: 0.8em;
  cursor: pointer;
`;





const State = ({data}) => {
    const [isOpen, setIsOpen] = useState(false);
    const toggling = () => setIsOpen(!isOpen);

    const handleMouseEnter = (e) => {
      e.target.style.color = "#fd9e46"
    }

    const handleMouseLeave = e => {
      e.target.style.color = "#3faffa"
    }

    const stateList = data.map(item => {
        return item.attributes.state
     })
 
     const stateListFiltered = stateList.filter(function(item, pos){
         return stateList.indexOf(item)== pos; 
       })
       .sort()
       .map((item, index) => {
         return (
             <li key={index} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}> {item} </li>
         )
     })

     
    return (
        <Main>
      <DropDownContainer>
      <DropDownHeader onClick={toggling}>States ⬇️</DropDownHeader>
        {isOpen && (
          <DropDownListContainer>
            <DropDownList>
              <ListItem onClick={toggling} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>  All  </ListItem>
              <ListItem onClick={toggling}>  {stateListFiltered}  </ListItem>
            </DropDownList>
          </DropDownListContainer>
        )}
      </DropDownContainer>
    </Main>
    );
};

export default State;