import logo from '../images/logo2.png';

const Footer = () => {
  return (
    <footer id='contact' className='pt-5 bg-black'>
      <div className='container-fluid'>
        <div className='row'>
          <div
            className='col-md-3 d-flex justify-content-center align-items-center'
            style={{ color: 'white' }}
          >
            <img
              className='img-fluid'
              style={{ maxHeight: '120px' }}
              src={logo}
              alt='Int Design Logo'
            />
          </div>
          <div className='col-md-3 mt-3'>
            <ul
              style={{ borderLeft: '1px solid white' }}
              className='text-start mb-3'
            >
              <li className='footer_list_item'>
                <a href='#'>Link to section</a>
              </li>
              <li className='footer_list_item'>
                <a href='#'>Link to section</a>
              </li>
              <li className='footer_list_item'>
                <a href='#'>Link to section</a>
              </li>
              <li className='footer_list_item'>
                <a href='#'>Link to section</a>
              </li>
              <li className='footer_list_item'>
                <a href='#'>Link to section</a>
              </li>
            </ul>
          </div>
          <div className='col-md-3 mt-3'>
            <ul
              style={{ borderLeft: '1px solid white' }}
              className='text-start mb-3'
            >
              <li className='footer_list_item'>
                <a href='#'>Link to section</a>
              </li>
              <li className='footer_list_item'>
                <a href='#'>Link to section</a>
              </li>
              <li className='footer_list_item'>
                <a href='#'>Link to section</a>
              </li>
              <li className='footer_list_item'>
                <a href='#'>Link to section</a>
              </li>
              <li className='footer_list_item'>
                <a href='#'>Link to section</a>
              </li>
            </ul>
          </div>
          <div className='col-md-3 mt-3'>
            <ul
              style={{ borderLeft: '1px solid white' }}
              className='text-start mb-3'
            >
              <li className='footer_list_item'>
                <a href='#'>Link to section</a>
              </li>
              <li className='footer_list_item'>
                <a href='#'>Link to section</a>
              </li>
              <li className='footer_list_item'>
                <a href='#'>Link to section</a>
              </li>
              <li className='footer_list_item'>
                <a href='#'>Link to section</a>
              </li>
              <li className='footer_list_item'>
                <a href='#'>Link to section</a>
              </li>
            </ul>
          </div>
        </div>
        <hr />
        <div className='pt-3' style={{ borderTop: '1px solid white' }}>
          <div className='row'>
            <div className='col-md-6 text-white'>
              <p>Call us on 0000 000 000</p>
              <a href='https://alfonsoeg.com'>
                <i className='bi bi-instagram' />
              </a>
              <a href='https://alfonsoeg.com'>
                <i className='px-3 bi bi-facebook' />
              </a>
              <a href='https://alfonsoeg.com'>
                <i className='bi bi-twitter' />
              </a>
              <a href='https://alfonsoeg.com'>
                <i className='px-3 bi bi-pinterest' />
              </a>
            </div>
            <div className='col-md-6 d-flex justify-content-center flex-column'>
              <p className='text-white'>
                Copyright [Year] [Brand name]. All rights reserved
              </p>
              <p>
                <a href='#'>Terms of Service</a>{' '}
                <a
                  style={{ borderLeft: '1px solid white' }}
                  className='px-1'
                  href='#'
                >
                  Privacy Policy
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
