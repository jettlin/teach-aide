import { useState } from 'react';
import styled, { createGlobalStyle } from 'styled-components';

import { AppBar, IconButton, Typography } from '@material-ui/core';
import { HelpOutline } from '@material-ui/icons';
import Dialog from '../components/dialog';

const GlobalStyle = createGlobalStyle`
  html, body {
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%:
  }
`

const TitleBar = styled(AppBar)`
  && {
    flex-direction: row;
  }
`;

const Title = styled(Typography)`
  && {
    flex-grow: 1;
    padding: 4px;
  }
`;

function MyApp({ Component, pageProps }) {
  const [help, setHelp] = useState(false);

  return (
    <>
      <GlobalStyle />
      <TitleBar position="static">
        <Title variant="h6">Creativity Blossoms</Title>
        <IconButton color="inherit" onClick={() => setHelp(true)}><HelpOutline /></IconButton>
      </TitleBar>
      <Component {...pageProps} />
      <Dialog onClose={() => setHelp(false)} title="Help" open={help}>
        <Typography>Please run your mouse over the image to find the clues.</Typography>
      </Dialog>
    </>
  );
}

export default MyApp
