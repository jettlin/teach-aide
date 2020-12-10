import Image from 'next/image';
import styled from 'styled-components';

const Root = styled.div`
  position: absolute;
  top: ${props => props['data-top']};
  left: ${props => props['data-left']};
  width: ${props => props['data-width']};
  height: ${props => props['data-height']};
  transform: translate(-50%, -50%);
`;

const PositionedImage = ({ src, height, width, top, left }) => (
  <Root data-width={width} data-top={top} data-height={height} data-left={left}>
    <Image src={src} layout='fill' />
  </Root>
);

export default PositionedImage;