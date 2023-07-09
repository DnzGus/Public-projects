import './App.css';
import NavBar from './components/NavBarComponents/NavBar';
import { Outlet } from 'react-router-dom';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className='cursor-default font-quicksand bg-gradient-to-b from-sky-700 from-15% via-sky-800 via-40% to-sky-900 to-60%'>
      <NavBar />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
