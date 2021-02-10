import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    transition: all 0.30s linear;
  }
  .nav_heading_burger span,
  .footer_links_socialNetwork svg path {
    background: ${({ theme }) => theme.text};
    fill: ${({ theme }) => theme.text};
  }
  .home_title h2,
  .home_paragraph h3,
  .nav_menu_signin, 
  .footer_heading_paragraph p,
  .footer_links_infos p,
  .footer_heading_logo svg rect {
    color: ${({ theme }) => theme.text};
    fill: ${({ theme }) => theme.text};
  }
  .nav_menu_signup {
    background: ${({ theme }) => theme.text};
    color: ${({ theme }) => theme.body};
  }
  .button-pathOne{
    fill: ${({ theme }) => theme.text};
  }
  .button-pathTwo{
    fill: ${({ theme }) => theme.body};
  }
  .nav_menu{
    box-shadow: ${({ theme }) => theme.shadow};
  }
  .footer_heading_logo svg path {
    fill: ${({ theme }) => theme.body};
  }
  `;
