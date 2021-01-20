import React from "react";
import styled from "styled-components";

const Header = () => {
  return (
    <HeaderStyled>
      <SearchRecipeStyled action="">
        <label htmlFor="">Search for recipies</label>
        <input type="text" />
      </SearchRecipeStyled>
      <LinksContainerStyled className="links">
        <span>categories</span>
        <span>users recipes</span>
        <span>connect</span>
      </LinksContainerStyled>
    </HeaderStyled>
  );
};

export default Header;

const HeaderStyled = styled.header`
  width: 80vw;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.5rem 0;
`;

const SearchRecipeStyled = styled.form`
  background-color: #0667b2;
  color: #fff;
  border-radius: 0.4rem;
  padding: 0.3rem;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  & > * {
    padding: 0.3rem;
  }
  input {
    border: 1px solid transparent;
    outline: none;
    transition: all 0.2s ease;
    border-radius: 0.4rem;
    margin: 0 0.3rem;
    &:focus {
      border: 1px solid black;
    }
  }
`;

const LinksContainerStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  & > * {
    padding: 0.5rem;
    border: 1px solid #979797;
    border-radius: 0.4rem;
    margin: 0 1rem;
    transition: all 0.3s ease;
    cursor: pointer;
    &:hover {
      background-color: #0667b2;
      color: white;
    }
  }
  span:last-child {
    margin-right: 0;
  }
`;
