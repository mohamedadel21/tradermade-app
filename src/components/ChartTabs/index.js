import React from "react";
import { Text, View, TouchableOpacity } from "react-native";
import styles from "./style";
import { Colors } from "../../theme/Colors";
import dates from "../../common/dates";

const ChartTabs = ({ selectedItem, onSelect }) => {
  
  
  return (
    <View style={styles.container}>
      {dates.map((item) => {
        return (
          <TouchableOpacity onPress={()=>onSelect(item)} style={styles.tab} key={item.key}>
            <Text
              style={[
                styles.text,
                selectedItem == item ? { color: Colors.lightGreen } : null,
              ]}
            >
              {item.label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default ChartTabs;
