import Spinner from "./spinner";
import { View, StyleSheet } from "react-native";

type OverlaySpinnerProps = {
  loading: boolean;
  color?: string;
  speed?: number;
  size?: number;
  type?: "square" | "circle" | "pully" | "zigzag" | "carousel"; //replace with keyof typeof [Spinners]
};

export default function OverlaySpinner({
  loading,
  ...props
}: OverlaySpinnerProps) {
  return (
    <>
      {loading && (
        <View key="overlay-spinner" style={styles.container}>
          <View style={styles.spinnerView}></View>
          <Spinner {...props} />
        </View>
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
