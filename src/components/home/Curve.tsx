import React from 'react';

interface CurveProps {
  className?: string;
}

export function CurveUp({ className = '' }: CurveProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="#4338CA"
      viewBox="0 0 1440 320"
      className={className}
    >
      <path
        fillRule="evenodd"
        d="M0 160h120c120 0 360 0 600-26.7C960 107 1200 53 1320 26.7L1440 0v320H0V160z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export function CurveDown({ className = '' }: CurveProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="#4338CA"
      viewBox="0 0 1440 320"
      className={className}
    >
      {/* <path fill="#fff" d="M0 0H1440V320H0z" /> */}
      <path
        fillRule="evenodd"
        d="M0 288l120-21.3C240 245 480 203 720 181.3 960 160 1200 160 1320 160h120V0H0v288z"
        clipRule="evenodd"
      />
    </svg>
  );
}
