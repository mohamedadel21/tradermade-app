import React, { useState, useRef, useEffect } from "react";
import {
  TouchableOpacity,
  ScrollView,
  View,
  Dimensions,
  Modal,
  Text,
  Image,
} from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";
import styles from "./styles";
import { Colors } from "../../theme/Colors";

const Dropdown = ({ label, data, onSelect, style }) => {
  const [selectedItem, setSelectedItem] = useState({ item: "" });

  const DropdownButton = useRef();
  const [visible, setVisible] = useState(false);

  const [measurments, setMeasurments] = useState({});

  useEffect(() => {
    DropdownButton.current.measure((x, y, width, height, px, py) => {
      setMeasurments({ width, height, px, py });
    });
  }, [visible]);

  const toggleFunction = () => {
    setVisible(!visible);
  };

  const getCoountryFlagUrl = (countryCode) => {
    return `https://wise.com/public-resources/assets/flags/rectangle/${String(
      countryCode
    ).toLocaleLowerCase()}.png`;
  };

  const onItemPress = (item) => {
    setSelectedItem(item);
    onSelect(item);
    setVisible(false);
    onSelect(item);
  };

  const renderDropdown = () => {
    const { width, height, px, py } = measurments;
    const isAR = false;
    const screenWidth = Dimensions.get("screen").width;

    return (
      <Modal transparent={true}>
        <TouchableOpacity
          onPress={() => {
            setVisible(false);
          }}
          style={{
            flex: 1,
          }}
        >
          <View
            style={[
              styles.dropdown,
              {
                width: width * 1.1,
                top: py + height,
                left: isAR ? screenWidth - width - px : px,
              },
            ]}
          >
            <ScrollView>
              {data?.map((item,index) => {
                return (
                  <TouchableOpacity
                    key={JSON.stringify(item)}
                    style={styles.item}
                    onPress={() => onItemPress(item)}
                  >
                    <Image
                      source={{ uri: getCoountryFlagUrl(item) }}
                      style={styles.countryFlag}
                      resizeMode="stretch"
                    />
                    <Text style={styles.buttonText}>{item}</Text>
                  </TouchableOpacity>
                );
              })}
            </ScrollView>
          </View>
        </TouchableOpacity>
      </Modal>
    );
  };

  return (
    <View style={[styles.container, style]}>
      <TouchableOpacity
        onPress={() => toggleFunction()}
        ref={DropdownButton}
        style={[styles.button]}
      >
        <AntDesign name="down" color={Colors.primary} size={13} />
        <Image
          source={{
            uri: getCoountryFlagUrl(
              selectedItem.item === "" ? label : selectedItem
            ),
          }}
          style={styles.countryFlag}
          resizeMode="stretch"
        />
        <Text style={styles.buttonText}>
          {selectedItem.item === "" ? label : selectedItem}
        </Text>
        {visible == true ? renderDropdown() : null}
      </TouchableOpacity>
    </View>
  );
};

export default Dropdown;
