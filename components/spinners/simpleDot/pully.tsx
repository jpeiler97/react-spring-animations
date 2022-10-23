import { StyleSheet, View } from "react-native";
import { useSpring, animated } from "@react-spring/native";

const AnimatedView = animated(View);

export default function PullySpinner({ ...props }: { color?: string }) {
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

const styles = StyleSheet.create({
  dot: {
    borderRadius: 100,
    width: 5,
    height: 5,
    backgroundColor: "black",
    position: "absolute",
    zIndex: 2000,
  },

  pullySpinner: {
    position: "relative",
    justifyContent: "space-evenly",
    flexDirection: "row",
    width: 25,
    height: 20,
    borderRadius: 100,
  },
});
