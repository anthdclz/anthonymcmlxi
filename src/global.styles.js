import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
body {
  background-color: #faa;
  color: #eee;

  & .page {
    padding: 90px 40px 20px;

    @media screen and (max-width:900px) {
      padding: 90px 0 20px;
    }
  }


  & .item-page .page {
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
  margin-left: 20px;
  color: #feb;
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