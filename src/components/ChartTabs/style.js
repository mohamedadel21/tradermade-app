import { StyleSheet } from "react-native";
import { Colors } from "../../theme/Colors";
export default styles = StyleSheet.create({
  container: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    flexDirection:'row',
    marginTop:20,
    marginBottom:5
  },
  text: {
    fontWeight: "bold",
    fontSize:12,
    color:Colors.grey
  },
  tab: {
    marginHorizontal:10,
    width:30,
    height:30
  },
});
