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
  .button-pathOne, 
  .footer_heading_paragraph p,
  .footer_links_infos p,
  .footer_heading_logo svg rect {
    color: ${({ theme }) => theme.text};
    fill: ${({ theme }) => theme.text};
  }
  .nav_menu_signup {
    background: ${({ theme }) => theme.text};
    color: ${({ theme }) => theme.body};
    &:hover {
    background: ${({ theme }) => theme.hover2};
    }
  }
  .button-pathTwo {
    fill: ${({ theme }) => theme.body};
  }
  .nav_menu {
    box-shadow: ${({ theme }) => theme.boxshadow};
  }
  .signin_container,
  .signin_container_form_input input,
  .signup_container,
  .signup_container_form_input input,
  .lists {
    background: ${({ theme }) => theme.text};
  }
  .signin_container_form_input input,
  .signup_container_form_input input {
    color: ${({ theme }) => theme.body};
    border-bottom: 1px solid ${({ theme }) => theme.body};
    &::placeholder{
      color: ${({ theme }) => theme.opacity} !important;
    }
  }
  .signin_container_form_input label,
  .signin_container_signup_title h3,
  .signup_container_form_input label,
  .footer_heading_logo svg path {
    color: ${({ theme }) => theme.body};
    fill: ${({ theme }) => theme.body};
  }
  .signin_container_form_button button,
  .signin_container_signup_button button,
  .signup_container_form_button button {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
  }
  .signin_container_form_button button,
  .signin_container_signup_button button,
  .signup_container_form_button button {
    &:hover{
      background: ${({ theme }) => theme.hover};
    }
  }
  .signin_container_hr hr {
    background: ${({ theme }) => theme.body};
  }
  .lists_icon button {
    background: ${({ theme }) => theme.text};
    color: ${({ theme }) => theme.body};
  }
  .lists_paragraph input {
    background: ${({ theme }) => theme.text};
    color: ${({ theme }) => theme.body};
    &::placeholder{
      color: ${({ theme }) => theme.body};
    }
  }
  }
  `;
