import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html {
        scroll-behavior: smooth;
    }


    body {
        background-color: #F6F5FC;
        -webkit-font-smoothing: antialiased;
        font-family: "Roboto", sans-serif;
    }

    .container {
        max-width: 1350px;
        width: 100%;
        margin: 0 auto;
    }

    .back-to-top {
        width: 50px;
        height: 50px;
        background-color: #820AD1;
        position: fixed;
        right: 40px;
        bottom: 74px;
        border: none;
        border-radius: 12px;

        cursor: pointer;


        display: flex;
        align-items: center;
        justify-content: center;

        opacity: 0;

        transition: all .4s ease;

        &:hover {
            transform: scale(1.2);
            filter: brightness(1.2);
        }

        &.visible {
            opacity: 1;
        }
    }

    ::-webkit-scrollbar {
        width: 10px;
    }

    ::-webkit-scrollbar-track {
        background: #fff;
    }

    ::-webkit-scrollbar-thumb {
        border-radius: 12px;
        background-image: -webkit-linear-gradient(top,  #e4f5fc 0%, #bfe8f9 50%, #9fd8ef 51%, #2ab0ed 100%);										
    }

`;