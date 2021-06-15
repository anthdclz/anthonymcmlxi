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

  & .page-wrapper {
    width: 900px;
    margin: 0 auto;

    & .page-divider {
          height: 2px;
          border-bottom: 1px #ffd860 solid;
          margin: 60px 0;
        }


    & .page-flex {
      display: flex;
      justify-content: space-between;
    }

    & .page-column {
      display: flex;
      flex-direction: column;
      width: 48%;
    }
    @media screen and (max-width:900px) {
      padding: 30px 0 20px;
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
    filter: contrast(133%);
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
.m-top-60 {
  margin-top: 60px;  
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
.m-top-0 {
  margin-top: 0;  
}
.m-bottom-0 {
  margin-bottom: 0;
}
.m-bottom-60 {
  margin-bottom: 60px;
}
.coffee-icon, .gamepad-icon, .chart-icon{
    display: inline;
    height: 16px;
    line-height:32px;
    margin: 0 10px;
    vertical-align: -1px;
}
.side-proj, .home-skills{
    a {
      color: ${trimColor}
    }
    .coffee-icon, .gamepad-icon, .chart-icon{
        height: 24px;
        margin: 0 20px;
        vertical-align: -4px;
    }
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

    & .page-wrapper{
      width: 100%;

      & .page-header{
        margin-top: 0;
      }

      & .page-flex{
        display: block;

        & .page-column {
          margin-top: 60px;
          width: unset;
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