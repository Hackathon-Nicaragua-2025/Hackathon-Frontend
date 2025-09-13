// Import For Router Dom
import { Link } from "react-router-dom";

// Interface Link Props
interface LinkProps {
  reference: string;
  className?: string;
  label?: string;
  icon?: React.ReactNode;
  target?: string;
  disabled?: boolean;
}

// Component Link
export default function Links({ reference, className, label, icon, target, disabled }: LinkProps) {
  return (
    <Link to={reference} target={target} className={disabled ? 'disabled' : className}>
      {icon && icon}
      <span>{label}</span>
    </Link>
  );
}