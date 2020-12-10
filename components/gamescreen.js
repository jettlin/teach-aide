import styled from 'styled-components';
import Image from 'next/image';
import { ExitToApp } from '@material-ui/icons';

const Root = styled.div`
  width: 800px;
  height: 600px;
  background-color: #e0ffff;
  position: relative;
  margin: 24px;
  border: 1px solid grey;
`;

const Title = styled.h1`
  text-align: center;
`;

const BackButton = styled.div`
  position: absolute;
  top: 24px;
  left: 24px;
  width: 50px;
  height: 50px;

  & .MuiSvgIcon-root {
    width: 100%;
    height: 100%;
    transform: scaleX(-1);
  }
`;

const GameScreen = ({ title, children, onBack }) => (
  <Root>
    {onBack && <BackButton onClick={() => onBack()}><ExitToApp /></BackButton>}
    {title && <Title>{title}</Title>}
    {children}
  </Root>
);

export default GameScreen;
