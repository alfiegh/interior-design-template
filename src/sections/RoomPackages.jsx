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
          Work one-on-one with a professional designer to create bespoke designs
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
                title='Luxury'
                price='£300'
                description={'For single rooms, up to 400m'}
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
