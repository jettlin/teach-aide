import { Typography } from '@material-ui/core';
import { useState } from 'react';
import styled from 'styled-components';
import { CheckCircleOutline } from '@material-ui/icons';

import Dialog from '../../dialog';
import Screen from '../../gamescreen';
import Image from '../../image';
import scripts from './scripts';

const Cabinet = styled.div`
  position: absolute;
  width: 100px;
  height: 100px;
  cursor: pointer;
  color: #66ff00;

  & .MuiSvgIcon-root {
    position: absolute;
    width: 100%;
    height: 100%;
  }
`;

const FirstCabinet = styled(Cabinet)`
  top: 300px;
  left: 435px;
`;

const SecondCabinet = styled(Cabinet)`
  top: 300px;
  left: 100px;
`;

const Main = ({ onBack = () => { }, onClick = (_spot) => { }, completed = [] }) => {
  const [showDialog, setShowDialog] = useState(null);

  let msg = null;
  if (showDialog)
    msg = ((scripts.main[showDialog] || {}).text || [])
      .flatMap((i, idx) => [<Typography key={idx} gutterBottom>{i}</Typography>, <br key={`${idx}=br`} />]);

  const handleClose = () => {
    onClick(showDialog);
    setShowDialog(null);
  }

  return (
    <>
      <Screen title="Clue: 2 Types of Thought" onBack={onBack}>
        <Image
          src='/classroom1.png'
          width="700px"
          height="475px"
          top="325px"
          left="50%"
          takeFocus={false}
        />
        <FirstCabinet onClick={() => setShowDialog('cabinet1')}>
          {completed.includes('cabinet1') && <CheckCircleOutline />}
        </FirstCabinet>
        <SecondCabinet onClick={() => setShowDialog('cabinet2')}>
          {completed.includes('cabinet2') && <CheckCircleOutline />}
        </SecondCabinet>
      </Screen>
      <Dialog onClose={handleClose} title={(scripts.main[showDialog] || {}).title} open={!!msg}>
        {msg}
      </Dialog>
    </>
  )
};

export default Main;