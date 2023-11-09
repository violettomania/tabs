export interface ButtonProps {
  children: React.ReactNode;
  isActive: boolean;
  handleClick: () => void;
}

export default function Button({
  children,
  isActive,
  handleClick,
}: ButtonProps) {
  return (
    <button
      onClick={handleClick}
      className={`job-btn ${isActive && 'active-btn'}`}
    >
      {children}
    </button>
  );
}
