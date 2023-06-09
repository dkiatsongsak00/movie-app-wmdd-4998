import React from "react";
import { View, StyleSheet } from "react-native";
import { Select } from "native-base";
import { CheckIcon } from "native-base";

const SelectItem = ({ value, items, setValue }) => {
  return (
    <View style={styles.dropdownContainer}>
      <Select
        selectedValue={value}
        onValueChange={(itemValue) => setValue(itemValue)}
        _selectedItem={{
          bg: "teal.600",
          endIcon: <CheckIcon size="6" color="white" />,
          _text: { color: "white" },
          borderRadius: 8,
        }}
      >
        {items.map((item) => (
          <Select.Item key={item.value} label={item.label} value={item.value} />
        ))}
      </Select>
    </View>
  );
};

const styles = StyleSheet.create({
  dropdownContainer: {
    margin: 30,
    width: "50%",
    alignSelf: "center",
  },
});

export default SelectItem;
