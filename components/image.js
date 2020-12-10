import Image from 'next/image';
import styled from 'styled-components';
import { CheckCircleOutline } from '@material-ui/icons';

const Root = styled.div`
  position: absolute;
  top: ${props => props['data-top']};
  left: ${props => props['data-left']};
  width: ${props => props['data-width']};
  height: ${props => props['data-height']};
  transform: translate(-50%, -50%);
  
  color: #66ff00;
  font-size: 100%;

  &[data-takefocus=true] {
    cursor: pointer;

    &:hover {
      box-shadow: 0 0 15px yellow;
    }
  }

  & .MuiSvgIcon-root {
    position: absolute;
    width: 100%;
    height: 100%;
  }
`;

const PositionedImage = ({ src, height, width, top, left, onClick, checked, takeFocus = true }) => (
  <Root data-width={width} data-top={top} data-height={height} data-left={left} onClick={onClick} data-takefocus={takeFocus}>
    <Image src={src} layout='fill' />
    {checked && <CheckCircleOutline />}
  </Root>
);

export default PositionedImage;