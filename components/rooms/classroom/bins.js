import { Typography } from '@material-ui/core';
import { useState } from 'react';
import styled from 'styled-components';
import { CheckCircleOutline } from '@material-ui/icons';

import Dialog from '../../dialog';
import Screen from '../../gamescreen';
import Image from '../../image';
import scripts from './scripts';

const Bin = styled.div`
  position: absolute;
  width: 75px;
  height: 75px;
  cursor: pointer;
  color: #66ff00;
  top: ${props => props['data-top']};
  left: ${props => props['data-left']};

  & .MuiSvgIcon-root {
    position: absolute;
    width: 100%;
    height: 100%;
  }
`;

const Bins = ({ onBack = () => { }, onClick = (_spot) => { }, completed = [] }) => {
  const [showDialog, setShowDialog] = useState(null);

  let msg = null;
  if (showDialog)
    msg = ((scripts.bins[showDialog] || {}).text || [])
      .flatMap((i, idx) => [<Typography key={idx} gutterBottom>{i}</Typography>, <br key={`${idx}_br`} />]);

  const handleClose = () => {
    onClick(showDialog);
    setShowDialog(null);
  }

  return (
    <>
      <Screen title="Clue: Generating Strategies" onBack={onBack}>
        <Image
          src='/classroom4.png'
          width="500px"
          height="500px"
          top="calc(50% + 35px)"
          left="50%"
          takeFocus={false}
        />
        <Bin data-top="225px" data-left="200px" onClick={() => setShowDialog('red')}>
          {completed.includes('red') && <CheckCircleOutline />}
        </Bin>
        <Bin data-top="400px" data-left="275px" onClick={() => setShowDialog('orange')}>
          {completed.includes('orange') && <CheckCircleOutline />}
        </Bin>
        <Bin data-top="275px" data-left="340px" onClick={() => setShowDialog('yellow')}>
          {completed.includes('yellow') && <CheckCircleOutline />}
        </Bin>
        <Bin data-top="360px" data-left="400px" onClick={() => setShowDialog('green')}>
          {completed.includes('green') && <CheckCircleOutline />}
        </Bin>
        <Bin data-top="450px" data-left="465px" onClick={() => setShowDialog('blue')}>
          {completed.includes('blue') && <CheckCircleOutline />}
        </Bin>
        <Bin data-top="225px" data-left="535px" onClick={() => setShowDialog('purple')}>
          {completed.includes('purple') && <CheckCircleOutline />}
        </Bin>
      </Screen>
      <Dialog onClose={handleClose} title={(scripts.bins[showDialog] || {}).title} open={!!msg}>
        {msg}
      </Dialog>
    </>
  )
};

export default Bins;