import React from "react";
import { Text ,View} from "react-native";
import styles from "./style";

const CurrencyModal = ({ title, description }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.description}>{description}</Text>
    </View>
  );
};

export default CurrencyModal;
