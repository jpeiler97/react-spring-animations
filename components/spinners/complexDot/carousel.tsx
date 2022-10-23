import { View, StyleSheet } from "react-native";
import { animated, useSpring } from "@react-spring/native";

const AnimatedView = animated(View);

export default function CarouselSpinner() {
  const { pos } = useSpring({
    enter: { pos: 0 },
    from: { pos: 0 },
    to: { pos: 1 },
    loop: true,
    config: {
      duration: 650,
    },
  });

  return (
    <View style={styles.carousel}>
      <AnimatedView
        style={[
          styles.dot,
          {
            right: pos.to([0, 1], [30, 45]),
            opacity: pos.to([0, 1], [1, 0]),
          },
        ]}
      />
      <AnimatedView
        style={[
          styles.dot,
          {
            right: pos.to([0, 1], [15, 30]),
            opacity: 1,
          },
        ]}
      />
      <AnimatedView
        style={[
          styles.dot,
          {
            right: pos.to([0, 1], [0, 15]),
            opacity: pos.to([0, 1], [0, 1]),
          },
        ]}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  carousel: {
    width: 60,
    height: 15,
    alignItems: "center",
    flexDirection: "row",
  },
  dot: {
    position: "absolute",
    borderRadius: 100,
    width: 10,
    height: 10,
    backgroundColor: "black",
  },
});
