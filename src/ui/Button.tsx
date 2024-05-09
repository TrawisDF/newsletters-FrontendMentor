type ButtonChild = {
  children: string;
  type?: 'reset' | 'submit' | 'button';
  onClick?: () => void;
};

export default function Button({ children, type, onClick }: ButtonChild) {
  return (
    <button type={type} onClick={onClick}>
      {children}
    </button>
  );
}
