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
  color: rgb(96, 208, 255);

  &:hover{
    filter: contrast(125%);
  }
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
h3, h4{
  font-family: 'Poppins', sans-serif;
}

.fw-sb {
  font-weight:600;
}

.m-bottom-0 {
  margin-bottom: 0;
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