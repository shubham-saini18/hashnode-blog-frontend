import React from 'react';
import classNames from 'classnames';

type Props = {
  label: string;
  type?: 'primary' | 'outline' | 'outline-dark'; // Specify button types for better type safety
  icon?: React.ReactNode;
  className?: string;
  secondaryIcon?: React.ReactNode;
  href?: string;
  onClick?: () => void;
  as?: 'button' | 'a'; // Specify element types
  rel?: string;
  target?: string;
};

export const Button = ({
  label,
  type = 'primary', // Default to primary
  icon,
  className,
  secondaryIcon,
  href,
  rel,
  as = 'button', // Default to button
  target,
  onClick,
}: Props) => {
  const buttonClassName = classNames(
    'flex flex-row items-center justify-start gap-2 rounded-full border px-2 py-2 text-sm font-semibold transition-transform duration-200',
    {
      'text-slate-950 bg-transparent border-slate-950 hover:bg-slate-50': type === 'outline',
      'text-white bg-primary-600 hover:bg-primary-500': type === 'primary',
      'text-white bg-transparent border-transparent hover:bg-white hover:text-black dark:bg-neutral-900': type === 'outline-dark',
      // Add box shadows for modern touch
      'shadow-sm hover:shadow-md': true, // Apply shadow to all button types
      'md:px-5 md:py-3 md:text-base': true,
    },
    className // Allow additional custom classes
  );

  const buttonContent = (
    <>
      <div className="flex flex-row items-center gap-2">
        {icon && <div className="shrink-0">{icon}</div>}
        {label}
      </div>
      {secondaryIcon && <div className="shrink-0">{secondaryIcon}</div>}
    </>
  );

  if (as === 'a') {
    return (
      <a
        href={href}
        rel={rel}
        target={target}
        className={buttonClassName}
      >
        {buttonContent}
      </a>
    );
  }

  return (
    <button
      onClick={onClick}
      className={buttonClassName}
      type="button" // Make sure to specify button type
      aria-label={label} // Accessibility
    >
      {buttonContent}
    </button>
  );
};
