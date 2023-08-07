import React, { useState, useEffect } from "react";
import { View, Text, Dimensions, TouchableOpacity, ScrollView, Button, Image, KeyboardAvoidingView, StyleSheet, ImageBackground, TextInput, FlatList } from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";
import { AntDesign } from "@expo/vector-icons";
import axios from "axios";
import { useNavigation } from "@react-navigation/native";

//config
import Colors from "../config/Colors";

//components
import Screen from "../components/Screen";
import InputField from "./../components/common/InputField";

function MapScreen(props) {
  const navigation = useNavigation();
  const [inputField, setInputField] = useState([
    {
      placeholder: "Search Units",
      value: "",
    },
  ]);

  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    fetchDataFromApi();
  }, []);

  const fetchDataFromApi = async () => {
    const apiUrl = "http://tvh.flexion.ae:9091/get_pricesetup_units_API";
    const queryParams = {
      prop_code: "",
      org: "33",
      floor_code: "",
      unit_code: "",
      unit_desc: "",
    };

    try {
      const response = await axios.get(apiUrl, { params: queryParams });
      setData(response.data);
      console.log(response.data);
    } catch (error) {
      console.error("Error fetching data from the API:", error);
    }
  };

  useEffect(() => {
    // Filter the data based on the entered text
    const searchTerm = inputField[0].value.toLowerCase();
    const filteredData = data.filter((item) => {
      return item.UNIT_CODE.toLowerCase().includes(searchTerm) || item.UNIT_NAME.toLowerCase().includes(searchTerm);
    });

    setFilteredData(filteredData);
  }, [inputField[0].value, data]);

  const renderItem = ({ item }) => (
    <View
      style={{
        backgroundColor: "#cbdecc",
        alignItems: "center",
        marginTop: RFPercentage(1.7),
        width: RFPercentage(45),
        height: RFPercentage(35),
        borderRadius: RFPercentage(2),
        borderColor: "#b4a876",
        borderWidth: RFPercentage(0.1),
      }}
    >
      <View style={{ width: "90%", marginTop: RFPercentage(3), justifyContent: "flex-start", alignItems: "flex-start" }}>
        <Text style={{ fontSize: RFPercentage(2.6), color: "#06143b", fontWeight: "bold" }}>{item.UNIT_CODE}</Text>
        <Text style={{ fontSize: RFPercentage(2), color: "#06143b", fontWeight: "bold", marginTop: RFPercentage(0.5) }}>{item.UNIT_NAME}</Text>

        <View style={{ marginTop: RFPercentage(2) }}>
          <Text style={{ fontSize: RFPercentage(1.7), color: "#455866", fontWeight: "bold" }}>Id: {item.UNIT_ID}</Text>
        </View>

        <View style={{ marginTop: RFPercentage(10), flexDirection: "row", justifyContent: "flex-start", alignItems: "center" }}>
          <TouchableOpacity
            activeOpacity={0.8}
            style={{
              width: RFPercentage(12),
              height: RFPercentage(4.5),
              borderColor: "#b4a876",
              borderWidth: RFPercentage(0.1),
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              elevation: 4,
              backgroundColor: "#cbe1d7",
              shadowColor: "#000",
              shadowOffset: { width: 0, height: 2 },
              shadowOpacity: 0.4,
              shadowRadius: 4,
            }}
          >
            <Text style={{ fontSize: RFPercentage(1.4), color: "#455866", fontWeight: "bold" }}>Add Details</Text>
            <AntDesign name="arrowright" style={{ fontSize: RFPercentage(2), marginLeft: RFPercentage(0.2) }} color="black" />
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.8}
            style={{
              width: RFPercentage(12),
              height: RFPercentage(4.5),
              borderColor: "#b4a876",
              borderWidth: RFPercentage(0.1),
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              elevation: 4,
              backgroundColor: "#cbe1d7",
              shadowColor: "#000",
              shadowOffset: { width: 0, height: 2 },
              shadowOpacity: 0.4,
              shadowRadius: 4,
              marginLeft: RFPercentage(1),
            }}
          >
            <Text style={{ fontSize: RFPercentage(1.4), color: "#455866", fontWeight: "bold" }}>Confirm</Text>
            <AntDesign name="arrowright" style={{ fontSize: RFPercentage(2), marginLeft: RFPercentage(0.2) }} color="black" />
          </TouchableOpacity>
        </View>

        <View style={{ marginTop: RFPercentage(1), width: "100%", justifyContent: "flex-end", alignItems: "flex-end" }}>
          <TouchableOpacity onPress={() => handleViewDetail(item)} activeOpacity={0.8} style={{ flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
            <Text style={{ fontSize: RFPercentage(1.5), color: "#06143b", fontWeight: "bold" }}>View Detail</Text>
            <AntDesign name="arrowright" style={{ fontSize: RFPercentage(1.8), marginLeft: RFPercentage(0.5) }} color="black" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );

  const handleViewDetail = (item) => {
    navigation.navigate("DetailScreen", {
      orgName: item.ORG_NAME,
      priceValue: item.PRICE_VALUE,
      propertyID: item.PROPERTY_ID,
      unitSPECSID: item.UNIT_SPECS_ID,
      originID: item.ORG_ID,
      floorID: item.FLOOR_ID,
      priceType: item.PRICE_TYPE,
      propertyCode: item.PROPERTY_CODE,
      floorCode: item.FLOOR_CODE,
    });
  };

  return (
    <Screen style={styles.screen}>
      {/* Input field */}
      <View style={{ marginTop: RFPercentage(1), justifyContent: "center", alignItems: "center", width: "100%" }}>
        {inputField.map((item, i) => (
          <View key={i} style={{ marginTop: i == 0 ? 0 : RFPercentage(1.5) }}>
            <InputField
              placeholder={item.placeholder}
              placeholderColor={"#c0c0c2"}
              height={RFPercentage(6)}
              backgroundColor={Colors.white}
              borderWidth={RFPercentage(0.1)}
              borderColor={"#b4a876"}
              secure={item.secure}
              borderRadius={RFPercentage(1.8)}
              fontSize={RFPercentage(2)}
              handleFeild={(text) => setInputField([{ ...item, value: text }])}
              value={item.value}
              width={"92%"}
            />
          </View>
        ))}
      </View>

      {/* Heading */}
      <View style={{ marginTop: RFPercentage(2), flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
        <Text style={{ fontSize: RFPercentage(1.9), color: "#06143b", fontWeight: "bold" }}>Create Receipt</Text>
        <AntDesign name="arrowright" style={{ fontSize: RFPercentage(2.1), marginLeft: RFPercentage(1) }} color="black" />
      </View>

      {/* Data Carts */}
      <View style={{ width: "100%" }}>
        <FlatList
          data={filteredData}
          renderItem={renderItem}
          keyExtractor={(item) => item.UNIT_ID.toString()}
          contentContainerStyle={{ justifyContent: "center", alignItems: "center", width: "100%" }}
        />
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  screen: {
    width: "100%",
    height: "100%",
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: Colors.white,
  },
});

export default MapScreen;
