import React from 'react';

interface ButtonProps {
  text: string;
  className?: string;
}

const PrimaryButton: React.FC<ButtonProps> = ({ text, className }) => {
  return (
    <button
      className={`bg-blue py-0 px-[16px] cursor-pointer text-white tracking-[0.42px] text-[14px] rounded-[8px] font-[500] h-[48px] ${className} transition ease-in-out delay-150 hover:opacity-70`}>
      {text}
    </button>
  );
};

export default PrimaryButton;
