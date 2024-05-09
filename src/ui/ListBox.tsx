import { ReactNode } from 'react';

type ListBoxProps = {
  children: ReactNode;
};

export default function ListBox({ children }: ListBoxProps) {
  return <div className='list-box'>{children}</div>;
}
