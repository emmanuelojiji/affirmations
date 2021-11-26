import { createGlobalStyle } from "styled-components";

export const darkTheme = {
  body: "#1F2933",
  headingText: "#F5F7FA !important",
  bodyText: "#F5F7FA !important",

  menu: {
    background: "#323F4B !important",
    border: 0,
  },
};

export const lightTheme = {
  body: "#fff",
};

export const GlobalStyles = createGlobalStyle`

html {
    background-color: ${(props) => props.theme.body};
}

h1,h2,h3{
    color: ${(props) => props.theme.headingText};
}

p,span,a{
    color:${(props) => props.theme.bodyText};
}

.Menu{
    background:${(props) => props.theme.menu};
}





`;
