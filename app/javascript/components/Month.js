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


const Month = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggling = () => setIsOpen(!isOpen);

    

     
    return (
        <Main>
      <DropDownContainer>
      <DropDownHeader onClick={toggling}>Months ⬇️</DropDownHeader>
        {isOpen && (
          <DropDownListContainer>
            <DropDownList>
              <ListItem onClick={toggling}>All</ListItem>
              <ListItem onClick={toggling}>January</ListItem>
              <ListItem onClick={toggling}>February</ListItem>
              <ListItem onClick={toggling}>March</ListItem>
              <ListItem onClick={toggling}>April</ListItem>
              <ListItem onClick={toggling}>May</ListItem>
              <ListItem onClick={toggling}>June</ListItem>
              <ListItem onClick={toggling}>July</ListItem>
              <ListItem onClick={toggling}>August</ListItem>
              <ListItem onClick={toggling}>September</ListItem>
              <ListItem onClick={toggling}>October</ListItem>
              <ListItem onClick={toggling}>November</ListItem>
              <ListItem onClick={toggling}>December</ListItem>
            </DropDownList>
          </DropDownListContainer>
        )}
      </DropDownContainer>
    </Main>
    );
};

export default Month;