import { Button, Typography } from "@material-ui/core";
import styled from 'styled-components';
import Image from 'next/image';

const Body = styled.div`
  padding: 16px;
  margin-bottom: 16px;
`;

const CenterText = styled(Typography)`
  text-align: center;
`;

const Container = styled.div`
  width: 100%;
  text-align: center;
  margin-top: 24px;
  margin-bottom: 24px;
`;

const Assembly = ({ onReset }) => (
  <Body>
    <CenterText variant="h3" gutterBottom>Later...</CenterText>
    <Typography gutterBottom>
      It was bright in the auditorium when you and your students entered, the buzzing chatter seeming to become louder as your class entered. The entire school seemed to be there. Even the teachers that seemed AWOL this morning were calmly sitting in the bleachers amongst their students. You stood by the door as your class entered, the last one it seemed, monitoring for any misbehavior.
    </Typography>
    <Typography gutterBottom>
      Luckily there seemed to be none, which were good with the number of parents sitting in the fold-up chairs.  Well this was odd. Normally parents weren't allowed in the smaller school assemblies, their appearance usually only present when someone was getting an award or there was a major change that the whole community needed to know about. You wondered what it was.
    </Typography>
    <Typography gutterBottom>
      The moment you stepped in, the whole room stood in applause, yelling  and cheering for no discernible reason. You stood at the entrance flabbergasted. What was going on?  From the middle of the stage, your admin grinned at you, waving you up, Ms. Bartz by her side and Mr. Norville, one of the other candidates for the art teacher position. You two were fairly close as co-teachers.
    </Typography>
    <Container>
      <Image src="/assembly1.png" width="500px" height="300px" />
    </Container>
    <Typography gutterBottom>
      As you approached, your class behind you screamed and cheered the loudest it seemed. However, you were too busy staring at the large screen flashing images behind the trio. It took a minute for you to realize what it was, nearly stumbling on the stage steps as you first paled then felt your cheeks turn a bright red. It was your adventures trying to find Ms. Bartz this morning. Great Gatsby, has the whole school been watching you the whole time?
    </Typography>
    <Typography gutterBottom>
      The applause continued as you stood there awkwardly beside the other, you Admin allowing the celebration to occur only for a few moments before starting.
    </Typography>
    <Typography gutterBottom>
      "First, let me thank Mr. Norville for starting us off today and leading this assembly while we took care of other things. As Mr. Norville mentioned earlier, today is a short assembly, but vastly important to our school and our community. We would like to announce that Ms. Bartz will be leaving us today." A chorus of groans and distraught noises erupted. You assume the kids were unaware of that today would be her last day. The principle held up her hand and waited for silence before continuing.
    </Typography>
    <Typography gutterBottom>
      "Instead of being with us here, she will be the new district Art Director." You couldn't help the grin at the announcement. She was a great lady. She deserved it. The students thought so apparently, as they cheered for her.
    </Typography>
    <Typography gutterBottom>
      "Mr. Norville," she continued once it was silent, "Will be the new art teacher." Another roar of cheers and while you smiled and celebrated with your friend, happy for him, you were a bit disappointed that you didn't get the job. And a bit confused. Why were you up here then? "-will be our new Creative Studies instructor!" The noise that followed at that exact moment was deafening. Wait, what happened?
    </Typography>
    <Typography gutterBottom>
      You blinked owlishly as you were patted on the back by Mr. Norville and guided to a set of seats off to the side of the stage while the lights dimmed and the video of your escapades played across the screen. Quietly, you lean over to Mr. Norville, whispering as you asked him what you missed. Your admin, who was sitting on the other side of you, answered quietly instead.
    </Typography>
    <Typography gutterBottom>
      "You're the new Creative Studies teacher. I'll expect your curriculum plans on my desk by Monday. You might want to start with something easy. Like an escape room." Her eyes twinkled as you groaned about going through all of that again.
    </Typography>
    <Typography gutterBottom align="right">
      <Button onClick={onReset}>
        Good job! You solved the puzzle! Head home?
      </Button>
    </Typography>
  </Body>
);

export default Assembly;
