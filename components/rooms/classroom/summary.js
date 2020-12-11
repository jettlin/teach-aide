import Screen from '../../gamescreen';
import Image from '../../image';

const Summary = ({ onBack = () => { }, onClick = (_spot) => { }, completed = [] }) => (
  <Screen title="Classroom" onBack={onBack}>
    <Image
      src='/classroom1.png'
      width="300px"
      height="200px"
      top="200px"
      left="200px"
      onClick={() => onClick('main')}
      checked={['cabinet1', 'cabinet2'].every(val => completed.includes(val))}
    />
    <Image
      src='/classroom3.png'
      width="200px"
      height="200px"
      top="200px"
      left="600px"
      onClick={() => onClick('colors')}
      checked={completed.includes('colors')}
    />
    <Image
      src='/classroom4.png'
      width="200px"
      height="200px"
      top="450px"
      left="200px"
      onClick={() => onClick('bins')}
      checked={['red', 'orange', 'yellow', 'green', 'blue', 'purple'].every(val => completed.includes(val))}
    />
    <Image
      src='/classroom2.png'
      width="300px"
      height="200px"
      top="450px"
      left="600px"
      onClick={() => onClick('desk')}
      checked={completed.includes('desk')}
    />
  </Screen>
);

export default Summary;
