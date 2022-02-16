import { toast } from 'react-toastify';
import Slide from 'react-reveal/Slide';
import Rotate from 'react-reveal/Rotate';

const Parallax = ({ url, children, subtitle }) => {
  return (
    <div
      className='container-fluid'
      style={{
        background:
          'linear-gradient(rgba(0,0,0,0.3) 20%, rgba(0,0,0,0.3) 100%), url( ' +
          url +
          ' ) center center / cover no-repeat',

        backgroundAttachment: 'fixed',
        padding: '0px 0px 75px 0px',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        display: 'block',
        height: '100vh',
        width: '100%',
      }}
    >
      <Rotate top left>
        <h1
          style={{ textShadow: '2px 2px 2px black', fontWeight: '400' }}
          className='display-1 font-weight-bold text-white position-absolute top-50 start-50 translate-middle'
        >
          {children}
        </h1>
      </Rotate>
      <Slide top>
        <button
          onClick={() =>
            toast.success(
              'On your real website this will take you to a new page of your design'
            )
          }
          style={{
            textShadow: '2px 2px 2px black',
            background: 'black',
            border: '2px solid white',
            borderRadius: '20px',
            fontSize: '20px',
            letterSpacing: '2px',
            marginTop: '5rem',
            width: '200px',
            fontWeight: '400',
            padding: '0.5rem',
          }}
          className='animate__animated animate__fadeIn text-white position-relative top-50 translate-end'
        >
          {subtitle}
        </button>
      </Slide>
    </div>
  );
};

export default Parallax;
