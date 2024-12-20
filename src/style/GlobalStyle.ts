import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

@import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Didact+Gothic&display=swap');

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body { 
    font-family: 'Didact Gothic', sans-serif;
    background-color: #242424;
    color: #fff;
    overflow-x: hidden;
}

h1 {
    font-family: 'Bebas Neue', serif;
    font-size: 2rem;
}




`;

export default GlobalStyle;
