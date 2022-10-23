import { CarouselSpinner } from "./spinners/complexDot";
import {
  SquareSpinner,
  CircleSpinner,
  PullySpinner,
  ZigZagSpinner,
} from "./spinners/simpleDot";

const spinnerStyles = {
  //simple dot
  square: SquareSpinner,
  circle: CircleSpinner,
  pully: PullySpinner,
  zigzag: ZigZagSpinner,
  //complex dot
  carousel: CarouselSpinner,
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
