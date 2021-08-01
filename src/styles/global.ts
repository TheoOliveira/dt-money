import {createGlobalStyle} from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    :root {
        --background: #f0f2f5;
        --red: #e52e4d;
        --blue: #5429cc;
        --blue-light: #6933ff;
        --text-body: #969CB3;
        --text-title: #363F5F;
        --shape: #FFFFFF;
    }
    *{
        margin: 0;
        padding:0;
        box-sizing: border-box;
    }
    html {
        @media(max-width:1000px){
            font-size:93.75%;
        }
        @media(max-width:720px){
            font-size:87.5%;
        }
    }
    body {
        background: var(--background-color);
        -webkit-font-smoothing: antialiased;
    }
button {
    cursor: pointer;
}
[disabled]{
    opacity:0.6;
    cursor: not-allowed;
}
`