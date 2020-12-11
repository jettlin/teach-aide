import { useState } from "react";
import { Typography } from '@material-ui/core';

import * as Rooms from '../components/rooms';
import Dialog from '../components/dialog';

const Game = () => {
  const [curRoom, setCurRoom] = useState('summary');
  const [found, updateFound] = useState({
    admin: { found: [], max: 1 },
    class: { found: [], max: 10 },
    lounge: { found: [], max: 3 },
  });

  const updateRoom = (name, spot) => {   
    if (found[name].found.includes(spot)) return;

    const updated = { ...found };
    updated[name].found = [...updated[name].found, spot].filter((v, i, self) => self.indexOf(v) === i);

    updateFound(updated);
  }

  const completedRooms = Object.keys(found).filter(i => found[i].found.length === found[i].max);

  // alert(completedRooms);
  // alert(JSON.stringify(found.lounge.found));

  let onNext = null;
  if (completedRooms.length === Object.keys(found).length) onNext = () => setCurRoom('closet');

  let display = <Rooms.Summary onClick={(rm) => setCurRoom(rm)} completed={completedRooms} onNext={onNext} />;
  if (curRoom === 'class')
    display = <Rooms.Classroom completed={found.class.found} onClick={updateRoom} onBack={() => setCurRoom('summary')} />;
  if (curRoom === 'lounge')
    display = <Rooms.Lounge completed={found.lounge.found} onClick={updateRoom} onBack={() => setCurRoom('summary')} />;
  if (curRoom === 'closet')
    display = <Rooms.Closet onNext={() => setCurRoom('assembly')} />;
  if (curRoom === 'assembly');
    display = <Rooms.Assembly />;

  const handleAdminDialog = () => {
    updateRoom('admin', 'all');
    setCurRoom('summary');
  }

  return (
    <>
     {display}
     <Dialog onClose={handleAdminDialog} title="Jennifer Ettlin, aka The Administrator" open={curRoom === 'admin'}>
        <Typography gutterBottom>
          "What are you looking at me for? I don't know anything more than you do!"
        </Typography>
        <br />
        <Typography gutterBottom>
          Well, that was less than useful.
        </Typography>
        <br />
        <Typography gutterBottom>
          Huh. You always figured that she would help you since she's a dedicated teacher and fellow adventure lover. You'd thought she'd want to follow you along on your journey and record it so she can make a mock-up for her students at some point.  It also seems that despite the fact the Ms. Ettlin is a student in Dr. Bernard Andrew's creativity class, she doesn't seem to have a clue about any of this either. She may have set up your adventure, but it didn't seem like she will be much help.
        </Typography>
        <br />
        <Typography gutterBottom>
          She is quick to make an excuse to escape, commenting something about preparing for an assembly or something. 
        </Typography>
        <br />
        <Typography gutterBottom>
          ...And she's gone
        </Typography>
        <br />
        <Typography gutterBottom>
          Guess you're on your own.
        </Typography>
      </Dialog>
    </>
  );
};

export default Game;
