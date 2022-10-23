import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { useSpring, animated } from "@react-spring/native";
import { useState } from "react";
import Spinner from "../spinner";
import OverlaySpinner from "../overlaySpinner";

const AnimatedView = animated(View);

export default function ComplexSpinnerDemo() {
  const initLoadingState = {
    carousel: false,
  };

  const allLoadingState = {
    carousel: true,
  };

  const [loading, setLoading] = useState(initLoadingState);
  const [overlay, toggleOverlay] = useState(false);

  const carouselViewProps = useSpring({ opacity: loading.carousel ? 1 : 0 });

  const allLoading = Object.values(loading).some((state) => state);

  const handleToggleOverlay = () => {
    toggleOverlay(true);
    setTimeout(() => toggleOverlay(false), 2000);
  };

  return (
    <>
      <View style={styles.container}>
        <TouchableOpacity
          style={{ marginBottom: 15 }}
          onPress={() => handleToggleOverlay()}
        >
          <Text>Press to preview overlay spinner</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{ marginBottom: 15 }}
          onPress={() =>
            setLoading((loading) =>
              allLoading ? initLoadingState : allLoadingState
            )
          }
        >
          <Text>Press to {allLoading ? "stop" : "start"} all spinners</Text>
        </TouchableOpacity>
        <View style={{ alignItems: "center" }}>
          <Text
            style={{
              fontSize: 18,
              fontWeight: "bold",
              borderBottomColor: "gray",
              borderBottomWidth: 2,
              paddingBottom: 5,
            }}
          >
            Complex Dot Spinner Variants
          </Text>
          <View style={{ flexDirection: "row" }}>
            <View style={styles.loaderContainer}>
              <Text
                style={styles.loaderLabel}
                onPress={() =>
                  setLoading({ ...loading, carousel: !loading.carousel })
                }
              >
                Carousel
              </Text>
              <AnimatedView style={[styles.loaderDisplay, carouselViewProps]}>
                {loading.carousel && <Spinner type="carousel" />}
              </AnimatedView>
            </View>
          </View>
        </View>
      </View>
      <OverlaySpinner color="white" type="carousel" loading={overlay} />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  loaderContainer: {
    marginHorizontal: 10,
    alignItems: "center",
  },
  loaderLabel: {
    fontSize: 18,
    // width: 100,
    textAlign: "center",
    fontWeight: "bold",
    marginVertical: 15,

    padding: 5,
  },
  loaderDisplay: {
    height: 30,
    width: 45,
    alignItems: "center",
    justifyContent: "center",
  },
});
