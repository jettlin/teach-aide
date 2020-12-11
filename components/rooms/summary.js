import Image from '../image';

import Screen from '../gamescreen';

const Summary = ({ onClick = (_rm) => { }, completed = [], onNext }) => {
  return (
    <Screen title="Summary Room" onNext={onNext}>
      <Image
        src='/summary3.png'
        width="300px"
        height="200px"
        top="200px"
        left="200px"
        onClick={() => onClick('admin')}
        checked={completed.includes('admin')}
      />
      <Image
        src='/summary2.png'
        width="300px"
        height="200px"
        top="200px"
        left="600px"
        onClick={() => onClick('lounge')}
        checked={completed.includes('lounge')}
      />
      <Image
        src='/summary1.png'
        width="300px"
        height="200px"
        top="450px"
        left="50%"
        onClick={() => onClick('class')}
        checked={completed.includes('class')}
      />
    </Screen>
  );
};

export default Summary;
