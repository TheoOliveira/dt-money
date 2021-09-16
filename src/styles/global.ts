import {createGlobalStyle} from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    :root {
        --background: #f0f2f5;
        --red: #e52e4d;
        --green: #33CC95;
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
    body, input, textarea, button {
        font-family: 'Poppins', sans-serif;
        font-weight: 400;
    }
    h1-h6, strong {
        font-family: 'Poppins', sans-serif;
        font-weight: 600;
    }
button {
    cursor: pointer;
}
[disabled]{
    opacity:0.6;
    cursor: not-allowed;
}
.react-modal-overlay {
    background: rgba(0, 0, 0, 0.5);
    position: fixed;
    top:0; 
    bottom:0;
    right:0;
    left:0;
    display:flex;
    align-items: center;
    justify-content: center;

}
.react-modal-content {
    width:100%; 
    max-width:576px;
    background: var(--background);
    padding: 3rem;
    position:relative;
    border-radius:0.25rem;
}

.react-modal-close {
    position: absolute;
    right: 1.5rem;
    top: 1.5rem;
    border: 0;
    background: transparent;
    transition: filter 0.2s;
    &:hover {
        filter: brightness(0.9);
    }
}
`