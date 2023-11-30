import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { styles } from '../../style';
import PrimaryButton from '../PrimaryButton';

const AsideBar = () => {
  const navigate = useNavigate();
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  const handleLinkClick = (path: string) => {
    handleToggle();

    setTimeout(() => {
      navigate(path);
    }, 300);
  };
  return (
    <aside className='xsmall:hidden'>
      <div className='' onClick={handleToggle}>
        {toggle ? <img src='/open.png' alt='open' /> : <img src='/close.png' alt='close' />}
      </div>

      <AnimatePresence>
        {toggle && (
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 50 }}
            transition={{ duration: 0.5 }}
            className={`${styles.paddingX} bg-grayscale-500 pt-8 pb-20 screen-path absolute top-0 right-0 min-w-full min-h-screen justify-center items-center flex flex-col`}>
            <div className='w-full flex items-center justify-between text-white'>
              <Link to='#'>
                <img src='/logo.png' alt='logo' className='w-32 small:w-full' />
              </Link>
              <div className='' onClick={handleToggle}>
                {toggle ? <img src='/open.png' alt='open' /> : <img src='/close.png' alt='close' />}
              </div>
            </div>

            <ul
              className={`${styles.parraph} list-none flex gap-16 justify-center items-center flex-1 flex-col tracking-widest capitalize`}>
              <Link to='/' className='text-white' onClick={() => handleLinkClick('/')}>
                Home
              </Link>
              a
              <Link to={'/about'} onClick={() => handleLinkClick('/about')}>
                About us
              </Link>
              <Link to={'/solution'} onClick={() => handleLinkClick('/solution')}>
                Solution
              </Link>
              <Link to={'/usecases'} onClick={() => handleLinkClick('/usecases')}>
                Use cases
              </Link>
              <Link to={'/pricing'} onClick={() => handleLinkClick('/pricing')}>
                Pricing
              </Link>
            </ul>

            <Link to='http://testnet.dapp.lockpay.io'>
              {/* <button className='bg-blue-gradient p-[1px] w-full'>
                <div className='flex h-16 w-full items-center justify-center bg-grayscale-500 px-8'>
                  <span className={`${styles.parraph} text-white`}>Launch Dapp</span>
                </div>
              </button> */}
              <PrimaryButton text='Launch Dapp' className='mt-8' />
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </aside>
  );
};

export default AsideBar;
