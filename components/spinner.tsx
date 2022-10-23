import {
  SquareSpinner,
  CircleSpinner,
  PullySpinner,
  ZigZagSpinner,
} from "./spinners/simpleDot";

const spinnerStyles = {
  square: SquareSpinner,
  circle: CircleSpinner,
  pully: PullySpinner,
  zigzag: ZigZagSpinner,
};

type SpinnerProps = {
  type?: keyof typeof spinnerStyles;
  speed?: number;
  dotCount?: number;
  color?: string;
  size?: number;
};

export default function Spinner({ type = "square", ...props }: SpinnerProps) {
  const SpinnerComponent = spinnerStyles[type] || type;

  return <SpinnerComponent {...props} />;
}
