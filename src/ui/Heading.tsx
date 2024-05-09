import { ReactNode } from 'react';

type HeadingProps = {
  children: ReactNode;
};

export default function Heading({ children }: HeadingProps) {
  return (
    <header>
      <span className='head-text'>{children}</span>
    </header>
  );
}
