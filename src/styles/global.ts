import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root{
        --background: #F0F2F5;
        --shape: #FFFFFF;

        --text-body:#969CB3;
        --text-title:#363F5F;
        
        --red:#E62E4D;
        --green:#33CC95;
        --blue:#5429CC;
        --blue-light:#6933FF;
    }

    * {
        margin:0;
        padding:0;
        box-sizing:border-box;
    }

    html{
        @media(max-width:1080px){
            font-size:93.75%;   //15px
        }

        @media(max-width:720px){
            font-size:87.5%;    //14px
        }
    }
    
    body{ 
        background-color: var(--background);
        -webkit-font-smoothing:antialiased;
    }

    body, input, textarea, button{
        font-family:'Poppins', sans-serif;
        font-weight:400;
    }
    h2,h3,h4,h5,h6,strong{
        font-weight:600;
    }
    h1,

    button{ 
        cursor: pointer;

    }

    [disabled]{
        opacity:0.6;
        cursor: not-allowed;
    }

    .react-modal-overlay{
        background:rgba(0,0,0,0.5);
        position:fixed;
        top:0;
        bottom:0;
        left:0;
        right:0;

        display:flex;
        align-items:center;
        justify-content:center;
    }
    .react-modal-content{
        width:100%;
        max-width:576px;

        background:var(--background);
        padding:3rem;

        position:relative;
        border-radius:0.24rem;
    }

    .react-modal-close{
        position:absolute;
        right:1.5rem;
        top:1.5rem;
        border:0;
        background:transparent;

        transition:0.2s;

         &:hover{
            filter:brightness(0.8);
         }
    }


    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }

    input[type=number] {
    -moz-appearance:textfield; 
    }
`;