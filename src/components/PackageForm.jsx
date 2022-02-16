import { useState } from 'react';
import { PlusOutlined, MinusOutlined } from '@ant-design/icons';

const PackageForm = ({
  title,
  price,
  description,
  url,
  btnText,
  dropdownTitle,
  arr,
  btnTextLast,
  handleNotification,
}) => {
  const [isActive, setIsActive] = useState(false);
  return (
    <div className='mt-3 drpc d-flex flex-column justify-content-center'>
      <p className='text-center px-3 mt-3 rpp'>{title}</p>
      <p className='display-4 text-uppercase text-center px-3 hiwsub'>
        {price}
      </p>
      <hr style={{ height: '3px' }} />
      <p className='text-center px-3 '>
        {description}
        <span>&#178;</span>
      </p>
      <hr style={{ height: '3px' }} />

      <img
        style={{ padding: '10px', borderRadius: '20px' }}
        clasname='room_package_img'
        src={url}
        alt=''
      />

      <button onClick={handleNotification} className='hover_effect p-2 m-3 '>
        {btnText}
      </button>
      <div className='accordion-title' onClick={() => setIsActive(!isActive)}>
        <div className='no_btn_pointer d-flex justify-content-center px-3 align-items-center fw-bold'>
          {dropdownTitle} {isActive ? <MinusOutlined /> : <PlusOutlined />}
        </div>
        {isActive && (
          <div className='mt-4 d-flex justify-content-start'>
            <ul>
              {arr.map((el) => (
                <li className='rp_card_li'>{el}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
      <button
        onClick={handleNotification}
        style={{
          width: 'auto',
          border: '2px solid black',
          borderRadius: '20px',
          fontWeight: '700',

          backgroundColor: 'black',
        }}
        className='p-3 m-3 text-uppercase text-white'
      >
        {btnTextLast}
      </button>
    </div>
  );
};

export default PackageForm;
