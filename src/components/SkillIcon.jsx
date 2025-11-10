import React from "react";

export const ReactIcon = ({ className }) => (
  <svg
    className={className}
    viewBox="-11.5 -10.23174 23 20.46348"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="0" cy="0" r="2.05" fill="currentColor"></circle>
    <g stroke="currentColor" strokeWidth="1" fill="none">
      <ellipse rx="11" ry="4.2"></ellipse>
      <ellipse rx="11" ry="4.2" transform="rotate(60)"></ellipse>
      <ellipse rx="11" ry="4.2" transform="rotate(120)"></ellipse>
    </g>
  </svg>
);
export const Html5Icon = ({ className }) => (
  <svg
    className={className}
    fill="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M1.75 0h20.5L20.25 21.375 12 24l-8.25-2.625L1.75 0zM18.5 7.75H8.75l.375 4.5h9l-.375 4.5-3.25 1.125-3.25-1.125-.25-2.875h-3.375l.5 6L12 19.875l6.125-1.9375.875-10.1875z" />
  </svg>
);

export const Css3Icon = ({ className }) => (
  <svg
    className={className}
    fill="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M1.75 0h20.5L20.25 21.375 12 24l-8.25-2.625L1.75 0zM18.5 7.75l-.375 4.5h-9l-.375-4.5h9.75zM12 19.875l6.125-1.9375.625-7.1875H12v3.375h3.375l-.25 2.875-3.125 1.0625v-3.5H8.75l-.5-6h11.125l.375-4.5H5.25l.5 6h12.75z" />
  </svg>
);
