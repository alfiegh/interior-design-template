import stock2 from '../images/stock2.jpeg';
import stock3 from '../images/stock3.jpeg';
import stock4 from '../images/stock4.jpeg';
import stock7 from '../images/stock7.jpeg';
import stock8 from '../images/stock8.jpeg';

const CarouselProjects = () => {
  return (
    <section id='gallery' className='container-fluid mb-5'>
      <div
        className='col-md-8 offset-md-2 d-flex flex-column justify-content-center '
        style={{ maxHeight: 'calc(100%/2)' }}
      >
        <div className='text-center py-5'>
          <h1 className='text-uppercase fw-bold'>Check our gallery</h1>
          <h2>If you are looking for inspiration</h2>
        </div>
        <div
          id='carouselExampleCaptions'
          className='carousel slide'
          data-bs-ride='carousel'
        >
          <div className='carousel-indicators'>
            <button
              type='button'
              data-bs-target='#carouselExampleCaptions'
              data-bs-slide-to={0}
              className='active'
              aria-current='true'
              aria-label='Slide 1'
            />
            <button
              type='button'
              data-bs-target='#carouselExampleCaptions'
              data-bs-slide-to={1}
              aria-label='Slide 2'
            />
            <button
              type='button'
              data-bs-target='#carouselExampleCaptions'
              data-bs-slide-to={2}
              aria-label='Slide 3'
            />
            <button
              type='button'
              data-bs-target='#carouselExampleCaptions'
              data-bs-slide-to={3}
              aria-label='Slide 4'
            />
            <button
              type='button'
              data-bs-target='#carouselExampleCaptions'
              data-bs-slide-to={4}
              aria-label='Slide 5'
            />
          </div>
          <div className='carousel-inner'>
            <div className='carousel-item active'>
              <img src={stock2} className='d-block w-100' alt='...' />
              <div className='carousel-caption d-none d-md-block'>
                <h3
                  style={{
                    fontWeight: '900',
                    color: 'white',
                    textShadow: '2px 2px black',
                  }}
                >
                  FUNCTIONAL
                </h3>
                <p
                  style={{
                    fontWeight: '700',
                    color: 'white',
                    textShadow: '2px 2px black',
                  }}
                >
                  A link here for the project in the image.
                </p>
              </div>
            </div>
            <div className='carousel-item'>
              <img src={stock4} className='d-block w-100' alt='...' />
              <div className='carousel-caption d-none d-md-block'>
                <h3
                  style={{
                    fontWeight: '900',
                    color: 'white',
                    textShadow: '2px 2px black',
                  }}
                >
                  BESPOKE
                </h3>
                <p
                  style={{
                    fontWeight: '700',
                    color: 'white',
                    textShadow: '2px 2px black',
                  }}
                >
                  A link here for the project in the image.
                </p>
              </div>
            </div>
            <div className='carousel-item'>
              <img src={stock3} className='d-block w-100' alt='...' />
              <div className='carousel-caption d-none d-md-block'>
                <h3
                  style={{
                    fontWeight: '900',
                    color: 'white',
                    textShadow: '2px 2px black',
                  }}
                >
                  INNOVATIVE
                </h3>
                <p
                  style={{
                    fontWeight: '700',
                    color: 'white',
                    textShadow: '2px 2px black',
                  }}
                >
                  A link here for the project in the image.
                </p>
              </div>
            </div>
            <div className='carousel-item'>
              <img src={stock7} className='d-block w-100' alt='...' />
              <div className='carousel-caption d-none d-md-block'>
                <h3
                  style={{
                    fontWeight: '900',
                    color: 'white',
                    textShadow: '2px 2px black',
                  }}
                >
                  VERSATILE
                </h3>
                <p
                  style={{
                    fontWeight: '700',
                    color: 'white',
                    textShadow: '2px 2px black',
                  }}
                >
                  A link here for the project in the image.
                </p>
              </div>
            </div>
            <div className='carousel-item'>
              <img src={stock8} className='d-block w-100' alt='...' />
              <div className='carousel-caption d-none d-md-block'>
                <h3
                  style={{
                    fontWeight: '900',
                    color: 'white',
                    textShadow: '2px 2px black',
                  }}
                >
                  ECLECTIC
                </h3>
                <p
                  style={{
                    fontWeight: '700',
                    color: 'white',
                    textShadow: '2px 2px black',
                  }}
                >
                  A link here for the project in the image.
                </p>
              </div>
            </div>
          </div>
          <button
            className='carousel-control-prev'
            type='button'
            data-bs-target='#carouselExampleCaptions'
            data-bs-slide='prev'
          >
            <span className='carousel-control-prev-icon' aria-hidden='true' />
            <span className='visually-hidden'>Previous</span>
          </button>
          <button
            className='carousel-control-next'
            type='button'
            data-bs-target='#carouselExampleCaptions'
            data-bs-slide='next'
          >
            <span className='carousel-control-next-icon' aria-hidden='true' />
            <span className='visually-hidden'>Next</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default CarouselProjects;
