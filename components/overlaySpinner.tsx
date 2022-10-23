import Spinner from "./spinner";
import { View, StyleSheet } from "react-native";
import { animated, useSpring, useTransition } from "@react-spring/native";

const AnimatedView = animated(View);

export default function OverlaySpinner({ loading, ...props }) {
  return (
    <>
      {loading && (
        <AnimatedView key="overlay-spinner" style={styles.container}>
          <View style={styles.spinnerView}></View>
          <Spinner {...props} />
        </AnimatedView>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    zIndex: 3000,
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(0, 0, 0, 0.75)",
  },
  spinnerView: {
    padding: "1rem 2rem",
  },
});
