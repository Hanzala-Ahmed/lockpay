import { Link } from 'react-router-dom';
import { styles } from '../../style';
import PrimaryButton from '../PrimaryButton';
import Resume from './Resume';

const Hero = () => {
  return (
    <main
      className={`flex flex-col min-h-screen w-full small:mb-32 pt-28 small:pt-32 screen-path gap-10`}>
      <div className='w-full justify-between gap-12 small:gap-0 flex flex-col small:flex-row small:pl-28'>
        {' '}
        <div className='flex flex-col gap-[40px] items-start pt-10 small:pr-4 small:px-0 mt-[20px] px-4'>
          <div className='flex flex-col gap-6'>
            <h1 className='text-[44px] small:text-[56px] font-semibold leading-[56px] font-segoe'>
              Next Generation Lockers for Web3
            </h1>
            <p
              className={`${styles.parraph} pr-2 small:pr-0 !text-[24px] font-[300] !leading-[34px]`}>
              Create clever incentives and utility for all your decentralized products
            </p>
            <p className={`${styles.parraph} !text-[16px] !leading-[28px]`}>
              By harnessing the power of blockchain technology, LockPay empowers businesses,
              projects, and brands to create customizable lockers tailored to their unique
              requirements.
            </p>
          </div>
          <Link to='http://testnet.dapp.lockpay.io'>
            <PrimaryButton text='Launch Dapp' className='!text-[14px]' />
          </Link>
        </div>
        <img
          src='/desktop-new.png'
          alt='desktop'
          className='small:mx-none mx-auto block max-w-full small:max-w-[63%]'
        />
      </div>

      <div className={`${styles.paddingX} flex w-full justify-center`}>
        <Resume />
      </div>
    </main>
  );
};

export default Hero;
