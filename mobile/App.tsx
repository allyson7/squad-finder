import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hello NLW E-Sports</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#282a36",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 22,
    color: "#f8f8f2",
  },
});
