import { StarFilled } from '@ant-design/icons';

const ClientReview = () => {
  const star = 5;

  return (
    <section className='container-fluid mt-5 mb-5'>
      <div className='text-center py-5'>
        {' '}
        <h1 className='text-uppercase fw-bold'>Client Reviews</h1>
        <h2>See what people say about us.</h2>
      </div>

      <div className='row mt-5 d-flex justify-content-around'>
        <div className='col-md-3 mt-3 client_review_card'>
          <p className='p-3 text-start hiwn'>
            {[...Array(star)].map((e, i) => (
              <span key={i}>
                <StarFilled />
              </span>
            ))}
          </p>
          <p className='text-uppercase text-start px-3 client_review_card_title'>
            They deserve more!
          </p>
          <p className='text-start px-3 client_review_card_content'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis,
            commodi sunt! Qui, id delectus asperiores obcaecati distinctio saepe
            esse amet blanditiis soluta vero deleniti nesciunt quod expedita
            perspiciatis itaque modi!
          </p>
          <div>
            <p className='fw-bold d-flex justify-content-end'>
              John Doe, California
            </p>
          </div>
        </div>
        <div className='col-md-3 mt-3 client_review_card'>
          <p className='p-3 text-start hiwn'>
            {[...Array(star)].map((e, i) => (
              <span key={i}>
                <StarFilled />
              </span>
            ))}
          </p>
          <p className='text-uppercase text-start px-3 client_review_card_title'>
            Such a professional Job!
          </p>
          <p className='text-start px-3 client_review_card_content'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis,
            commodi sunt! Qui, id delectus asperiores obcaecati distinctio saepe
            esse amet blanditiis soluta vero deleniti nesciunt quod expedita
            perspiciatis itaque modi!
          </p>
          <div>
            <p className='fw-bold d-flex justify-content-end'>
              Jane Doe, Melbourne.
            </p>
          </div>
        </div>
        <div className='col-md-3 mt-3 client_review_card'>
          <p className='p-3 text-start hiwn'>
            {[...Array(star)].map((e, i) => (
              <span key={i}>
                <StarFilled />
              </span>
            ))}
          </p>
          <p className='text-uppercase text-start px-3 client_review_card_title'>
            Incredible team, super satisfied!
          </p>
          <p className='text-start px-3 client_review_card_content'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis,
            commodi sunt! Qui, id delectus asperiores obcaecati distinctio saepe
            esse amet blanditiis soluta vero deleniti nesciunt quod expedita
            perspiciatis itaque modi!
          </p>
          <div>
            <p className='fw-bold d-flex justify-content-end'>
              John Smith, UK.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientReview;
