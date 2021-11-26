import { createGlobalStyle } from 'styled-components';

export const darkTheme = {
    body: '#000',
    headingText: '#fff !important'
};

export const lightTheme = {
    body: '#fff'
};

export const GlobalStyles = createGlobalStyle`

html {
    background-color: ${props => props.theme.body};
}

h1,h2,h3{
    color: ${props => props.theme.headingText};
}



`

