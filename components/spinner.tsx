import { StyleSheet, View } from "react-native";
import { useSpring, animated } from "@react-spring/native";

const spinnerStyles = {
  square: SquareSpinner,
  circle: CircleSpinner,
  pully: PullySpinner,
  zigzag: ZigZagSpinner,
};

const AnimatedView = animated(View);

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

export function SquareSpinner({ ...props }) {
  const { rotateZ, ...spinnerProps } = useSpring({
    enter: { rotateZ: 0 },
    from: { rotateZ: 0 },
    to: { rotateZ: 360 },
    loop: true,
    reset: true,
    config: {
      duration: 1500,
    },
  });

  return (
    <AnimatedView
      style={[
        styles.squareSpinner,
        {
          transform: [{ rotateZ: rotateZ.to([0, 360], ["0deg", "360deg"]) }],
          ...spinnerProps,
        },
      ]}
    >
      <View
        style={[
          styles.dot,
          {
            left: 0,
            bottom: 0,
            ...(props.color && { backgroundColor: props.color }),
          },
        ]}
      />
      <View
        style={[
          styles.dot,
          {
            left: 0,
            top: 0,
            ...(props.color && { backgroundColor: props.color }),
          },
        ]}
      />
      <View
        style={[
          styles.dot,

          {
            right: 0,
            bottom: 0,
            ...(props.color && { backgroundColor: props.color }),
          },
        ]}
      />
      <View
        style={[
          styles.dot,

          {
            right: 0,
            top: 0,
            ...(props.color && { backgroundColor: props.color }),
          },
        ]}
      />
    </AnimatedView>
  );
}

export function CircleSpinner({
  speed = 1,
  dotCount = 6,
  size = 30,
  ...props
}: {
  speed?: number;
  dotCount?: number;
  color?: string;
  size?: number;
}) {
  const { rotateZ, ...spinnerProps } = useSpring({
    enter: { rotateZ: 0 },
    from: { rotateZ: 0 },
    to: { rotateZ: 360 },
    loop: true,
    reset: true,
    config: {
      duration: 1500 / speed,
    },
  });

  const dots = (numOfDots: number) => {
    const dotArray = [];
    const slice = 360 / numOfDots;
    const start = -90;
    const dotSize = size / 6;
    const offset = size / 2;
    const dotPosition = offset - dotSize / 2;

    for (let i = 0; i <= numOfDots; i++) {
      const rotate = slice * i + start;
      const rotateReverse = rotate * -1;

      dotArray.push(
        <View
          style={[
            styles.circleDot,

            {
              height: dotSize,
              width: dotSize,
              bottom: dotPosition,
              left: dotPosition,
              ...(props.color && { backgroundColor: props.color }),
              transform: [
                { rotateZ: `${rotate}deg` },
                { translateX: offset, translateY: offset },
                { rotateZ: `${rotateReverse}deg` },
              ],
            },
          ]}
        />
      );
    }

    return dotArray;
  };

  return (
    <AnimatedView
      style={[
        styles.circleSpinner,
        {
          height: size,
          width: size,
          transform: [{ rotateZ: rotateZ.to([0, 360], ["0deg", "360deg"]) }],
          ...spinnerProps,
        },
      ]}
    >
      {dots(dotCount)}
    </AnimatedView>
  );
}

export function PullySpinner({ ...props }: { color?: string }) {
  const { position } = useSpring({
    enter: { position: 0 },
    from: { position: 0 },
    to: { position: 1 },
    loop: { reverse: true },
    reset: true,
    config: {
      duration: 500,
    },
  });

  return (
    <AnimatedView style={styles.pullySpinner}>
      <View style={{ flexGrow: 1, alignItems: "center" }}>
        <AnimatedView
          style={[
            styles.dot,
            {
              ...(props.color && { backgroundColor: props.color }),
              transform: [{ translateY: position.to([0, 1], [20, 0]) }],
            },
          ]}
        />
      </View>
      <View style={{ flexGrow: 1, alignItems: "center" }}>
        <AnimatedView
          style={[
            styles.dot,
            {
              ...(props.color && { backgroundColor: props.color }),
              transform: [{ translateY: position.to([0, 1], [0, 20]) }],
            },
          ]}
        />
      </View>
      <View style={{ flexGrow: 1, alignItems: "center" }}>
        <AnimatedView
          style={[
            styles.dot,
            {
              ...(props.color && { backgroundColor: props.color }),
              transform: [{ translateY: position.to([0, 1], [20, 0]) }],
            },
          ]}
        />
      </View>
    </AnimatedView>
  );
}

export function ZigZagSpinner({ ...props }: { color?: string }) {
  const { position } = useSpring({
    enter: { position: 0 },
    from: { position: 0 },
    to: { position: 1 },
    loop: { reverse: true },
    reset: true,
    config: {
      duration: 300,
    },
  });

  const height = 10;

  return (
    <View style={[styles.zigZagSpinner, { height }]}>
      <View style={{ flexGrow: 1, alignItems: "center" }}>
        <AnimatedView
          style={[
            styles.dot,

            {
              ...(props.color && { backgroundColor: props.color }),
              transform: [{ translateY: position.to([0, 1], [height, 0]) }],
            },
          ]}
        />
      </View>
      <View style={{ flexGrow: 1, alignItems: "center" }}>
        <AnimatedView
          style={[
            styles.dot,
            {
              ...(props.color && { backgroundColor: props.color }),
              transform: [{ translateY: position.to([0, 1], [0, height]) }],
            },
          ]}
        />
      </View>
      <View style={{ flexGrow: 1, alignItems: "center" }}>
        <AnimatedView
          style={[
            styles.dot,
            {
              ...(props.color && { backgroundColor: props.color }),
              transform: [{ translateY: position.to([0, 1], [height, 0]) }],
            },
          ]}
        />
      </View>
      <View style={{ flexGrow: 1, alignItems: "center" }}>
        <AnimatedView
          style={[
            styles.dot,
            {
              ...(props.color && { backgroundColor: props.color }),
              transform: [{ translateY: position.to([0, 1], [0, height]) }],
            },
          ]}
        />
      </View>
      <View style={{ flexGrow: 1, alignItems: "center" }}>
        <AnimatedView
          style={[
            styles.dot,
            {
              ...(props.color && { backgroundColor: props.color }),
              transform: [{ translateY: position.to([0, 1], [height, 0]) }],
            },
          ]}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  dot: {
    borderRadius: 100,
    width: 5,
    height: 5,
    backgroundColor: "black",
    position: "absolute",
    zIndex: 2000,
  },
  circleDot: {
    borderRadius: 100,
    backgroundColor: "black",
    position: "absolute",
  },
  squareSpinner: {
    position: "relative",
    justifyContent: "space-evenly",
    flexDirection: "row",
    width: 25,
    height: 25,
    borderRadius: 100,
  },
  circleSpinner: {
    position: "relative",
    width: 30,
    height: 30,
    borderRadius: 100,
  },
  pullySpinner: {
    position: "relative",
    justifyContent: "space-evenly",
    flexDirection: "row",
    width: 25,
    height: 20,
    borderRadius: 100,
  },
  zigZagSpinner: {
    position: "relative",
    justifyContent: "space-evenly",
    flexDirection: "row",
    width: 45,
    borderRadius: 100,
  },
});
