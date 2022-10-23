import { View } from "react-native";
import ComplexSpinnerDemo from "./components/spinnerDemos/complexDotDemo";
import SimpleSpinnerDemo from "./components/spinnerDemos/simpleDotDemo";

export default function App() {
  return (
    <View
      style={{
        flexDirection: "row",
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <SimpleSpinnerDemo />
    </View>
  );
}
