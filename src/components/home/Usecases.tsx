import { styles } from '../../style';
import { USE_CASE } from '../../constants';
import { GoArrowLeft, GoArrowRight } from 'react-icons/go';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import PrimaryButton from '../PrimaryButton';

const Usecases = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % USE_CASE.length);
  };

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? USE_CASE.length - 1 : prevIndex - 1));
  };

  const currentUse = USE_CASE[currentIndex];

  return (
    <div className={`${styles.paddingX} w-full pb-16 flex flex-col gap-14 relative mt-[313px]`}>
      <header className='flex flex-col small:flex-row small:justify-between gap-4'>
        <div className='flex flex-col gap-[12px] items-start'>
          <h2 className={`${styles.gradientText} !text-[14px]`}>Use Cases</h2>
          <h1 className={`${styles.title} font-segoe`}>Unlocking the Potential of LockPay</h1>
        </div>

        <div className='flex flex-col gap-[32px] w-full small:w-[70%] text-grayscale-100 font-light text-base leading-7 tracking-wide small:max-w-2xl small:px-5 small:mr-20 mt-6'>
          <p className='font-light'>
            These use cases highlight the versatility and potential applications of LockPay's
            Locker, Direct Pay, and Referral functionalities, showcasing how businesses from various
            industries can leverage these features to enhance their operations, engage customers,
            and drive growth.
          </p>

          <Link to={'/usecases'}>
            <PrimaryButton text='See all' className='!text-[14px] !rounded-[6px]' />
          </Link>
        </div>
      </header>

      <main className={`w-full ${styles.borderGradientLigth}`}>
        <div
          key={currentUse.id}
          className='flex flex-col bg-grayscale-600 small:flex-row justify-between pt-14 px-6 small:px-10 gap-10'>
          <div className='flex flex-col gap-5 justify-between items-start w-full'>
            <div className='flex flex-col gap-4 items-start'>
              <Link to={'/usecases'}>
                <span className='bg-zinc-500 py-[3px] px-2 rounded-full text-sm'>Use Case</span>
              </Link>
              <motion.h2
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 3 }}
                className='text-3xl font-semibold font-segoe'>
                {currentUse.title}
              </motion.h2>
            </div>
            <div className='flex gap-4'>
              <button
                className='bg-blue-gradient overflow-hidden p-[1.4px] rounded-[12px]'
                onClick={handlePrevious}>
                <div className='flex h-10 rounded-[12px] small:h-12 w-full items-center justify-center bg-grayscale-600 back px-3 small:px-4 hover:bg-grayscale-500'>
                  <GoArrowLeft />
                </div>
              </button>
              <button
                className='bg-blue-gradient overflow-hidden p-[1.4px] rounded-[12px]'
                onClick={handleNext}>
                <div className='flex h-10 rounded-[12px] small:h-12 w-full items-center justify-center bg-grayscale-600 back px-3 small:px-4 hover:bg-grayscale-500'>
                  <GoArrowRight />
                </div>
              </button>
            </div>
            <motion.img
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 3 }}
              src={currentUse.image}
              alt={currentUse.title}
              className='w-full pt-6 small:pt-0'
            />
            <img
              src='light-usecase-new.png'
              alt='light'
              className='absolute -z-10 right-0 -bottom-16 w-[80%] hidden small:block'
            />
            <img
              src='light-responsive-new.png'
              alt='responsive'
              className='absolute -z-10 right-0 w-full block small:hidden'
            />
          </div>

          <div className='hidden small:block border-l border-gray-700 mt-5 mb-12'></div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 3 }}
            className=' flex flex-col gap-6 pb-16'>
            <div className='flex flex-col small:flex-row gap-5 items-start'>
              <img src='/cloud-icon-new.png' alt='cloud icon' className='w-[42px]' />
              <div className='flex flex-col gap-4'>
                <h3 className='text-[18px] font-segoe'>{currentUse.subtitle1}</h3>
                <p className={`${styles.parraph} !text-[16px] text-grayscale-200`}>
                  {currentUse.description1}
                </p>
              </div>
            </div>
            <div className='flex flex-col small:flex-row gap-5 items-start'>
              <img src='/cloud-icon-new.png' alt='cloud icon' className='w-[42px]' />
              <div className='flex flex-col gap-4'>
                <h3 className='text-[18px] font-segoe'>{currentUse.subtitle2}</h3>
                <p className={`${styles.parraph} !text-[16px] text-grayscale-200`}>
                  {currentUse.description2}
                </p>
              </div>
            </div>
            <div className='flex flex-col small:flex-row gap-5 items-start'>
              <img src='/cloud-icon-new.png' alt='cloud icon' className='w-[42px]' />
              <div className='flex flex-col gap-4'>
                <h3 className='text-[18px] font-segoe'>{currentUse.subtitle3}</h3>
                <p className={`${styles.parraph} !text-[16px] text-grayscale-200`}>
                  {currentUse.description3}
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </main>

      <div className='flex justify-center'>
        {USE_CASE.map((_, index) => (
          <div
            key={index}
            className={`h-1 mx-1 rounded  ${
              index === currentIndex ? 'w-4 bg-gray-300' : 'w-2 bg-gray-500'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Usecases;
