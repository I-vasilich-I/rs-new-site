import { Navbar } from './components/Header/Navbar';
import { Main } from './components/Main/Main';
import { About } from './components/About/About';
import { RSNumbers } from './components/RSNumbers/RSNumbers';
import { RSPlaces } from './components/RSPlaces/RSPlaces';
import { RSPictures } from './components/RSPictures/RSPictures';
import './App.scss';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Main />
      <About />
      <RSNumbers />
      <RSPlaces />
      <RSPictures />
    </div>
  );
}

export default App;
