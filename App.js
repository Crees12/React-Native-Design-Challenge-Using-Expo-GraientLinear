import React from "react";
import { StyleSheet, Text, View, Image, ImageBackground } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <ImageBackground
        style={{ width: "100%", height: "100%" }}
        source={require("./assets/images/bg-mobile.png")}
      >
        <View style={styles.top}>
          <Image
            style={styles.logo}
            source={require("./assets/images/logo.png")}
          ></Image>
          <View style={styles.iconContainer}>
            <View style={styles.icon}>
              <Image
                style={styles.document}
                source={require("./assets/images/icon-document.png")}
              ></Image>
            </View>

            <View style={styles.icon}>
              <Image
                style={styles.upload}
                source={require("./assets/images/icon-folder.png")}
              ></Image>
            </View>

            <View style={styles.icon}>
              <Image
                style={styles.upload}
                source={require("./assets/images/icon-upload.png")}
              ></Image>
            </View>
          </View>
        </View>
        <View style={styles.bottom}>
          <View style={styles.topText}>
            <Text style={styles.text}>
              You've used <Text style={styles.strongText}>815 GB</Text> of your
              storage
            </Text>
          </View>
          <View style={styles.bar}>
            <View style={styles.leftBar}>
              <View style={styles.dot}></View>
            </View>
          </View>
          <View style={styles.bottomCard}>
            <Text style={styles.bottomText}>185</Text>
            <Text style={styles.bottomTextFainted}> GB LEFT</Text>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  bottomText: {
    fontSize: 30,
    alignSelf: "center",
    justifyContent: "center",
  },
  bottomTextFainted: {
    fontSize: 18,
    color: "gray",
    alignSelf: "center",
    justifyContent: "center",
  },
  bottomCard: {
    borderRadius: 10,
    flexDirection: "row",
    backgroundColor: "white",
    width: "50%",
    marginTop: 50,
    height: 100,
    justifyContent: "center",
    alignSelf: "center",
  },
  leftBar: {
    width: "80%",
    margin: 3,
    height: 19,
    borderRadius: 10,
    backgroundColor: "hsl(6, 100%, 80%)",
    color: "hsl(335, 100%, 65%)",
  },
  dot: {
    borderRadius: 10,
    width: 17,
    height: 17,
    backgroundColor: "white",
    alignSelf: "flex-end",
    marginTop: 1,
    justifyContent: "center",
  },
  bar: {
    alignSelf: "center",
    marginTop: 10,
    width: "90%",
    height: 25,
    borderRadius: 10,
    backgroundColor: "hsl(229, 57%, 11%)",
  },
  text: {
    color: "gray",
    fontSize: 17,
  },
  strongText: {
    color: "white",
    fontSize: 20,
  },
  topText: {
    margin: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    alignSelf: "center",
    marginTop: 50,
    marginRight: 90,
    width: 135,
    height: 40,
  },
  top: {
    borderRadius: 10,
    borderTopRightRadius: 100,
    backgroundColor: "hsl(228, 56%, 26%)",
    width: "90%",
    marginTop: 150,
    height: 200,

    alignSelf: "center",
  },
  iconContainer: {
    flexDirection: "row",
    alignSelf: "center",
    justifyContent: "space-between",
    marginTop: 50,
    marginRight: 90,
  },
  folder: {
    alignSelf: "center",
    justifyContent: "center",
    margin: 8,
  },
  document: {
    alignSelf: "center",
    justifyContent: "center",
    margin: 7,
  },
  upload: {
    alignSelf: "center",
    justifyContent: "center",
    margin: 10,
  },
  icon: {
    borderRadius: 12,
    borderWidth: 1,
    width: 40,
    height: 40,
    backgroundColor: "hsl(229, 57%, 11%)",
    alignSelf: "center",
    margin: 8,
    justifyContent: "space-between",
  },
  bottom: {
    borderRadius: 10,

    backgroundColor: "hsl(228, 56%, 26%)",
    width: "90%",
    marginTop: 20,
    height: 200,

    alignSelf: "center",
  },
});
