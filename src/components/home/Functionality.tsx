import { styles } from '../../style';
import { FUNTIONALITY } from '../../constants';
import { useState } from 'react';
import { MdKeyboardArrowUp } from 'react-icons/md';
import { MdKeyboardArrowDown } from 'react-icons/md';

const Functionality = () => {
  const [activeQuestion, setActiveQuestion] = useState<number | null>(0);

  const handleClick = (index: number) => {
    setActiveQuestion(index === activeQuestion ? null : index);
  };

  return (
    <div className='w-full relative justify-start small:items-center gap-10 small:gap-0 flex flex-col-reverse small:flex-row small:pl-28 py-16'>
      <div className='flex flex-col items-start pt-10 px-6 small:pr-4 small:w-[42%]'>
        <h2 className={`${styles.gradientText} !text-[14px] mb-[12px]`}>Functionality</h2>
        <h1 className={`${styles.title} max-w-lg font-segoe`}>LockPay Direct Payments</h1>

        <div className='flex flex-col gap-6 w-full mt-11 z-30'>
          {FUNTIONALITY.map((question, index) => (
            <div key={index} className='flex flex-col gap-6'>
              {activeQuestion === index ? (
                <>
                  <div
                    className='flex items-center justify-between hover:cursor-pointer'
                    onClick={() => handleClick(index)}>
                    <h3 className='text-lg small:text-xl'>{question.title}</h3>
                    <div onClick={() => handleClick(index)} className='hover:cursor-pointer'>
                      <MdKeyboardArrowUp />
                    </div>
                  </div>
                  <hr className='border-gray-500 w-full' />
                  <p className={`${styles.parraph} pr-6`}>{question.description}</p>
                </>
              ) : (
                <div className='flex flex-col gap-6'>
                  <div
                    className='flex items-center justify-between hover:cursor-pointer'
                    onClick={() => handleClick(index)}>
                    <h3 className='text-lg small:text-xl'>{question.title}</h3>
                    <div onClick={() => handleClick(index)} className='hover:cursor-pointer'>
                      <MdKeyboardArrowDown />
                    </div>
                  </div>
                  <hr className='border-gray-500 w-full' />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      <img src='/locker.png' alt='desktop' className='z-20 small:pt-10 hidden small:block' />

      <img
        src='/light-new.png'
        alt='light'
        className='absolute right-0 -top-20 hidden small:block w-[320px] small:w-[930px]'
      />
      {/* Responsive Light */}
      <img
        src='/light-responsive-new.png'
        alt='light responsive'
        className='w-full block small:hidden'
      />
    </div>
  );
};

export default Functionality;
