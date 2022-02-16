import logo from '../images/logo2.png';
import { Link, animateScroll as scroll } from 'react-scroll';
import { scroller } from 'react-scroll';
// console.log(Scroll);

const Navbar = () => {
  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <nav className='navbar sticky-top navbar-expand-lg navbar-light bg-light p-4'>
      <div className='container-fluid'>
        <div>
          <a
            className='navbar-brand'
            // href='https://alfonsoeg.com'
            // target='blank'
            onClick={toggleHome}
          >
            <img style={{ height: '45px', width: '45px' }} src={logo} alt='' />
          </a>
        </div>

        <button
          className='navbar-toggler'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#navbarNav'
          aria-controls='navbarNav'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon' />
        </button>
        <div className='collapse navbar-collapse' id='navbarNav'>
          <ul className='navbar-nav'>
            <li className='nav-item'>
              <Link
                activeClass='active'
                to='HomeSteps'
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className='nav-link'
              >
                How it works
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                activeClass='active'
                to='Projects'
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                className='nav-link'
              >
                Projects
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                activeClass='active'
                to='packages'
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                className='nav-link'
              >
                Packages
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                activeClass='active'
                to='team'
                spy={true}
                smooth={true}
                offset={-145}
                duration={500}
                className='nav-link'
              >
                The team
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                activeClass='active'
                to='gallery'
                spy={true}
                smooth={true}
                offset={-60}
                duration={500}
                className='nav-link'
              >
                Gallery
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                activeClass='active'
                to='faqs'
                spy={true}
                smooth={true}
                offset={-60}
                duration={500}
                className='nav-link'
              >
                FAQs
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                activeClass='active'
                to='contact'
                spy={true}
                smooth={true}
                offset={-60}
                duration={500}
                className='nav-link'
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
