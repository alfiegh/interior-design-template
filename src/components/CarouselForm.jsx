const CarouselForm = ({ url1, url2, url3, children, nextSlide }) => {
  return (
    <section className='container-fluid mt-5'>
      <div className='row mt-5 d-flex justify-content-around'>
        <div className='col-md-4 mt-3'>
          <img
            src={url1}
            alt='Carousel 1'
            className='img-fluid'
            style={{ width: '300px', height: '300px' }}
          />
          <p>{children}</p>
        </div>
        <div className='col-md-4 mt-3 hiw '>
          <img
            src={url2}
            alt='Carousel 2'
            className='img-fluid'
            style={{ width: '300px', height: '300px' }}
          />
          <p>{children}</p>
        </div>
        <div className='col-md-4 mt-3 hiw'>
          <img
            src={url3}
            alt='Carousel 3'
            className='img-fluid'
            style={{ width: '300px', height: '300px' }}
          />
          <p>{children}</p>
        </div>
      </div>
      {/* <button onClick={nextSlide}>
        <ArrowRightOutlined className='fw-bold px-2 d-inline-flex justify-content-center align-items-center' />
      </button> */}
    </section>
  );
};

export default CarouselForm;
