/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';

interface InputProps
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  label: string | React.ReactNode;
  name: string;
  labelSrOnly?: boolean;
  error?: string;
}

export default function Input({
  label,
  name,
  labelSrOnly = false,
  error = '',
  ...rest
}: InputProps) {
  return (
    <>
      <label className="block" htmlFor={name}>
        <span className={`text-gray-700 ${labelSrOnly ? 'sr-only' : ''}`}>
          {label}
        </span>
        <input
          className={`mt-1 block w-full rounded-md shadow-sm ${
            error
              ? 'border border-red-400 text-red-400 focus:border-red-300 focus:ring focus:ring-red-200 focus:ring-opacity-50'
              : 'border-gray-300 focus:border-indigo-300 focus:ring focus:ring-gray-200 focus:ring-opacity-50'
          } ${
            rest?.disabled ? 'bg-gray-100 text-gray-700 cursor-not-allowed' : ''
          }`}
          name={name}
          id={name}
          placeholder={rest?.placeholder}
          {...rest}
        />
      </label>
      {error && <p className="text-sm mt-2 text-red-400">{error}</p>}
    </>
  );
}
