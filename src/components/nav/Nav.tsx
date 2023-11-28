import React from 'react';
import { Link } from 'react-router-dom';
import { styles } from '../../style';
import ScrollToTopLink from '../ScrollToTopLink';
import AsideBar from './AsideBar';
import PrimaryButton from '../PrimaryButton';

const Nav: React.FC = () => {
  return (
    <nav
      className={`${styles.paddingX} bg-grayscale-500 py-8 w-full flex items-center justify-between text-white fixed screen-path`}>
      <Link to='#'>
        <img src='/logo.png' alt='logo' className='w-32 small:w-[80%]' />
      </Link>

      <div className='flex xlarge:w-[60%] justify-between items-center small:gap-[30px] medium:gap-[100px]'>
        <div className='hidden xsmall:flex text-[16px] text-gray-300 gap-14 small:gap-8 medium:gap-14'>
          <ScrollToTopLink to='/' className='text-white'>
            Home
          </ScrollToTopLink>
          <Link to={'/about'} className='hover:text-white'>
            About us
          </Link>
          <Link to={'/solution'} className='hover:text-white'>
            Solution
          </Link>
          <Link to={'/usecases'} className='hover:text-white'>
            Use cases
          </Link>
          <Link to={'/pricing'} className='hover:text-white'>
            Pricing
          </Link>
        </div>
        <Link to='http://testnet.dapp.lockpay.io' className='hidden small:block'>
          <PrimaryButton text='Launch Dapp' />
        </Link>

        <AsideBar />
      </div>
    </nav>
  );
};

export default Nav;
