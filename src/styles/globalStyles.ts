import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    :root {
        --gray-100: #e1e1e6;
        --gray-300: #c4c4cc;
        --gray-400: #8d8d99;
        --gray-900: #121214;
        --red-400: #F56565;
        --green-500: #38A169;

        color-scheme: light dark;

        font-synthesis: none;

        font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;

        text-rendering: optimizeLegibility;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    [disabled] {
        opacity: 0.6;
        cursor: not-allowed;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        background: var(--gray-100);
        -webkit-font-smoothing: antialiased;
    }


    button {
        cursor: pointer;
        border: none;
        outline: none;
        border-radius: 4px;

        &:hover {
            background: var(--gray-400);
            transition: background-color 0.2s;
        }
    }

    input {
        color: var(--gray-900);
        background: none;
        outline: none;
        border: none;

        &:active {
            border: 1px solid var(--gray-400)
        }
    }


    @media (max-width: 1080px) {
        html {
            font-size: 93, 75%;
        }
    }

    @media (max-width: 720px) {
        html {
            font-size: 87, 5%;
        }
    }
`;