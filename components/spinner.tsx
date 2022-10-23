import { StyleSheet, View } from "react-native";
import { useSpring, animated } from "@react-spring/native";

const spinnerStyles = {
  square: SquareSpinner,
  circle: CircleSpinner,
  pully: PullySpinner,
  zigzag: ZigZagSpinner,
};

const AnimatedView = animated(View);

export default function Spinner({
  type = "square",
  ...props
}: {
  type?: keyof typeof spinnerStyles;
}) {
  const SpinnerComponent = spinnerStyles[type] || type;

  return <SpinnerComponent {...props} />;
}

export function SquareSpinner({ ...props }) {
  const { rotateZ, ...spinnerProps } = useSpring({
    enter: { rotateZ: 0 },
    from: { rotateZ: 360 },
    to: { rotateZ: 0 },
    loop: true,
    reset: true,
    config: {
      duration: 1500,
    },
  });

  return (
    <AnimatedView
      style={{
        position: "relative",
        width: 25,
        height: 25,
        transform: [{ rotateZ: rotateZ.to([0, 360], ["0deg", "360deg"]) }],
        ...spinnerProps,
      }}
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
  ...props
}: {
  speed?: number;
  dotCount?: number;
}) {
  const { rotateZ, ...spinnerProps } = useSpring({
    enter: { rotateZ: 0 },
    from: { rotateZ: 360 },
    to: { rotateZ: 0 },
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
    for (let i = 0; i <= numOfDots; i++) {
      const rotate = slice * i + start;
      const rotateReverse = rotate * -1;

      dotArray.push(
        <View
          style={[
            styles.circleDot,

            {
              ...(props.color && { backgroundColor: props.color }),
              transform: [
                { rotateZ: `${rotate}deg` },
                { translateX: 15, translateY: 15 },
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
      style={{
        position: "relative",
        width: 30,
        height: 30,
        borderRadius: 100,
        transform: [{ rotateZ: rotateZ.to([0, 360], ["0deg", "360deg"]) }],
        ...spinnerProps,
      }}
    >
      {dots(dotCount)}
    </AnimatedView>
  );
}

export function PullySpinner({ ...props }) {
  const { position, ...spinnerProps } = useSpring({
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
    <AnimatedView
      style={{
        position: "relative",
        justifyContent: "space-evenly",
        flexDirection: "row",
        width: 25,
        height: 20,
        borderRadius: 100,
        ...spinnerProps,
      }}
    >
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

export function ZigZagSpinner({ ...props }) {
  const { position, ...spinnerProps } = useSpring({
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
    <AnimatedView
      style={{
        position: "relative",
        justifyContent: "space-evenly",
        flexDirection: "row",
        width: 45,
        height: height,
        borderRadius: 100,
        ...spinnerProps,
      }}
    >
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
    </AnimatedView>
  );
}
export function CircularSpinner() {
  const { position, ...props } = useSpring({
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
    <AnimatedView
      style={{
        position: "relative",
        justifyContent: "space-evenly",
        flexDirection: "row",
        width: 45,
        height: height,
        borderRadius: 100,
        ...props,
      }}
    >
      <View style={{ flexGrow: 1, alignItems: "center" }}>
        <AnimatedView
          style={[
            styles.dot,
            {
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
              transform: [{ translateY: position.to([0, 1], [height, 0]) }],
            },
          ]}
        />
      </View>
    </AnimatedView>
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
    width: 4,
    height: 4,
    backgroundColor: "black",
    position: "absolute",
    bottom: 13,
    left: 13,
  },
});
