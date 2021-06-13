import { createGlobalStyle } from 'styled-components';
const mainBase = '#eee';
const mainColor = '#e70a0a';
const trimColor = '#ffd860';
const printBase = '#e44';

export const GlobalStyle = createGlobalStyle`

body {
  background-color: ${mainColor};
  color: ${mainBase};

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
  .web-hidden{
    display: none;
  }
}
  
a {
  text-decoration: none;
  color: rgb(152, 224, 255);

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
h3{
  & .rak{
    color: ${mainBase};
    font-size: 18px;
  }
}
.d-inline {
  display: inline;
}
.fw-sb {
  font-weight:600;
}

.frt {
  float: right;
}
.m-top-30 {
  margin-top: 30px;  
}
.m-top-20 {
  margin-top: 20px;  
}
.m-top-10 {
  margin-top: 10px;  
}
.m-bottom-0 {
  margin-bottom: 0;
}

@media screen and (max-width:900px) {
  body {
    .resume-wrapper{
      width: 100%;

      .resume-header{
        h1{
          font-size: 22px;
        }
        .r-hdr-item{
            font-size:14px;
            line-height: 20x;
            margin: 0 20px;
        }
      }
    }
    .web-hidden{
      display: unset;
    }
    .mob-hidden{
      display: none;
    }
  }
}


@media print {
  .page-break  { display:block; page-break-before:always; }
  body {
    background-color: #fff;
    color: ${printBase};
    font-size: 11px;

    a {
      color: rgb(96, 208, 255);
    }
    .resume-wrapper {
      font-size: 11px;
      width: 600px;

      .resume-header{
        h1{
          margin: 20px;
        }
        .r-hdr-item{
            font-size:12px;
            line-height: 20x;
            margin: 0 20px;
        }
      }
      h1{
        font-size: 20px;
      }
      h2{
        font-size: 14px;
      }
      h1, h2{
        color: #ffcc44;
      }
      h3, h4 {
        font-size: 12px;
      }
      h3{
        & .rak{
          color: ${printBase};
          font-size: 13px;
        }
      }
      .r-date{
        float: right;
      }
      .resume-body{
        .r-skill-wrapper{
          .r-skill{
            font-size:12px;
            line-height: 20px;
            margin: 0 11px;
          }
        }
      }
    }
    .m-top-30 {
      margin-top: 15px;  
    }

    .web-hidden{
      display: unset;
    }
    .print-hidden{
      display: none;
    }
  }
    footer {
      page-break-after: always;
    }
}
`;