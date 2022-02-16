import { ArrowRightOutlined } from '@ant-design/icons';
import { toast } from 'react-toastify';
import Slide from 'react-reveal/Slide';

const HomeSteps = () => {
  return (
    <section className='container mt-5 mb-3' id='HomeSteps'>
      <div className='text-center py-5'>
        {' '}
        <h1 className='text-uppercase fw-bold'>
          Interior Design for your needs.
        </h1>
        <h2>How our process work</h2>
      </div>

      <div className='row mt-5 d-flex justify-content-around'>
        <Slide left duration={1000}>
          <div className='col-md-3 mt-3 hiw'>
            <p className='display-1 text-start px-3 hiwn'>1</p>
            <p className='text-uppercase text-start px-3 hiwsub'>
              Purchase a package
            </p>
            <p className='text-start px-3 hiwp'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Reiciendis, commodi sunt! Qui, id delectus asperiores obcaecati
              distinctio saepe esse amet blanditiis soluta vero deleniti
              nesciunt quod expedita perspiciatis itaque modi!
            </p>
          </div>

          <div className='col-md-3 mt-3 hiw '>
            <p className='display-1 text-start px-3 hiwn'>2</p>
            <p className='text-uppercase text-start px-3 hiwsub'>
              Work with our designer
            </p>
            <p className='text-start px-3 hiwp'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Reiciendis, commodi sunt! Qui, id delectus asperiores obcaecati
              distinctio saepe esse amet blanditiis soluta vero deleniti
              nesciunt quod expedita perspiciatis itaque modi!
            </p>
          </div>

          <div className='col-md-3 mt-3 hiw'>
            <p className='display-1 text-start px-3 hiwn'>3</p>
            <p className='text-uppercase text-start px-3 hiwsub'>
              Preview your design
            </p>
            <p className='text-start px-3 hiwp'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Reiciendis, commodi sunt! Qui, id delectus asperiores obcaecati
              distinctio saepe esse amet blanditiis soluta vero deleniti
              nesciunt quod expedita perspiciatis itaque modi!
            </p>
          </div>
        </Slide>
      </div>
      <button
        onClick={() =>
          toast.success(
            'On your real website this will take you to another page'
          )
        }
        style={{
          width: '200px',
          border: '2px solid black',
          borderRadius: '20px',
          fontWeight: '700',
        }}
        className='btn m-5 p-2 text-uppercase'
      >
        How it works
        <ArrowRightOutlined className='fw-bold px-2 d-inline-flex justify-content-center align-items-center' />
      </button>
    </section>
  );
};

export default HomeSteps;
