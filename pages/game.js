import { useState } from "react";
import { Typography } from '@material-ui/core';

import * as Rooms from '../components/rooms';
import Dialog from '../components/dialog';

const Game = () => {
  const [curRoom, setCurRoom] = useState('summary');
  const [found, updateFound] = useState({
    admin: { found: [], max: 1 },
    class: { found: [], max: 9 },
    lounge: { found: [], max: 3 },
  });

  const updateRoom = (name, spot) => {
    if (found[name].found.includes(spot)) return;

    const updated = { ...found };
    updated[name].found = [...updated[name].found, spot].filter((v, i, self) => self.indexOf(v) === i);

    updateFound(updated);
  }

  const completedRooms = Object.keys(found).filter(i => found[i].found.length === found[i].max);

  let display = <Rooms.Summary onClick={(rm) => setCurRoom(rm)} completed={completedRooms} />;
  // if (curRoom === 'class') display = <Rooms.Classroom found={found.class.found} />;

  const handleAdminDialog = () => {
    updateRoom('admin', 'all');
    setCurRoom('summary');
  }

  return (
    <>
     {display}
     <Dialog onClose={handleAdminDialog} title="Talking to Administrator" open={curRoom === 'admin'}>
        <Typography>TBD...</Typography>
      </Dialog>
      <Dialog onClose={() => setCurRoom('summary')} title="Not Implemented" open={!['admin', 'summary'].includes(curRoom)}>
        <Typography>This has not yet been implemented.  Please try again later...</Typography>
      </Dialog>
    </>
  );
};

export default Game;
