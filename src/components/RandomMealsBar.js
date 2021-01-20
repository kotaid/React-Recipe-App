import React from "react";
import styled from "styled-components";

const RandomMealsBar = () => {
  return (
    <RandomMealsBarStyle className="random-meals-bar"></RandomMealsBarStyle>
  );
};

export default RandomMealsBar;

const RandomMealsBarStyle = styled.div`
  width: 80vw;
  min-height: 20vh;
  background-color: white;
  border-radius: 0.4rem;
  margin: 1rem auto;
  border: 1px solid #979797;
  border-radius: 0.6rem;
`;
