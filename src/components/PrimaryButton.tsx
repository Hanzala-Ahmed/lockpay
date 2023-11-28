import React from 'react';

interface ButtonProps {
  text: string;
  className?: string;
}

const PrimaryButton: React.FC<ButtonProps> = ({ text, className }) => {
  return (
    <button
      className={`bg-blue px-[28px] cursor-pointer text-white tracking-[0.42px] text-[16px] rounded-[8px] h-[52px] ${className}`}>
      {text}
    </button>
  );
};

export default PrimaryButton;
