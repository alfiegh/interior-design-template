import stock6 from '../images/stock6.jpeg';
import { ArrowRightOutlined } from '@ant-design/icons';

const FullServiceParallax = () => {
  //   const url = stock6;
  return (
    <div
      className='container-fluid'
      style={{
        background:
          'linear-gradient(rgba(0,0,0,0.2) 20%, rgba(0,0,0,0.2) 100%), url( ' +
          stock6 +
          ' ) center center / cover no-repeat',

        backgroundAttachment: 'fixed',
        padding: '0px 0px 75px 0px',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        display: 'block',
        height: '500px',
        width: '100%',
      }}
    >
      <div className='animate__animated animate__fadeIn d-flex justify-content-end flex-column position-relative top-50'>
        <h1
          style={{ fontWeight: '600', textShadow: '2px 2px 2px black' }}
          className=' display-4 text-white text-end d-flex justify-content-center px-5 '
        >
          Make your house
          <br />
          fell like a Home
        </h1>
        <div className='d-flex justify-content-center'>
          <button
            style={{
              width: '300px',
              border: '2px solid black',
              borderRadius: '20px',
              fontWeight: '600',
              backgroundColor: 'black',
            }}
            className='p-2 m-5 text-uppercase text-white'
          >
            Interior Design Services
            <ArrowRightOutlined className='fw-bold px-1 d-inline-flex justify-content-center align-items-center' />
          </button>
        </div>
      </div>
    </div>
  );
};

export default FullServiceParallax;
