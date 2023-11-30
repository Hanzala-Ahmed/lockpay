import { styles } from '../../style';
import { Link, useLocation } from 'react-router-dom';

// import ScrollToTopLink from "../ScrollToTopLink";

const Footer = () => {
  const location = useLocation();
  const faqLink = location.pathname === '/' ? '#faq' : '/#faq';
  return (
    <footer className='flex flex-col gap-20 pt-40 pb-10 w-full screen-path-bottom px-10 small:px-28'>
      <div className='flex flex-col small:flex-row justify-between w-full gap-[100px] small:gap-[177px]'>
        <div className='flex flex-col justify-between'>
          <div className='flex items-start'>
            <img src='/logo.png' alt='logo' className='w-[160px]' />
          </div>
          <div className='gap-4 hidden small:flex'>
            <a href='https://x.com/Lockpay_io?t=33VwaUSutkSw8cz7nW2ZQA&s=09'>
              <img src='/x-icon-new.png' alt='x-icon' className='hover:scale-105 w-[46px]' />
            </a>

            <a href='/SmartContract_Audit_Solidproof_LockPay.pdf'>
              <img
                src='/github-icon-new.png'
                alt='github-icon'
                className='hover:scale-105 w-[46px]'
              />
            </a>
          </div>
        </div>

        <div
          className={`${styles.parraph} flex flex-col small:flex-row small:w-[35%] justify-around`}>
          <div className='flex gap-20 small:gap-[100px] flex-wrap small:flex-nowrap'>
            <div className='flex flex-col gap-[16px]'>
              <p className='text-white font-semibold'>Quicklinks</p>
              <Link to='http://testnet.dapp.lockpay.io' className='hover:text-white'>
                Launch Dapp
              </Link>
              <Link to='/solution' className='hover:text-white'>
                Solution
              </Link>
              <Link to='/usecases' className='hover:text-white'>
                Use Cases
              </Link>
              <a
                href='https://whitepaper.lockpay.io/lockpay/whitepaper'
                className='hover:text-white'>
                Whitepaper
              </a>
            </div>
            <div className='flex flex-col gap-[16px] capitalize'>
              <p className='text-white font-semibold'>Support</p>
              <Link to='/about' className='hover:text-white'>
                About us
              </Link>
              <a href={faqLink} className='hover:text-white'>
                FAQ
              </a>
              {/* <a href='https://form.jotform.com/233043670186454' className='hover:text-white'>
                Terms & Conditions
              </a>
              <a href='https://form.jotform.com/233043670186454' className='hover:text-white'>
                Privacy Policy
              </a> */}
            </div>
          </div>
        </div>
      </div>

      <div className='gap-6 flex small:hidden'>
        <a href='https://x.com/Lockpay_io?t=33VwaUSutkSw8cz7nW2ZQA&s=09'>
          <img src='/x-icon-new.png' alt='x-icon' className='hover:scale-105 w-[46px]' />
        </a>

        <a href='/SmartContract_Audit_Solidproof_LockPay.pdf'>
          <img src='/github-icon-new.png' alt='github-icon' className='hover:scale-105 w-[46px]' />
        </a>
      </div>

      <div className='flex flex-col gap-8'>
        <div className='w-full h-[0.5px] bg-blue-gradient' />

        <p className={`${styles.parraph} text-center`}>© Copyright 2023, All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
