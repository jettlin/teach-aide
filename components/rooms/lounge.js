import { useState } from 'react';
import { Typography } from '@material-ui/core';

import Screen from '../gamescreen';
import Image from '../image';
import Dialog from '../dialog';

const Lounge = ({ onBack = () => { }, onClick = (_rm, _spot) => { }, completed = [] }) => {
  return (
    <Screen title="Lounge" onBack={onBack}>
    </Screen>
  );
};

export default Lounge;
