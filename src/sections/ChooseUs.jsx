import Fade from 'react-reveal/Fade';

const ChooseUs = () => {
  return (
    <section>
      <div className='container-fluid mb-5'>
        <div className='text-center py-5'>
          {' '}
          <h1 className='text-uppercase fw-bold'>Why us</h1>
          <h2>For this and much more</h2>
        </div>
        <div className='mt-5'>
          <div className='row'>
            <Fade bottom delay={150}>
              <div className='col-md-6 col-lg-3 mb-5 mb-lg-0'>
                <span className='mx-auto service-icon rounded-circle mb-3'>
                  <i className='bi bi-person-fill' />
                </span>
                <h4>
                  <strong>Profesional Team</strong>
                </h4>
                <p
                  className='mb-0'
                  style={{ fontWeight: '200', textAlign: 'justify' }}
                >
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem
                  ipsum dolor sit amet consectetur adipisicing elit.
                </p>
              </div>
              <div className='col-md-6 col-lg-3 mb-5 mb-lg-0'>
                <span className='mx-auto service-icon rounded-circle mb-3'>
                  <i className='bi bi-house-door-fill' />
                </span>
                <h4>
                  <strong>Bring you home</strong>
                </h4>
                <p
                  className='mb-0'
                  style={{ fontWeight: '200', textAlign: 'justify' }}
                >
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem
                  ipsum dolor sit amet consectetur adipisicing elit.
                </p>
              </div>
              <div className='col-md-6 col-lg-3 mb-5 mb-lg-0'>
                <span className='mx-auto service-icon rounded-circle mb-3'>
                  <i className='bi bi-star-fill' />
                </span>
                <h4>
                  <strong>Bespoke services</strong>
                </h4>
                <p
                  className='mb-0'
                  style={{ fontWeight: '200', textAlign: 'justify' }}
                >
                  <span>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </span>
                </p>
              </div>
              <div className='col-md-6 col-lg-3 mb-5 mb-lg-0'>
                <span className='mx-auto service-icon rounded-circle mb-3'>
                  <i className='bi bi-chat-heart-fill' />
                </span>
                <h4>
                  <strong>We listen to you</strong>
                </h4>
                <p
                  className='mb-0'
                  style={{ fontWeight: '200', textAlign: 'justify' }}
                >
                  <span>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </span>
                </p>
              </div>
            </Fade>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChooseUs;
