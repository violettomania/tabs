export interface ButtonProps {
  children: React.ReactNode;
  isActive: boolean;
  handleClick?: () => void;
}

export default function Button({
  children,
  isActive,
  handleClick: onClick,
}: ButtonProps) {
  return (
    <button onClick={onClick} className={`job-btn ${isActive && 'active-btn'}`}>
      {children}
    </button>
  );
}
