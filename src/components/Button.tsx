interface ButtonProps {
  ariaLabel: string;
  label: string;
  onClick: () => void;
}

function Button({ ariaLabel, label, onClick }: ButtonProps) {
  return (
    <button aria-label={ariaLabel} onClick={onClick}>
      {label}
    </button>
  );
}

export default Button;
