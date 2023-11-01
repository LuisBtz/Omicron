import { createGlobalStyle } from 'styled-components';

import paneot from '../../assets/fonts/Chiller-Regular.eot';
import pansvg from '../../assets/fonts/Chiller-Regular.svg';
import panttf from '../../assets/fonts/Chiller-Regular.ttf';
import panwoff from '../../assets/fonts/Chiller-Regular.woff';
import panwoff2 from '../../assets/fonts/Chiller-Regular.woff2';



export const Typography = createGlobalStyle`
@font-face {
    font-family: 'Chiller';
    src: url('${paneot}');
    src: url('${panwoff2}') format('woff2'),
        url('${panwoff}') format('woff'),
        url('${panttf}') format('truetype'),
        url('${pansvg}#Chiller-Regular') format('svg');
    font-weight: normal;
    font-style: normal;
    font-display: swap;
}
:root {
    --regular: 'Chiller', sans-serif;
    --black: #000000;
    --white: #ffffff;
    --gray: #F7F7F7;
    --darkgray: #E6E6E6;
    --orange: #1A1A1A;
    --darkOrange: #E03715;
    --gra: #999999;
    overflow-wrap: break-word;
}
html {
      scroll-behavior: smooth;
      font-size: 18px !important;
    }
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0; 
    }
    body {
      background-color: var(--black);
        color: var(--white);
        font-size: 30px;
        font-family: var(--regular);
        -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
        width: 100%;
        overflow-x: hidden;
        position: relative;
        -webkit-font-smoothing: antialiased;
        max-width: 750px;
        padding: 100px 20px;
        margin: 0 auto;
        text-align: center; 
        line-height: 1.2;
        
    }
    ::-webkit-scrollbar {
        display: none;
    }
    p {
        font-family: var(--slim);
        font-weight: lighter;
        margin-bottom: 20px;
    }
`