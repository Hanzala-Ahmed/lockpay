import { Link } from 'react-router-dom';
import { styles } from '../../style';
import PrimaryButton from '../PrimaryButton';
import SectionTitle from '../SectionTitle';

const Pricing = () => {
  return (
    <div className='w-full pt-56 mb-20 flex flex-col'>
      <SectionTitle section='Pricing' />

      <main className='w-full flex flex-col sm:flex-row small:px-28 px-7 pb-0 pt-20 small:pt-36 relative gap-14 small:gap-0'>
        <div className='flex flex-col gap-5 items-start small:pr-14 small:max-w-xl'>
          <h2 className={`${styles.gradientText} !text-[14px]`}>Pricing</h2>
          <h1 className={`${styles.title} font-segoe`}>
            Our pricing is simple and straightforward
          </h1>

          <div className='pt-4'>
            <Link to='http://testnet.dapp.lockpay.io'>
              <PrimaryButton text='Launch Dapp' />
            </Link>
          </div>
        </div>

        <div
          className={`flex my-10 small:my-0 ${styles.borderGradientLigth} w-fit rounded-[24px] overflow-hidden`}>
          <div className='flex flex-col gap-4 bg-grayscale-600 box-shadow p-6 small:p-12 z-30 rounded-[24px]'>
            <p>Simple Pricing Model</p>
            <ul className='flex flex-col gap-4 font-light mt-2'>
              <li className='flex items-baseline gap-4'>
                <img src='/checkbox-new.png' alt='check' className='w-[16px]' />
                <span className=''>
                  <strong className='font-semibold'>Locker Creation Fee: </strong>
                  0.8 BNB for Binance Smart chain. 0.1 ETH for Ethereum chain. 55,000 DIONE coin for
                  Odyssey Chain
                </span>
              </li>
              <li className='flex items-baseline gap-4'>
                <img src='/checkbox-new.png' alt='check' className='w-[16px]' />
                <span>
                  <strong className='font-semibold'>Token Lock Fee: </strong>
                  1.5% of total assets locked
                </span>
              </li>
              <li className='flex items-baseline gap-4'>
                <img src='/checkbox-new.png' alt='check' className='w-[16px]' />
                <span>
                  <strong className='font-semibold'>Token Unlock Fee: </strong>
                  1.5% of total assets unlocked
                </span>
              </li>
              <li className='flex items-baseline gap-4'>
                <img src='/checkbox-new.png' alt='check' className='w-[16px]' />
                <span>
                  <strong className='font-semibold'>Locker Payment Fee: </strong>
                  0.25% of the total collected payment.
                </span>
              </li>
              <li className='flex items-baseline gap-4'>
                <img src='/checkbox-new.png' alt='check' className='w-[16px]' />
                <span>
                  <strong className='font-semibold'>Referral Fees: </strong>
                  Earn .25% of total assets locked and unlocked from a referred project.
                </span>
              </li>
            </ul>
          </div>
        </div>

        <img
          src='/light-pricing.png'
          alt='light pricing page'
          className='absolute z-0 right-0 -bottom-24 w-[60%] hidden sm:block'
        />
        <img
          src='/light-pricing-responsive.png'
          alt='light pricing page'
          className='absolute z-0 block sm:hidden top-40 left-0 w-full'
        />
      </main>
    </div>
  );
};

export default Pricing;
