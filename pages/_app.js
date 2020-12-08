import styled from 'styled-components';

import { AppBar, IconButton, Typography } from '@material-ui/core';
import { HelpOutline } from '@material-ui/icons';

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
  return (
    <>
      <head>
        <title>Creativity Blossoms</title>
        <link rel="icon" href="/favicon.ico" />

        <style global jsx>{`
          head, body {
            padding: 0;
            margin: 0;
            width: 100%;
            height: 100%;
          }
        `}</style>
      </head>
      <TitleBar position="static">
        <Title variant="h6">Creativity Blossoms</Title>
        <IconButton color="inherit"><HelpOutline /></IconButton>
      </TitleBar>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp
