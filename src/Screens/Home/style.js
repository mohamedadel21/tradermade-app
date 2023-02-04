import { StyleSheet } from "react-native";
import { Colors } from "../../theme/Colors";

export default styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
    backgroundColor: Colors.white,
  },
  calculateCurrencyContent: {
    width: "80%",
    shadowColor: Colors.black,
    shadowRadius: 4,
    shadowOffset: { height: 4, width: 0 },
    shadowOpacity: 0.1,
    backgroundColor: Colors.white,
    elevation: 10,
    borderRadius: 7,
    marginTop: -50,
    alignItems: "center",
    justifyContent: "flex-start",
  },
  chartHeader: {
    marginVertical: 20,
    fontWeight: "bold",
    fontSize: 15,
  },
  chartContent: {
    width: "80%",
    shadowColor: Colors.black,
    shadowRadius: 4,
    shadowOffset: { height: 4, width: 0 },
    shadowOpacity: 0.1,
    backgroundColor: Colors.white,
    elevation: 10,
    borderRadius: 7,
    marginTop: 50,
    alignItems: "center",
    justifyContent: "flex-start",
  },
  modalsContent: {
    backgroundColor: Colors.lightBlue,
    width: "100%",
    height: 50,
    shadowColor: Colors.black,
    paddingHorizontal: 20,
    borderTopRightRadius: 7,
    borderTopLeftRadius: 7,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  resultText: {
    marginTop: 20,
    fontWeight: "bold",
    fontSize: 20,
  },
  resultTextPercent: {
    color: Colors.lightGreen,
    fontWeight: "bold",
    marginBottom: 15,
    marginTop: 10,
  },
  chartConfig: {
    backgroundColor: Colors.white,
    backgroundGradientFrom: Colors.darkBlue,
    backgroundGradientTo: Colors.darkBlue,
    decimalPlaces: 2,
    color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
    labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
    style: {},
    propsForDots: {
      r: "6",
      strokeWidth: "2",
      stroke: Colors.darkBlue,
    },
    linejoinType: "round",
  },
  chartStyle:{
    marginVertical: 8,
    borderRadius:3
  }
});
