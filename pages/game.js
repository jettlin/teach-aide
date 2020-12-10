import { useState } from "react";

import * as Rooms from '../components/rooms';

const Game = () => {
  const [curRoom, setCurRoom] = useState('summary');
  const [found, updateFound] = useState({
    admin: { found: [], max: 1 },
    class: { found: [], max: 9 },
    lounge: { found: [], max: 3 },
  });

  const updateRoom = (name, spot) => {
    const updated = { ...found };
    updated[name].found.push(spot);

    updateFound(updated.filter((v, i, self) => self.indexOf(v) === i));
  }

  let display = <Rooms.Summary />;

  return (
    <>
     {display}
    </>
  );
};

export default Game;
