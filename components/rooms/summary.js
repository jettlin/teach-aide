import styled from 'styled-components';
import Image from '../image';

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

const Summary = ({ onClick = (_rm) => { } }) => {
  return (
    <Root>
      <Title>Summary Room</Title>
      <Image src='/summary3.png' width="300px" height="200px" top="200px" left="200px" />
      <Image src='/summary2.png' width="300px" height="200px" top="200px" left="600px" />
      <Image src='/summary1.png' width="300px" height="200px" top="450px" left="50%" />
    </Root>
  );
};

export default Summary;
