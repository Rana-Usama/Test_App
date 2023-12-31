import React, { useState } from "react";
import { View, TextInput, TouchableOpacity } from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { Ionicons, Feather } from "@expo/vector-icons";

//config
import Colors from "../../config/Colors";

function InputField({
  onTouchStart = () => {},
  onTouchEnd = () => {},
  placeholder,
  handleFeild,
  borderColor = Colors.white,
  borderWidth = RFPercentage(0),
  fontFamily = null,
  placeholderColor = "#B4B6B8",
  borderRadius = RFPercentage(1),
  backgroundColor = Colors.white,
  keyboardType = "default",
  textCenter = "left",
  fontSize = RFPercentage(2.5),
  editIcon = false,
  dropdownIcon = false,
  width,
  value,
  height = RFPercentage(6.9),
  secure = false,
  handleClear = false,
  leftIconName = "",
  autoFocus = false,
  searchMarginLeft = null,
  color = "black",
  ...otherProps
}) {
  const [eyeIcon, setEyeIcon] = useState(false);

  return (
    <View
      style={{
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row",
        backgroundColor: backgroundColor,
        borderColor: borderColor,
        borderWidth: borderWidth,
        width: width,
        height: height,
        borderRadius: borderRadius,
        marginVertical: RFPercentage(0.7),
      }}
    >
      <TextInput
        placeholder={placeholder}
        placeholderTextColor={placeholderColor}
        onChangeText={(text) => handleFeild(text)}
        onResponderStart={onTouchStart}
        onEndEditing={onTouchEnd}
        value={value}
        autoFocus={autoFocus}
        keyboardType={keyboardType}
        secureTextEntry={secure && !eyeIcon}
        textAlign={textCenter}
        style={{ left: RFPercentage(1), fontWeight: "bold", color: color, alignSelf: "center", fontFamily: fontFamily, fontSize: fontSize, width: "90%" }}
        {...otherProps}
      ></TextInput>

      <TouchableOpacity style={{ right: RFPercentage(2) }}>
        <MaterialCommunityIcons name="folder-search-outline" style={{ fontSize: RFPercentage(3) }} color="#06143b" />
      </TouchableOpacity>
    </View>
  );
}

export default InputField;
