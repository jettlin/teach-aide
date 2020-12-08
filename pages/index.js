import styled from 'styled-components';
import Image from 'next/image';
import { Button, Grid, Typography } from "@material-ui/core";

const Body = styled(Grid)`
  padding: 16px;
  margin-bottom: 16px;
`;

const Video = styled.iframe`
  margin-left: 24px;
`;

const CenterText = styled(Grid)`
  text-align: center;
`;

const Home = () => (
  <Body container spacing={0} alignItems="center">
    <CenterText item xs={12}>
      <Typography variant="h3" gutterBottom>Introduction</Typography>
    </CenterText>
    <Grid item xs={6}>
      <Typography gutterBottom>
        Children attend school to learn skills. They learn hard skills, such as reading, writing, math or how to talk in a different language. They also learn what is called soft skills. These are skills that employers look for as attributes in their future employees. Some of the skills they look for are adaptability, time management, conflict resolution and creativity. Creativity made the top ten skills on Indeed’s job skills board that employers look for. These companies are looking for, specifically, creative problem-solving skills. So how do teachers help their students learn this vital soft skill?
      </Typography>
    </Grid>
    <Grid item xs={6}>
      <Video
        width="560"
        height="315"
        src="https://www.youtube.com/embed/QbxyiUG5RRI"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullscreen
      />
    </Grid>
    <CenterText item xs={3}>
      <Image src="/index3.png" width="250" height="250" />
    </CenterText>
    <Grid item xs={6}>
      <Typography variant="h6" gutterBottom>
        So what is creative problem-solving?
      </Typography>
      <Typography gutterBottom>
        Creativity, loosely defined, is the process in which something new is created, be it an idea or product, where the creation is original, valued and implemented. However, this is not the only or best definition.
      </Typography>
    </Grid>
    <CenterText item xs={3}>
      <Image src="/index1.png" width="315" height="315" />
    </CenterText>
    <Grid item xs={6}>
      <Typography variant="h6" gutterBottom>
        Why is Creative Problem Solving Important in Education?
      </Typography>
      <Typography gutterBottom>
        According to Csikszentmihalyi and Wolfe, young people have learned to adapt and adjust to societal needs by learning the necessary skills from their elders. That changed at the beginning of the 19th century when schools began to take over teaching these skill sets to children. Now, the schools are in charge of providing society’s innovators, creators and futurists (Csikszentmihalyi, 2015). However, as Csikszentmihalyi points out, schools are not known for their creative installment, much less their abilities at teaching creative problem-solving (Csikszentmihalyi, 1999; Csikszentmihalyi, 2015). Others, such as Jefferson and Anderson, point out that there is creative problem solving being applied, but in other forms that are not easily recognized such as learning play, recess and social skills contexts (Jefferson and Anderson, 2017). But what HOW do we solve problems creatively?
      </Typography>
    </Grid>
    <CenterText item xs={6}>
      <Image src="/index2.png" width="560" height="315" />
    </CenterText>
    <Grid item xs={10}></Grid>
    <Grid item xs={2}>
      <Button onClick={() => window.location.href = '/story'} variant="contained" color="secondary">Lets Play A Game!</Button>
    </Grid>
  </Body>
);

export default Home;
