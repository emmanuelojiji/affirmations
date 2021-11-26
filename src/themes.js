import { createGlobalStyle } from "styled-components";

export const darkTheme = {
  body: "#1F2933",
  headingText: "#F5F7FA !important",
  bodyText: "#F5F7FA !important",
  menuBackground: "#323F4B !important",
  menuBorder: 0,
  settingsText: "#fff",
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


.Menu{
    background:${(props) => props.theme.menuBackground};
    border:${(props) => props.theme.menuBorder};
}

.settings-row{
    color:${(props) => props.theme.settingsText};
}



`;
