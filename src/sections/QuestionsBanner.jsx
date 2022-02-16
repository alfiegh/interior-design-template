import { toast } from 'react-toastify';
import Flash from 'react-reveal/Flash';

const QuestionsBanner = () => {
  return (
    <div
      className='p-4'
      style={{
        height: 'auto',
        backgroundColor: 'rgb(40,40,40)',
      }}
    >
      <Flash delay={800}>
        <h3
          style={{
            textTransform: 'uppercase',
            fontWeight: '600',
            letterSpacing: '2px',
          }}
          className='text-white'
        >
          Got Questions ?
        </h3>
        <p
          style={{
            textTransform: 'uppercase',
            fontWeight: '600',
            letterSpacing: '2px',
          }}
          className='text-white'
        >
          We are here to answer them!{' '}
        </p>
      </Flash>
      <button
        onClick={() =>
          toast.success(
            'On your real website this will take you to a calendar page or Contact Us section'
          )
        }
        style={{
          //   width: '400px',
          border: '2px solid black',
          borderRadius: '20px',
          fontWeight: '700',
        }}
        className='p-3 text-uppercase text-center'
      >
        Call now to Book a consultation
      </button>
    </div>
  );
};

export default QuestionsBanner;
