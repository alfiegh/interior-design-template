import FaqForm from '../components/FaqForm';

const Faqs = () => {
  return (
    <section id='faqs' className='mb-5'>
      <div className='text-center py-5'>
        {' '}
        <h1 className='text-uppercase fw-bold'>FAQs</h1>
        <h2>Want to know more? Contact us</h2>
      </div>
      <FaqForm
        question={'What is this page?'}
        answer={
          'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero illum saepe quaerat doloribus accusamus molestiae!'
        }
      />
      <FaqForm
        question={'How does it work?'}
        answer={
          'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero illum saepe quaerat doloribus accusamus molestiae!'
        }
      />
      <FaqForm
        question={'How much does it cost?'}
        answer={
          'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero illum saepe quaerat doloribus accusamus molestiae!'
        }
      />
      <FaqForm
        question={'How long will it take?'}
        answer={
          'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero illum saepe quaerat doloribus accusamus molestiae!'
        }
      />
      <FaqForm
        question={'What are the differences?'}
        answer={
          'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero illum saepe quaerat doloribus accusamus molestiae!'
        }
      />
      <FaqForm
        question={'What happens if I like this page too much?'}
        answer={
          'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero illum saepe quaerat doloribus accusamus molestiae!'
        }
      />
    </section>
  );
};

export default Faqs;
