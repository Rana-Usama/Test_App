import React, { useState } from "react";
import { View, Text, Dimensions, TouchableOpacity, ScrollView, Button, Image, KeyboardAvoidingView, StyleSheet, ImageBackground, TextInput } from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";
import { AntDesign } from "@expo/vector-icons";

//config
import Colors from "../config/Colors";

//components
import Screen from "../components/Screen";
import InputField from "./../components/common/InputField";

function MapScreen(props) {
  const cartaData = [
    {
      t1: "MGT2-FL26-2602 937",
      t2: "29,140",
      t3: "ID - 4899",
      t4: "Receipt No - 4899",
      t5: "Receipt Date - 26-May-2023",
      t6: "Customer - Alsu Sharapova",
      t7: "Received From - Alsu Sharapova",
      t8: "Naration - AED 29,131.81/-Payment Received",
      t9: "Towards Advance Installments For Unit 2602",
      t10: "Confirm - No",
    },
    {
      t1: "MGT1-FL21-2108 1184",
      t2: "57,890",
      t3: "ID - 4898",
      t4: "Receipt No - 4898",
      t5: "Receipt Date - 26-May-2023",
      t6: "Customer - Nikos Neofytou",
      t7: "Received From - Nikos Neofytou",
      t8: "Naration - AED%2057,890/-%20",
      t9: "Towards Advance Installments For Unit 2602",
      t10: "Confirm - Yes",
    },
    {
      t1: "GH54-GH66-3653 2234",
      t2: "22,456",
      t3: "ID - 1212",
      t4: "Receipt No - 1212",
      t5: "Receipt Date - 26-May-2023",
      t6: "Customer - Jhon Nakiya",
      t7: "Received From - Jhon Nakiya",
      t8: "Naration - AED%2057,890/-%20",
      t9: "Towards Advance Installments For Unit 2602",
      t10: "Confirm - Yes",
    },
    {
      t1: "JH77-7866-4435 3344",
      t2: "98,456",
      t3: "ID - 3232",
      t4: "Receipt No - 3232",
      t5: "Receipt Date - 26-May-2023",
      t6: "Customer - Jhon Nakiya",
      t7: "Received From - Jhon Nakiya",
      t8: "Naration - AED%2057,890/-%20",
      t9: "Towards Advance Installments For Unit 2602",
      t10: "Confirm - Yes",
    },
  ];
  const [inputField, SetInputField] = useState([
    {
      placeholder: "Search Units",
      value: "",
    },
  ]);

  const [filteredCartData, setFilteredCartData] = useState(cartaData);

  const handleChange = (text, i) => {
    let tempFields = [...inputField];
    tempFields[i].value = text;
    SetInputField(tempFields);

    // Filter the cart data based on the entered text
    const searchTerm = text.toLowerCase();
    const filteredData = cartaData.filter((item) => {
      return (
        item.t1.toLowerCase().includes(searchTerm) ||
        item.t2.toLowerCase().includes(searchTerm) ||
        item.t3.toLowerCase().includes(searchTerm) ||
        item.t4.toLowerCase().includes(searchTerm) ||
        item.t5.toLowerCase().includes(searchTerm) ||
        item.t6.toLowerCase().includes(searchTerm) ||
        item.t7.toLowerCase().includes(searchTerm) ||
        item.t8.toLowerCase().includes(searchTerm) ||
        item.t9.toLowerCase().includes(searchTerm) ||
        item.t10.toLowerCase().includes(searchTerm)
      );
    });

    setFilteredCartData(filteredData);
  };
  return (
    <Screen style={styles.screen}>
      <ScrollView style={{ flex: 1, width: "100%", marginTop: RFPercentage(1) }}>
        <View style={{ justifyContent: "center", alignItems: "center", width: "100%" }}>
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
                  handleFeild={(text) => handleChange(text, i)}
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
          {filteredCartData &&
            filteredCartData.map((item, i) => (
              <View
                key={i}
                style={{
                  backgroundColor: "#cbdecc",
                  alignItems: "center",
                  marginTop: i == 0 ? RFPercentage(3) : RFPercentage(1.7),
                  width: "90%",
                  height: RFPercentage(48),
                  borderRadius: RFPercentage(2),
                  borderColor: "#b4a876",
                  borderWidth: RFPercentage(0.1),
                }}
              >
                <View style={{ width: "90%", marginTop: RFPercentage(5), justifyContent: "flex-start", alignItems: "flex-start" }}>
                  <Text style={{ fontSize: RFPercentage(2.6), color: "#06143b", fontWeight: "bold" }}>{item.t1}</Text>
                  <Text style={{ fontSize: RFPercentage(2), color: "#06143b", fontWeight: "bold" }}>{item.t2}</Text>

                  <View style={{ marginTop: RFPercentage(3) }}>
                    <Text style={{ fontSize: RFPercentage(1.7), color: "#455866", fontWeight: "bold" }}> {item.t3} </Text>
                    <Text style={{ marginTop: RFPercentage(0.5), fontSize: RFPercentage(1.7), color: "#455866", fontWeight: "bold" }}>{item.t4}</Text>
                    <Text style={{ marginTop: RFPercentage(0.5), fontSize: RFPercentage(1.7), color: "#455866", fontWeight: "bold" }}>{item.t5}</Text>
                    <Text style={{ marginTop: RFPercentage(0.5), fontSize: RFPercentage(1.7), color: "#455866", fontWeight: "bold" }}>{item.t6}</Text>
                    <Text style={{ marginTop: RFPercentage(0.5), fontSize: RFPercentage(1.7), color: "#455866", fontWeight: "bold" }}>{item.t7}</Text>
                    <Text style={{ marginTop: RFPercentage(0.5), fontSize: RFPercentage(1.7), color: "#455866", fontWeight: "bold" }}>{item.t8}</Text>
                    <Text style={{ marginTop: RFPercentage(0.5), fontSize: RFPercentage(1.7), color: "#455866", fontWeight: "bold" }}>{item.t9}</Text>
                  </View>

                  <Text style={{ marginTop: RFPercentage(3), fontSize: RFPercentage(1.7), color: "#455866", fontWeight: "bold" }}>{item.t10}</Text>

                  <View style={{ marginTop: RFPercentage(2), flexDirection: "row", justifyContent: "flex-start", alignItems: "center" }}>
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
                </View>

                <View style={{ marginTop: RFPercentage(1), width: "90%", justifyContent: "flex-end", alignItems: "flex-end" }}>
                  <TouchableOpacity activeOpacity={0.8} style={{ flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
                    <Text style={{ fontSize: RFPercentage(1.5), color: "#06143b", fontWeight: "bold" }}>View Detail</Text>
                    <AntDesign name="arrowright" style={{ fontSize: RFPercentage(1.8), marginLeft: RFPercentage(0.5) }} color="black" />
                  </TouchableOpacity>
                </View>
              </View>
            ))}
        </View>
        <View style={{ marginBottom: RFPercentage(6) }} />
      </ScrollView>
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
