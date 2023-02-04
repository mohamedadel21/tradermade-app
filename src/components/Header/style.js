import { StyleSheet } from "react-native";
import { Colors } from "../../theme/Colors";
export default styles = StyleSheet.create({
  container: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Colors.blue,
    paddingTop: 50,
    paddingBottom: 80,
  },
  title: {
    fontWeight: "bold",
  },
  description: {
    color: Colors.grey,
    marginTop: 15,
  },
});
