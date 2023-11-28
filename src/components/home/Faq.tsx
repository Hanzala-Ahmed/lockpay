import { styles } from '../../style';
import ArrayFaq from './ArrayFaq';

const Faq = () => {
  return (
    <div
      id='faq'
      className={`${styles.paddingX} flex flex-col small:flex-row w-full items-start justify-between py-16 relative`}>
      <div className='flex flex-col items-start'>
        <img
          src='/light-faq-new.png'
          alt='light'
          className='absolute -z-10 left-0 top-20 hidden w-[600px] small:block'
        />
        <img
          src='/light-faq-new.png'
          alt='light'
          className='absolute -z-10 w-[203px] left-0 top-40 block small:hidden'
        />
        <h2 className={`${styles.gradientText} !text-[14px] mb-[12px]`}>About lockpay</h2>
        <h1 className={`${styles.title} font-segoe`}>Frequently Asked Questions</h1>
        <span className='text-grayscale-200 mt-[24px]'>Still need help? Chat to us.</span>
      </div>

      <ArrayFaq />
    </div>
  );
};

export default Faq;
