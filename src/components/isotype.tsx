import React from 'react';

export const Isotype = ({
  className,
  pomegranateClassName,
  bracketsClassName,
  ...props
}: React.SVGProps<SVGSVGElement> & {
  pomegranateClassName?: string;
  bracketsClassName?: string;
}) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
        fill="none"
        className={className}
        {...props}
    >
        <path className={pomegranateClassName} d="M403.455 256.417C403.455 183.91 356.12 119.58 277.585 102.046C271.742 100.864 263.858 97.054 260.474 91.547C256.733 85.457 256.162 77.986 256.162 72C256.162 77.986 255.591 85.457 251.85 91.547C248.466 97.054 240.581 100.864 234.738 102.046C156.204 119.58 108.869 183.91 108.869 256.417C108.869 349.503 174.521 424 256.162 424C337.803 424 403.455 349.503 403.455 256.417Z" />
        <g className={bracketsClassName}>
            <path d="M222 234L186 256L222 278" strokeWidth="24" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M272 224L240 288" strokeWidth="24" strokeLinecap="round"/>
            <path d="M290 234L326 256L290 278" strokeWidth="24" strokeLinecap="round" strokeLinejoin="round"/>
        </g>
    </svg>
);
