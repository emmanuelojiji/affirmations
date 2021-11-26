import { createGlobalStyle } from 'styled-components';

export const darkTheme = {
    body: '#000'
};

export const lightTheme = {
    body: '#fff'
};

export const GlobalStyles = createGlobalStyle`

html {
    background-color: ${props => props.theme.body};
}

`

