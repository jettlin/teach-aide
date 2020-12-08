import styled from 'styled-components';
import Image from 'next/image';
import { Button, Grid, Typography } from "@material-ui/core";

const Body = styled(Grid)`
  padding: 16px;
  margin-bottom: 16px;
`;

const CenterText = styled(Grid)`
  text-align: center;
`;

const Story = () => (
  <Body container spacing={0} alignItems="center" justify="center">
    <CenterText item xs={12}>
      <Typography variant="h3" gutterBottom>One day...</Typography>
    </CenterText>
    <Grid item xs={6}>
      <Typography gutterBottom>
        Oh, no! Your students’ favorite art teacher, Ms. Bartz, has disappeared! Your administrator wants YOU to find her since you spend the most time with the elderly woman talking about STEM activities and ideas. You have to know something right? And you have to solve this mystery before school starts!
      </Typography>
    </Grid>
    <CenterText item xs={6}>
      <Image src="/story1.png" width="250" height="350" />
    </CenterText>
    <CenterText item xs={6}>
      <Image src="/story2.png" width="250" height="250" />
    </CenterText>
    <Grid item xs={6}>
      <Typography gutterBottom>
        All your kids will be here in twenty minutes, so you have to act fast. Maybe there is a clue somewhere in this room? Huh. That's odd. Usually Ms. Bartz's room is a mess from all the art projects laying around. The paint supplies are usually spilled, there are normally crayons scattered around and all of the colored tissue paper is usually spread across the tables for kids to grab. And yet nothing is set up like normal.  It's all pristine and clean.
      </Typography>
    </Grid>
    <Grid item xs={6}>
      <Typography gutterBottom>
        But wait…is there a clue here? Did Ms. Bartz leave clues about her abductors that only a creative problem solver like you would know how to decipher?
      </Typography>
    </Grid>
    <CenterText item xs={6}>
      <Image src="/story3.png" width="250" height="250" />
    </CenterText>
    <CenterText item xs={12}>
      <Typography gutterBottom>
        Let’s hope you’re up to the challenge! Ms. Bartz and the future of the school arts program depends on you and your knowledge of creative problem solving!
      </Typography>
    </CenterText>
    <Grid item xs={1}>
      <Button onClick={() => window.location.href = '/game'} variant="contained" color="primary">Lets Go!</Button>
    </Grid>
  </Body>
);

export default Story;
