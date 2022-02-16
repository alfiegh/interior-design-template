import { useState } from 'react';
import { PlusOutlined, MinusOutlined } from '@ant-design/icons';

const FaqForm = ({ question, answer }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className='col-md-6 offset-md-3'>
      <div
        style={{ height: '60px', border: '1px solid grey' }}
        onClick={() => setIsActive(!isActive)}
        className='mb-2 d-flex align-items-center bg-light'
      >
        <div
          className='d-flex align-items-center px-2 fs-2'
          style={{ color: 'rgb(249, 225, 82)' }}
        >
          {isActive ? <MinusOutlined /> : <PlusOutlined />}
        </div>
        <p className='mt-3 px-2' style={{ fontWeight: '700' }}>
          {question}
        </p>
      </div>
      {isActive && (
        <div
          style={{ border: '1px solid grey' }}
          className='d-flex justify-content-start mb-2'
        >
          <p className='p-3 text-start'>{answer}</p>
        </div>
      )}
    </div>
  );
};

export default FaqForm;
