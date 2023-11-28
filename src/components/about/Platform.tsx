import { Link } from 'react-router-dom';
import { styles } from '../../style';
import PrimaryButton from '../PrimaryButton';

const Platform = () => {
  return (
    <main className='flex flex-col-reverse items-start justify-between large:flex-row-reverse pt-12 small:pt-36 small:pb-28 small:px-28 relative gap-20'>
      <div className='flex flex-col gap-5 items-start small:pr-14 px-7 small:px-10'>
        <h2 className={`${styles.gradientText} !text-[14px]`}>About plataform</h2>
        <h1 className={`${styles.title} font-segoe`}>
          Our platform harnesses the power of blockchain technology
        </h1>
        <p
          className={`${styles.parraph} text-grayscale-100 font-normal tracking-normal !text-[16px]`}>
          We are committed to delivering a user-friendly and reliable platform that meets the
          evolving needs of businesses in the fast-paced digital landscape.
        </p>
        <p className={`${styles.parraph} text-grayscale-200 small:pr-4 !text-[16px]`}>
          LockPay offers a groundbreaking solution that addresses the challenges faced by businesses
          in managing digital assets and accepting cryptocurrency payments. By integrating
          cutting-edge technologies, we provide a hybrid model that combines the security of
          decentralized lockers with the efficiency of direct payments.
        </p>
        <div className='pt-4'>
          <Link to='http://testnet.dapp.lockpay.io'>
            <PrimaryButton text='Launch Dapp' />
          </Link>
        </div>
      </div>

      <div className='flex relative justify-center w-fit'>
        <div className='relative w-fit flex justify-center'>
          <img
            src='/empty-img-new.png'
            alt='empty-img'
            className='laptop-img block w-[60%] small:w-[120%]'
          />
          <img
            src='/locker-new.png'
            alt='locker-img'
            className='absolute small:hidden w-[80%] top-6'
          />
        </div>
        <img
          src='/locker-new.png'
          alt='locker-img'
          className='hidden small:flex absolute left-2 top-16 w-[150%] mx-auto small:mx-0'
        />
      </div>

      <img
        src='/light-about-left-right.png'
        alt='empty-img'
        className='absolute top-20 left-0 hidden -z-20 small:block w-[300px] small:w-[525px]'
      />
    </main>
  );
};

export default Platform;
