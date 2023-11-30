import { FC } from 'react';
import { SOLUTION } from '../../constants';
import { styles } from '../../style';
import PrimaryButton from '../PrimaryButton';
import { Link } from 'react-router-dom';

interface SolutionProps {}

interface SolutionItem {
  icon: string;
  title: string;
  description: string;
}

const Solution: FC<SolutionProps> = () => {
  return (
    <div
      className={`${styles.paddingX} w-full py-6 small:py-16 flex flex-col gap-[80px] small:gap-[120px]`}>
      <header className='flex flex-col small:flex-row small:justify-between'>
        <div className='flex flex-col gap-[12px] items-start'>
          <h2 className={`${styles.gradientText} !text-[14px]`}>Solution</h2>
          <h1 className={`${styles.title} font-segoe`}>Our Solution</h1>
        </div>

        <div className='flex flex-col gap-4 small:gap-0 text-grayscale-100 font-light text-base leading-7 tracking-wide small:max-w-2xl small:px-5 small:mr-20 mt-6'>
          <p>
            LockPay presents a comprehensive solution that addresses the challenges associated with
            asset security and cryptocurrency payments, revolutionizing the way businesses,
            projects, brands, and individuals interact with their digital assets and conduct
            transactions. By combining the power of a flexible decentralized locker with a direct
            payment option, LockPay offers a seamless, secure, and user-friendly ecosystem that
            empowers users and fosters innovation.
          </p>
        </div>
      </header>

      <main className='grid w-full grid-cols-1 relative 2xsmall:grid-cols-2 gap-6 small:grid-cols-3 h-fit'>
        {SOLUTION.map((solution: SolutionItem, index: number) => (
          <div
            key={index}
            className={`relative group p-[1px] h-[291px] small:max-w-sm flex ${styles.borderGradientLigth} rounded-[24px] overflow-hidden`}
            style={{
              top: index * 15 + 'px',
            }}>
            <div className='flex flex-col py-8 px-8 gap-10 justify-end items-center bg-grayscale-600 rounded-[24px] overflow-hidden'>
              <div className='flex flex-col gap-6'>
                <div className='w-full justify-start'>
                  <img src={solution.icon} alt='Turnover' className='w-[48px]' />
                </div>
                <div className='flex flex-col gap-4'>
                  <h3 className='text-base small:text-lg tracking-wider'>{solution.title}</h3>
                  <p className='text-grayscale-200 text-xs small:text-sm leading-7 small:leading-7'>
                    {solution.description}
                  </p>
                </div>
              </div>
            </div>

            <Link
              to={'/usecases'}
              className={`group-hover:flex absolute hidden bottom-1 h-[152px] z-50 w-[99%] rounded-b-[24px] bg-gradient-to-b from-[#03060e12] via-[#03060ead] to-[#03060E] justify-center items-center `}>
              <PrimaryButton text='View More' className='!text-[14px] !rounded-[6px]' />
            </Link>
          </div>
        ))}
      </main>
    </div>
  );
};

export default Solution;
