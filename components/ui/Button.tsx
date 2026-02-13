'use client';

import { ButtonHTMLAttributes, ReactNode } from 'react';
import clsx from 'clsx';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'danger';
  size?: 'sm' | 'md';
}

export default function Button({ children, variant = 'primary', size = 'md', className, disabled, ...props }: ButtonProps) {
  return (
    <button
      className={clsx(
        'inline-flex items-center justify-center font-semibold rounded transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2',
        {
          'bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-600': variant === 'primary' && !disabled,
          'bg-gray-200 text-gray-700 hover:bg-gray-300 focus:ring-gray-400': variant === 'secondary' && !disabled,
          'bg-red-600 text-white hover:bg-red-700 focus:ring-red-600': variant === 'danger' && !disabled,
          'opacity-50 cursor-not-allowed': disabled
        },
        {
          'px-3 py-1.5 text-sm': size === 'sm',
          'px-4 py-2 text-base': size === 'md'
        },
        className
      )}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
}
