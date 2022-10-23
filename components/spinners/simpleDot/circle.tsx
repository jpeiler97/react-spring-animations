import { StyleSheet, View } from "react-native";
import { useSpring, animated } from "@react-spring/native";

const AnimatedView = animated(View);

export default function CircleSpinner({
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

const styles = StyleSheet.create({
  circleDot: {
    borderRadius: 100,
    backgroundColor: "black",
    position: "absolute",
  },
  circleSpinner: {
    position: "relative",
    width: 30,
    height: 30,
    borderRadius: 100,
  },
});
