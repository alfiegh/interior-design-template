import team1 from '../images/team1.jpg';
import { ArrowRightOutlined } from '@ant-design/icons';
import { toast } from 'react-toastify';
import Zoom from 'react-reveal/Zoom';

const MeetTheTeam = () => {
  return (
    <section
      id='team'
      className='container-fluid mb-5'
      style={{ marginTop: '8rem' }}
    >
      <div className='row'>
        <h1 className='text-uppercase fw-bold mb-5'>
          Meet our professional team
        </h1>
        <div className='col-md-6 container p-2'>
          <Zoom duration={1300}>
            <img
              className='img-fluid'
              // style={{ maxHeight: '550px', maxWidth: '550px' }}
              src={team1}
              alt=''
            />
          </Zoom>
        </div>
        <div className='col-md-6'>
          <h2>They are passionate on what they do</h2>
          <p style={{ textAlign: 'justify' }} className='mt-3 px-5'>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero illum
            saepe quaerat doloribus accusamus molestiae! Est, odio laudantium
            rerum consectetur sint, quibusdam, rem excepturi dicta error ad
            dolore voluptatem enim? Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Quis, at culpa deleniti perferendis nesciunt amet,
            reprehenderit voluptates tenetur rerum aperiam quod expedita
            dignissimos dolorum ab cupiditate saepe iure eaque possimus.
            <br className='mt-3' />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
            culpa maxime optio vitae iure vel minima voluptatum officiis
            sapiente. Minus soluta adipisci fugit perferendis perspiciatis quas
            nihil voluptatum totam ut.
            <br className='mt-3' />
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate,
            in libero perspiciatis repellendus voluptatum blanditiis, numquam
            quae, enim ab consectetur animi! Praesentium fugit nihil
            reprehenderit quisquam aliquam provident esse? Vitae!
          </p>
          <div>
            <button
              onClick={() =>
                toast.success(
                  'On your real website this will take you to a page that will highlight your team'
                )
              }
              style={{
                width: '250px',
                border: '2px solid black',
                borderRadius: '20px',
                fontWeight: '700',
              }}
              className='btn text-uppercase '
            >
              {' '}
              <ArrowRightOutlined className='fw-bold text-black px-2 d-inline-flex justify-content-center align-items-center' />
              Meet the team
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MeetTheTeam;
