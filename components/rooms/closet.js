import { Grid, Typography } from '@material-ui/core';
import Image from 'next/image';
import styled from 'styled-components';

import Screen from '../gamescreen';

const PaddedGrid = styled(Grid)`
  padding: 8px;
`;

const Closet = ({ onNext }) => (
  <Screen title="Janitor's Closet" onNext={onNext}>
    <PaddedGrid container spacing={0}>
      <Grid item xs={8}>
        <Typography gutterBottom variant="body2">
          You swing open the door only for the poor old woman to stumble out, clinging to you as you catch her in your arms. "Oh thank heavens, you found me! I've been in that closet since early this morning! Some one bumped into me and the door locked so I couldn't get out!"
        </Typography>
        <Typography gutterBottom variant="body2">
          With a furrowed brow, you asked why she was in the janitor's closet to begin with.  "I was just putting away the cleaning supplies I borrowed for cleaning up the art room. It was time and I wanted it spick and span for the new teacher."
        </Typography>
        <Typography gutterBottom variant="body2">
          New teacher? You hadn't known they had made a decision on that yet.  And where was she going? You thought the position was for next year.  Your face must have shown confusion because the elderly woman just chuckled and patted your cheek.  "You're a smart cookie. You'll figure it out. Don't forget we have an assembly first thing this morning." With that, the older woman walked away, muttering how she had to make herself look presentable.
        </Typography>
        <Typography gutterBottom variant="body2">
          Oh no! You forgot about that! You only had five minutes until class starts! You rushed back to your room only to find your students quietly going about their morning routine, attendance already in process and all your morning paperwork complete. Your admin sat at your desk, grinning widely at you.
        </Typography>
      </Grid>
      <Grid item xs={4}>
        <Image src="/closet1.png" width="250px" height="300px" />
      </Grid>
      <Grid item xs={11}>
        <Typography gutterBottom variant="body2">
          "I take it you found her."  You nod, still huffing slight from your sprint across campus, eying the children that were trying to stop their conspirator-like giggles. What were they up to?
          </Typography>
        <Typography gutterBottom variant="body2">
          You admin pats your shoulder and suggests you tidy up, leaving you to stare at her retreating form. "What about the assembly?"
          </Typography>
        <Typography gutterBottom variant="body2">
          "I take it you found her."  You nod, still huffing slight from your sprint across campus, eying the children that were trying to stop their conspirator-like giggles. What were they up to?
          </Typography>
      </Grid>
    </PaddedGrid>
  </Screen>
);

export default Closet;
