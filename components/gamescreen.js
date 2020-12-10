import styled from 'styled-components';

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

const GameScreen = ({ title, children }) => (
  <Root>
    {title && <Title>{title}</Title>}
    {children}
  </Root>
);

export default GameScreen;
