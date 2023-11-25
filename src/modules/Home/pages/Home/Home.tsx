import dynamic from 'next/dynamic';
import { Footer, Navbar } from 'components';
import {
  About,
  Alumni,
  Community,
  Contribute,
  Courses,
  Events,
  Main,
  Merch,
  Numbers,
  Partnered,
  Pictures,
  Principles,
  School,
  Speakers,
  Support,
} from 'modules/Home/components';

// Because of react-double-marquee lib, styles are differ on the server and client,
// therefore used dynamic imports.
const DynamicPlaces = dynamic(() => import('../../components/Places/Places'), {
  ssr: false,
});

export const Home = () => (
  <div className="App">
    <Navbar />
    <Main />
    <About />
    <Numbers />
    <DynamicPlaces />
    <Pictures />
    <School />
    <Principles />
    <Courses />
    <Alumni />
    <Events />
    <Speakers />
    <Merch />
    <Community />
    <Contribute />
    <Support />
    <Partnered />
    <Footer />
  </div>
);
