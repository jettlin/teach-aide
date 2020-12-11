import { useState } from 'react';
import { Typography } from '@material-ui/core';

import Scripts from './loungeScripts';
import Screen from '../gamescreen';
import Image from '../image';
import Dialog from '../dialog';

const Lounge = ({ onBack = () => { }, onClick = (_spot) => { }, completed = [] }) => {
  const [msg, setMsg] = useState(null);
  const [showBoard, setShowBoard] = useState(false);

  let msgText = null;
  if (['sink', 'vending'].includes(msg))
    msgText = ((Scripts[msg] || {}).text || [])
      .flatMap((i, idx) => [<Typography key={idx} gutterBottom>{i}</Typography>, <br key={`${idx}_br`} />]);

  const handleClick = (name) => {
    setMsg(name);

    if (name === 'board') setShowBoard(true);
  }

  const handleClose = () => {
    onClick('lounge', msg);
    setMsg(null);
    setShowBoard(false);
  }

  return (
    <>
      <Screen title="Teacher's Lounge" onBack={onBack}>
        <Image
          src='/lounge1.jpg'
          width="300px"
          height="200px"
          top="200px"
          left="200px"
          onClick={() => handleClick('vending')}
          checked={completed.includes('vending')}
        />
        <Image
          src='/lounge2.jpg'
          width="300px"
          height="200px"
          top="200px"
          left="600px"
          onClick={() => handleClick('sink')}
          checked={completed.includes('sink')}
        />
        <Image
          src='/lounge3.jpg'
          width="300px"
          height="200px"
          top="450px"
          left="400px"
          onClick={() => handleClick('board')}
          checked={completed.includes('board')}
        />
      </Screen>
      <Dialog onClose={handleClose} title={(Scripts[msg] || {}).title} open={!!msgText}>
        {msgText}
      </Dialog>
      <Dialog onClose={handleClose} title="Post-It Board" open={showBoard}>
        <Typography gutterBottom>Teacher Guidelines for Generating Strategies</Typography>
        <ul>
          <li><Typography>Defer Judgement</Typography></li>
          <li><Typography>Strive for Quantity</Typography></li>
          <li><Typography>Free wheel Ideas</Typography></li>
          <li><Typography>Seek Combinations</Typography></li>
        </ul>
        <Typography gutterBottom>Teacher Guidelines for Focusing Strategies</Typography>
        <ul>
          <li><Typography>Use affirmative Judgement</Typography></li>
          <li><Typography>Be Deliberate</Typography></li>
          <li><Typography>Consider Novelty</Typography></li>
          <li><Typography>Stay on course</Typography></li>
        </ul>
      </Dialog>
    </>
  );
};

export default Lounge;
