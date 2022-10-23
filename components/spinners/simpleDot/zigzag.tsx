import { StyleSheet, View } from "react-native";
import { useSpring, animated } from "@react-spring/native";

const AnimatedView = animated(View);

export default function ZigZagSpinner({ ...props }: { color?: string }) {
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
  zigZagSpinner: {
    position: "relative",
    justifyContent: "space-evenly",
    flexDirection: "row",
    width: 45,
    borderRadius: 100,
  },
});
