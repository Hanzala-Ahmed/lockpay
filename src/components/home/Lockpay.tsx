import { Link } from 'react-router-dom';
import { styles } from '../../style';
import PrimaryButton from '../PrimaryButton';

const Lockpay = () => {
  return (
    <main className='w-full justify-between small:items-center flex flex-col small:flex-row small:pb-10 relative'>
      <div className='relative hidden small:flex'>
        <img src='/mobile-new2.png' alt='desktop' className='z-0 w-[1012px]' />
        <img
          src='/chart-left-new.png'
          alt='desktop'
          className='absolute z-10 small:bottom-[9%] small:right-[26%] w-[180px] xsmall:w-[200px] medium:w-[312px]'
        />
      </div>

      <div className='flex flex-col px-6 small:px-0 items-start max-w-lg relative small:right-[11%]'>
        <h2 className={`${styles.gradientText} !text-[14px] mb-[12px]`}>Lockpay</h2>
        <h1 className={`${styles.title} font-segoe mb-[12px]`}>
          Customizable lockers for any project’s use cases
        </h1>
        <p className={`${styles.parraph} mb-[24px]`}>
          By harnessing the power of blockchain technology, LockPay empowers businesses, projects,
          and brands to create customizable lockers tailored to their unique requirements. These
          lockers allow for the locking and unlocking of digital assets for predetermined durations
          or specific intervals, enhancing security and providing businesses with greater control
          over their assets.
        </p>
        <ul className='flex flex-col gap-4 font-light mb-[32px]'>
          <li className='flex items-center gap-2'>
            <img src='/checkbox-new.png' alt='check' className='w-[16px]' />
            <span>Cutting-Edge Technology</span>
          </li>
          <li className='flex items-center gap-2'>
            <img src='/checkbox-new.png' alt='check' className='w-[16px]' />
            <span>Direct Payment Integration</span>
          </li>
          <li className='flex items-center gap-2'>
            <img src='/checkbox-new.png' alt='check' className='w-[16px]' />
            <span>Referral Program</span>
          </li>
        </ul>

        <Link to='/usecases' className='mt-[16px]'>
          <PrimaryButton text='Use Cases' />
        </Link>
      </div>
    </main>
  );
};

export default Lockpay;
