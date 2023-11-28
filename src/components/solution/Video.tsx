import { Link } from 'react-router-dom';
import { styles } from '../../style';
import PrimaryButton from '../PrimaryButton';

const Solution = () => {
  return (
    <div
      className={`${styles.paddingX} flex flex-col py-20 gap-12 items-center justify-center text-center w-full`}>
      <div className='flex flex-col gap-5 items-center small:max-w-5xl small:px-4'>
        <h2 className={`${styles.gradientText} !text-[14px]`}>Our Solution</h2>
        <h1 className='text-4xl small:text-5xl leading-tight font-semibold px-2 small:px-0 font-segoe'>
          LockPay offers a seamless, secure, and user-friendly ecosystem that empowers users and
          fosters innovation.
        </h1>
      </div>

      <img src='/video.png' alt='video' className='w-full rounded hidden small:block' />
      <img src='/video-responsive.png' alt='video' className='w-full rounded block small:hidden' />

      <Link to='http://testnet.dapp.lockpay.io'>
        <PrimaryButton text='Launch Dapp' />
      </Link>
    </div>
  );
};

export default Solution;
