import { styles } from '../../style';

const Resume = () => {
  return (
    <div className={``}>
      <div
        className={`flex my-10 small:my-0 ${styles.borderGradientLigth} w-full small:w-fit rounded-[24px]`}>
        <div
          className={`w-fit bg-grayscale-600 px-6 py-10 small:p-14 flex flex-col 2xsmall:flex-row gap-10 justify-between border-[1px] rounded-[24px]`}>
          <div className='flex flex-col gap-10 items-start max-w-xs'>
            <img src='/turnover-icon-new.png' alt='Turnover' className='w-[70px]' />
            <div className='flex flex-col gap-4'>
              <h3 className='text-base small:text-[20px] font-segoe'>
                Flexible Locking Mechanisms
              </h3>
              <p className={`${styles.parraph} text-sm small:!text-[14px] text-grayscale-200`}>
                This unique feature allows for the application of discounts on transactions,
                incentivizing token holders and fostering engagement within the ecosystem.
              </p>
            </div>
          </div>
          <div className='flex flex-col gap-10 items-start max-w-xs'>
            <img src='/dolar-icon-new.png' alt='Dólar' className='w-[70px]' />
            <div className='flex flex-col gap-4'>
              <h3 className='text-base small:text-[20px] font-segoe'>Direct Payment Integration</h3>
              <p className={`${styles.parraph} text-sm small:!text-[14px] text-grayscale-200`}>
                Customers can seamlessly make payments using their preferred digital currencies,
                eliminating the friction associated with traditional payment methods.
              </p>
            </div>
          </div>
          <div className='flex flex-col gap-10 items-start max-w-xs'>
            <img src='/bonus-icon-new.png' alt='Bonus' className='w-[70px]' />
            <div className='flex flex-col gap-4'>
              <h3 className='text-base small:text-[20px] font-segoe'>Referral Program</h3>
              <p className={`${styles.parraph} text-sm small:!text-[14px] text-grayscale-200`}>
                With LockPay, businesses can embrace the future of decentralized solutions,
                empowering themselves with enhanced security, flexibility, and efficiency.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
