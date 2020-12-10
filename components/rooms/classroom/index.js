import { useState } from 'react';
import { Typography } from '@material-ui/core';

import Summary from './summary';
import Dialog from '../../dialog';

const Classroom = ({ onBack = () => { }, onClick = (_rm, _spot) => { }, completed = [] }) => {
  const [curView, setCurView] = useState('summary');
  const [noItems, setNoItems] = useState(false);

  const handleDisplay = (spot) => {
    if (['desk', 'colors'].includes(spot)) {
      setNoItems(true);
      onClick('class', spot);
    } else {
      setCurView(spot);
    }
  };

  let display = <Summary onBack={onBack} onClick={handleDisplay} completed={completed} />;

  return (
    <>
      {display}
      <Dialog onClose={() => setNoItems(false)} title="Nothing here..." open={noItems}>
        <Typography>Nothing to be found here...</Typography>
      </Dialog>
    </>
  )
};

export default Classroom;