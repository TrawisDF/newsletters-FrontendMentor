export default function ThanksIcon() {
  return (
    <div>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width='64'
        height='64'
        viewBox='0 0 64 64'
      >
        <defs>
          <linearGradient id='a' x1='100%' x2='0%' y1='0%' y2='100%'>
            <stop offset='0%' stopColor='#FF6A3A'></stop>
            <stop offset='100%' stopColor='#FF527B'></stop>
          </linearGradient>
        </defs>
        <g fill='none'>
          <circle cx='32' cy='32' r='32' fill='url(#a)'></circle>
          <path
            stroke='#FFF'
            strokeWidth='4'
            d='M18.286 34.686l8.334 7.98 19.094-18.285'
          ></path>
        </g>
      </svg>
    </div>
  );
}
