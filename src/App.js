import './App.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { ToastContainer, Zoom } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'animate.css/animate.min.css';
import { useState } from 'react';
import Navbar from './components/Navbar';
import Parallax from './sections/Parallax';
import logo from './images/stock2.jpg';
import HomeSteps from './sections/HomeSteps';
import RecentProjects from './sections/RecentProjects';
import FullServiceParallax from './sections/FullServiceParallax';
import RoomPackages from './sections/RoomPackages';
import QuestionsBanner from './sections/QuestionsBanner';
import ClientReview from './sections/ClientReviews';
import MeetTheTeam from './sections/MeetTheTeam';
import CarouselProjects from './sections/CarouselProjects';
import ChooseUs from './sections/ChooseUs';
import Faqs from './sections/FAQ';
import Footer from './sections/Footer';

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className='App container-fluid'>
      <ToastContainer
        position='top-center'
        autoClose={2500}
        pauseOnFocusLoss={false}
        pauseOnHover={false}
        theme='dark'
        transition={Zoom}
      />
      <Navbar />

      <Parallax
        url={logo}
        children={'Design your dream home.'}
        subtitle={'Find out how'}
      />
      <HomeSteps />
      <RecentProjects />
      <FullServiceParallax />
      <RoomPackages />
      <QuestionsBanner />
      <ClientReview />
      <MeetTheTeam />
      <CarouselProjects />
      <ChooseUs />
      <Faqs />
      <Footer />
    </div>
  );
}

export default App;
