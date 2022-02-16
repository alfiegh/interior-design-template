import logo from '../images/stock2.jpg';

const HeroBanner = () => {
  return (
    <>
      <img
        src={logo}
        alt='Banner'
        style={{
          backgroundAttachment: 'fixed',
          padding: '0px 0px 75px 0px',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: 'center center',
          display: 'block',
          height: '110vh',
          width: '100%',
        }}
      />
      <h1>Hi!</h1>
    </>
  );
};

export default HeroBanner;
