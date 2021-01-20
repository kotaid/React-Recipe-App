import React from "react";
import axios from "axios";
import { createGlobalStyle } from "styled-components";

//Import Components
import Header from "./components/Header";
import RandomMealsBar from "./components/RandomMealsBar";

function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <Header />
      <RandomMealsBar />
    </div>
  );
}

export default App;

const GlobalStyles = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box
}
html{
    @media (max-width: 1000px){
        font-size: 75%;
    }   
    body{
      font-family: muli, sans-serif;
    }
}
`;
