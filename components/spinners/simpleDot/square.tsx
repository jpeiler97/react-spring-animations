import { StyleSheet, View } from "react-native";
import { useSpring, animated } from "@react-spring/native";

const AnimatedView = animated(View);

export default function SquareSpinner({ ...props }) {
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

const styles = StyleSheet.create({
  dot: {
    borderRadius: 100,
    width: 5,
    height: 5,
    backgroundColor: "black",
    position: "absolute",
    zIndex: 2000,
  },
  squareSpinner: {
    position: "relative",
    justifyContent: "space-evenly",
    flexDirection: "row",
    width: 25,
    height: 25,
    borderRadius: 100,
  },
});
