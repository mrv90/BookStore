import Header from './structure/Header';
import Footer from './structure/Footer';
import { useOutlet } from 'react-router-dom';
import Home from './pages/Home';

const App = () => {
  const outlet = useOutlet();
  return (
    <>
      <Header />
      {outlet || <Home />}
      <Footer />
    </>
  );
};

export default App;
