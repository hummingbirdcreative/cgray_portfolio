import BgAnimation from '../components/BackgrooundAnimation/BackgroundAnimation';
import Hero from '../components/Hero/Hero';
import Projects from '../components/Projects/Projects';
import Technologies from '../components/Technologies/Technologies';
import Timeline from '../components/TimeLine/TimeLine';
import Contact from '../components/Contact/Contact';
import SVG from '../components/SVG/SVG';
import { Layout } from '../layout/Layout';
import { Section } from '../styles/GlobalComponents';

const Home = () => {
  return (
    <Layout>
      <Section grid> 
        <Hero />
        <BgAnimation /> 
       </Section>
      <SVG />
      <Projects />
      <Technologies />
      <Timeline />
      <Contact />
    </Layout>
  );
};

export default Home;
