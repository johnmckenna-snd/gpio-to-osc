import styled, { createGlobalStyle } from 'styled-components';
import { ToastContainer } from 'react-toastify';
import { injectStyle } from 'react-toastify/dist/inject-style';

import { colors } from '../../styles/colors';

import LatoLight from '../../fonts/Lato-Light.ttf';
import LatoThin from '../../fonts/Lato-Thin.ttf';
import LatoRegular from '../../fonts/Lato-Regular.ttf';

import SettingsAndStatus from '../layouts/SettingsAndStatus';

injectStyle();

const GlobalStyle = createGlobalStyle`
  html {
    height: 100vh;
    margin: 0;
    background: ${colors.background.darkGrey};
  }

  body {
    height: 100vh;
    margin: 0;
  }

  @font-face {
    font-family: "Lato-Light";
    src: local("Lato-Light"),
      url(${LatoLight}) format("truetype");
  }

  @font-face {
    font-family: "Lato-Thin";
    src: local("Lato-Thin"),
      url(${LatoThin}) format("truetype");
  }

  @font-face {
    font-family: "Lato-Regular";
    src: local("Lato-Regular"),
      url(${LatoRegular}) format("truetype");
  }

  #root {
    height: 100vh;
    margin: 0;
  }
`;

const AppWrapper = styled.div`
  display: grid;
  grid-template-areas: "main";
  height: 100vh;
`;

function App () {
  return (
    <>
      <ToastContainer
        theme="dark"
        autoClose={3000}
      />
      <GlobalStyle />
      <AppWrapper>
        <SettingsAndStatus />
      </AppWrapper>
    </>
  );
}

export default App;
