import classNames from 'classnames';

export interface ButtonProps {
  children: string;
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
