import React, { useState } from 'react';
import styled from 'styled-components';


const Main = styled("div")`
  font-family: sans-serif;
`;
const DropDownContainer = styled("div")`
  width: 10.5em;
`;

const DropDownHeader = styled("div")`
  margin-bottom: 0.8em;
  padding: 0.4em 2em 0.4em 1em;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.15);
  font-weight: 500;
  font-size: 1.3rem;
  color: #3faffa;
  background: #ffffff;
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
  &:hover {
    color: #fd9e46;
  }
`;


const Year = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggling = () => setIsOpen(!isOpen);

    

     
    return (
        <Main>
      <DropDownContainer>
      <DropDownHeader onClick={toggling}>Years ⬇️</DropDownHeader>
        {isOpen && (
          <DropDownListContainer>
            <DropDownList>
              <ListItem onClick={toggling}>All</ListItem>
              <ListItem onClick={toggling}>2014</ListItem>
              <ListItem onClick={toggling}>2015</ListItem>
              <ListItem onClick={toggling}>2016</ListItem>
              <ListItem onClick={toggling}>2017</ListItem>
            </DropDownList>
          </DropDownListContainer>
        )}
      </DropDownContainer>
    </Main>
    );
};

export default Year;