import { createGlobalStyle } from 'styled-components';
const mainColor = '#e70a0a';
const trimColor = '#ffd860';

export const GlobalStyle = createGlobalStyle`

body {
  background-color: ${mainColor};
  color: #eee;

  .color-trim {
    color: ${trimColor};
  }

  & .page {
    padding: 90px 40px 20px;

    @media screen and (max-width:900px) {
      padding: 90px 0 20px;
    }
  }

  .page-content{
    padding: 20px 60px;

    @media screen and (max-width:900px) {
      padding: 20px;
    }
  }
}
  
a {
  text-decoration: none;
  color: #dc9;
}
* {
  box-sizing: border-box;
}
*, *:before, *:after {  
    -webkit-box-sizing: border-box !important;
    -moz-box-sizing: border-box !important;
    -ms-box-sizing: border-box !important;
    box-sizing: border-box !important;
}

h1, h2 {
  font-family: 'Comfortaa', sans-serif;
  color: ${trimColor};
}
h3{
  font-family: 'Poppins', sans-serif;
}

@media screen and (max-width:900px) {
  .gallery-item {
    height: 222px;
    width: 145px;
    font-size: 20px;
    line-height: 28px;
  }
}
`;