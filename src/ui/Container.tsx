import { ReactNode } from 'react';

interface ContainerChild {
  shown: string;
  children: ReactNode;
}

export default function Container({ shown, children }: ContainerChild) {
  return <div className={`container ${shown}`}>{children}</div>;
}
