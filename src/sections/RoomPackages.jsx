// import { useState } from 'react';
import room1 from '../images/room1.jpeg';
import room2 from '../images/room2.jpeg';
import room3 from '../images/room3.jpeg';
import { toast } from 'react-toastify';
import PackageForm from '../components/PackageForm';
import Fade from 'react-reveal/Fade';

const RoomPackages = () => {
  //   const [isActive, setIsActive] = useState(false);
  const notification = () => {
    toast.success('On your real website this will take you to another page');
  };

  const featuresOne = [
    'Design proposals and features here',
    'Design proposals and features here',
    'Design proposals and features here',
    'Design proposals and features here',
  ];

  const featuresTwo = [
    'Design proposals and features here 2',
    'Design proposals and features here 2',
    'Design proposals and features here 2',
    'Design proposals and features here 2',
    'Design proposals and features here 2',
  ];

  const featuresThree = [
    'Design proposals and features here 3',
    'Design proposals and features here 3',
    'Design proposals and features here 3',
    'Design proposals and features here 3',
    'Design proposals and features here 3',
    'Design proposals and features here 3',
  ];
  return (
    <section id='packages'>
      <div className='text-center py-5'>
        {' '}
        <h1 className='text-uppercase fw-bold'>Design Packages</h1>
        <h2 className='rph2'>
          Work one-on-one with a professional designer create bespoke designs
          that fit your style and budget
        </h2>
      </div>

      <div className='row mt-5 d-flex'>
        <div className='d-flex justify-content-evenly package_form_wrap'>
          <Fade left>
            <div className='col-md-3'>
              <PackageForm
                title='Basic'
                price='£100'
                description={'For single rooms, up to 200m'}
                url={room1}
                btnText='See example'
                dropdownTitle='What is included?'
                arr={featuresOne}
                btnTextLast='Enquiry Now'
                handleNotification={notification}
              />
            </div>
          </Fade>
          <Fade bottom>
            <div className='col-md-3'>
              <PackageForm
                title='Premium'
                price='£200'
                description={'For single rooms, up to 300m'}
                url={room2}
                btnText='See example'
                dropdownTitle='What is included?'
                arr={featuresTwo}
                btnTextLast='Enquiry Now'
                handleNotification={notification}
              />
            </div>
          </Fade>
          <Fade right>
            <div className='col-md-3'>
              <PackageForm
                title='Premium'
                price='£300'
                description={'For single rooms, up to 300m'}
                url={room3}
                btnText='See example'
                dropdownTitle='What is included?'
                arr={featuresThree}
                btnTextLast='Enquiry Now'
                handleNotification={notification}
              />
            </div>
          </Fade>
        </div>

        {/* <Fade left delay={200}>
          <div className='col-md-3 mt-3 drpc'>
            <p className='text-center px-3 mt-3 rpp'>Basic</p>
            <p className='display-4 text-uppercase text-center px-3 hiwsub'>
              £100
            </p>
            <hr style={{ height: '3px' }} />
            <p className='text-center px-3 '>
              For single rooms, up to 200m<span>&#178;</span>
            </p>
            <hr style={{ height: '3px' }} />

            <img
              style={{ maxWidth: '300px', maxHeight: '300px' }}
              clasname='img-fluid'
              src={room1}
              alt=''
            />

            <button
              onClick={(e) => notification()}
              className='hover_effect p-2 m-3 '
            >
              See example
            </button>
            <div
              className='accordion-title'
              onClick={() => setIsActive(!isActive)}
            >
              <div className='no_btn_pointer d-flex justify-content-center px-3 align-items-center fw-bold'>
                What's included?{' '}
                {isActive ? <MinusOutlined /> : <PlusOutlined />}
              </div>
              {isActive && (
                <div className='mt-4 d-flex justify-content-start'>
                  <ul>
                    <li className='rp_card_li'>
                      Design proposals and features here
                    </li>
                    <li className='rp_card_li'>
                      Design proposals and features here
                    </li>
                    <li className='rp_card_li'>
                      Design proposals and features here
                    </li>
                    <li className='rp_card_li'>
                      Design proposals and features here
                    </li>
                    <li className='rp_card_li'>
                      Design proposals and features here
                    </li>
                    <li className='rp_card_li'>
                      Design proposals and features here
                    </li>
                  </ul>
                </div>
              )}
            </div>
            <button
              onClick={(e) => notification()}
              style={{
                width: '300px',
                border: '2px solid black',
                borderRadius: '20px',
                fontWeight: '700',

                backgroundColor: 'black',
              }}
              className='p-3 m-3 text-uppercase text-white'
            >
              Enquiry now
            </button>
          </div>
        </Fade> */}
        {/* <Fade top delay={200}>
          <div className='col-md-3 mt-3 drpc '>
            <p className='text-center px-3 mt-3 rpp'>Premium</p>
            <p className='display-4 text-uppercase text-center px-3 hiwsub'>
              £200
            </p>
            <hr style={{ height: '3px' }} />
            <p className='text-center px-3 '>
              Dual function rooms, up to 300m
              <span>&#178;</span>
            </p>
            <hr style={{ height: '3px' }} />

            <img
              style={{ maxWidth: '300px', maxHeight: '300px' }}
              clasname='img-fluid'
              src={room2}
              alt=''
            />

            <button
              onClick={(e) => notification()}
              className='hover_effect p-2 m-3 '
            >
              See example
            </button>
            <div
              className='accordion-title'
              onClick={() => setIsActive(!isActive)}
            >
              <div className='no_btn_pointer d-flex justify-content-center px-3 align-items-center fw-bold'>
                What's included?{' '}
                {isActive ? <MinusOutlined /> : <PlusOutlined />}
              </div>
              {isActive && (
                <div className='mt-4 d-flex justify-content-start'>
                  <ul>
                    <li className='rp_card_li'>
                      Design proposals and features here
                    </li>
                    <li className='rp_card_li'>
                      Design proposals and features here
                    </li>
                    <li className='rp_card_li'>
                      Design proposals and features here
                    </li>
                    <li className='rp_card_li'>
                      Design proposals and features here
                    </li>
                    <li className='rp_card_li'>
                      Design proposals and features here
                    </li>
                    <li className='rp_card_li'>
                      Design proposals and features here
                    </li>
                  </ul>
                </div>
              )}
            </div>
            <button
              onClick={(e) => notification()}
              style={{
                width: '300px',
                border: '2px solid black',
                borderRadius: '20px',
                fontWeight: '700',
                backgroundColor: 'black',
              }}
              className='p-3 m-3 text-uppercase text-white'
            >
              Enquiry now
            </button>
          </div>
        </Fade> */}
        {/* <Fade right delay={200}>
          <div className='col-md-3 mt-3 drpc'>
            <p className='text-center px-3 mt-3 rpp'>Deluxe</p>
            <p className='display-4 text-uppercase text-center px-3 hiwsub'>
              £300
            </p>
            <hr style={{ height: '3px' }} />
            <p className='text-center px-3 '>
              Big communal areas, up to 400m<span>&#178;</span>
            </p>
            <hr style={{ height: '3px' }} />

            <img
              style={{ maxWidth: '300px', maxHeight: '300px' }}
              clasname='img-fluid'
              src={room3}
              alt=''
            />

            <button
              onClick={(e) => notification()}
              className='hover_effect p-2 m-3 '
            >
              See example
            </button>
            <div
              className='accordion-title'
              onClick={() => setIsActive(!isActive)}
            >
              <div className='no_btn_pointer d-flex justify-content-center px-3 align-items-center fw-bold'>
                What's included?{' '}
                {isActive ? <MinusOutlined /> : <PlusOutlined />}
              </div>
              {isActive && (
                <div className='mt-4 d-flex justify-content-start'>
                  <ul>
                    <li className='rp_card_li'>
                      Design proposals and features here
                    </li>
                    <li className='rp_card_li'>
                      Design proposals and features here
                    </li>
                    <li className='rp_card_li'>
                      Design proposals and features here
                    </li>
                    <li className='rp_card_li'>
                      Design proposals and features here
                    </li>
                    <li className='rp_card_li'>
                      Design proposals and features here
                    </li>
                    <li className='rp_card_li'>
                      Design proposals and features here
                    </li>
                  </ul>
                </div>
              )}
            </div>
            <button
              onClick={(e) => notification()}
              style={{
                width: '300px',
                border: '2px solid black',
                borderRadius: '20px',
                fontWeight: '700',

                backgroundColor: 'black',
              }}
              className='p-3 m-3 text-uppercase text-white'
            >
              Enquiry now
            </button>
          </div>
        </Fade> */}
      </div>
      <button
        onClick={(e) => notification()}
        style={{
          width: '250px',
          border: '2px solid black',
          borderRadius: '20px',
          fontWeight: '700',
        }}
        className='m-5 p-3 text-uppercase text-center hover_effect'
      >
        Compare Packages
      </button>
    </section>
  );
};

export default RoomPackages;
