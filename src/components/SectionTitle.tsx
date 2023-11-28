import { MdKeyboardArrowRight } from 'react-icons/md';
import { styles } from '../style';

interface SectionTitleProps {
  section: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ section }) => {
  return (
    <div className='flex flex-col gap-20 small:px-28 text-center'>
      <div className='relative flex flex-col items-center gap-10'>
        <img
          src='/elipse2-new.png'
          alt='elipse'
          className='absolute -top-[30%] small:-top-[100%] z-10 laptop-img w-[65%]'
        />
        <h1 className='text-4xl font-semibold z-20 tracking-wide small:text-[64px] font-segoe'>
          {section}
        </h1>
        <p className={`${styles.parraph} flex gap-1 items-center z-20`}>
          <span className='font-semibold text-white'>Home</span> <MdKeyboardArrowRight />
          <span>{section}</span>
        </p>
      </div>

      <div className='w-full h-[0.5px] bg-blue-gradient' />
    </div>
  );
};

export default SectionTitle;
