import { styles } from '../../style';

const AboutBox = () => {
  return (
    <div className={`${styles.paddingX}`}>
      <div className={`flex my-10 ${styles.borderGradientLigth} w-full small:w-fit rounded-[24px]`}>
        <div className='w-full bg-grayscale-600 box-shadow py-12 px-6 small:px-20 flex flex-col small:flex-row justify-center gap-14 rounded-[24px]'>
          <div className='flex flex-col gap-6 items-start'>
            <img src='/eye-icon-new.png' alt='eye' className='w-[70px]' />
            <div className='flex flex-col gap-4'>
              <h3 className='text-[20px] font-segoe'>LockPay Vision</h3>
              <p className='text-sm text-grayscale-200 leading-6 small:leading-6 tracking-wider'>
                At LockPay, our vision is to create a future where asset security and cryptocurrency
                payments are seamlessly integrated, empowering businesses and individuals to
                confidently manage their digital assets while enjoying frictionless transactions.
              </p>
            </div>
          </div>
          <div className='flex flex-col gap-6 items-start'>
            <img src='/idea-icon-new.png' alt='idea' className='w-[70px]' />
            <div className='flex flex-col gap-4'>
              <h3 className='text-[20px] font-segoe'>LockPay Mission</h3>
              <p className='text-sm text-grayscale-200 leading-6 small:leading-6 tracking-wider'>
                Our mission is to revolutionize asset security and cryptocurrency payments by
                providing businesses with a comprehensive solution that combines the flexibility of
                decentralized lockers and the convenience of direct payment options.
              </p>
            </div>
          </div>
          <div className='flex flex-col gap-6 items-start'>
            <img src='/shield-icon-new.png' alt='shield' className='w-[70px]' />
            <div className='flex flex-col gap-4'>
              <h3 className='text-[20px] font-segoe'>LockPay Security</h3>
              <p className='text-sm text-grayscale-200 leading-6 small:leading-6 tracking-wider'>
                With our platform, businesses can ensure the safety of their digital assets through
                decentralized lockers backed by robust blockchain technology. This eliminates the
                reliance on centralized servers and minimizes the risk of hacking or unauthorized
                access.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutBox;
