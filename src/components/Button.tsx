import classNames from 'classnames';

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
      className={classNames('job-btn', { 'active-btn': isActive })}
      aria-pressed={isActive}
    >
      {children}
    </button>
  );
}
