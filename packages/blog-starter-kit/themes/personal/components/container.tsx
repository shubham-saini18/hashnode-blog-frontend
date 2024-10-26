import React from 'react';
import classNames from 'classnames';

type Props = {
  children?: React.ReactNode; // You can also use React.ReactElement if you want to enforce a single React element
  className?: string;
};

export const Container = ({ children, className = '' }: Props) => {
  return (
    <div className={classNames('container mx-auto', className)}>
      {children}
    </div>
  );
};
