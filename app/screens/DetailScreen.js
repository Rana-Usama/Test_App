import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

function DetailScreen({ route }) {
  const navigation = useNavigation();

  const { orgName, priceValue, propertyID, unitSPECSID, originID, floorID, priceType, propertyCode, floorCode } = route.params;

  return (
    <View style={{ width: "90%", marginTop: RFPercentage(9), alignSelf: "center", justifyContent: "flex-start", alignItems: "flex-start" }}>
      <View style={{ width: "100%", justifyContent: "center", alignItems: "center", flexDirection: "row" }}>
        <TouchableOpacity activeOpacity={0.8} onPress={() => navigation.goBack()} style={{ position: "absolute", left: 0 }}>
          <Ionicons name="arrow-back-outline" size={24} color="black" />
        </TouchableOpacity>
        <Text style={{ color: "#06143b", fontSize: RFPercentage(3), fontWeight: "bold", alignSelf: "center" }}>Rest of the Details </Text>
      </View>
      <View style={{ marginTop: RFPercentage(4), width: "100%", justifyContent: "flex-start", alignItems: "flex-start" }}>
        <View style={{ width: "80%", flexDirection: "row", justifyContent: "flex-start", alignItems: "flex-start" }}>
          <Text style={{ color: "#000", fontSize: RFPercentage(2), fontWeight: "500" }}>ORG Name: </Text>
          <Text style={{ color: "#000", fontSize: RFPercentage(2), fontWeight: "500" }}>{orgName}</Text>
        </View>
        <Text style={{ marginTop: RFPercentage(1.2), color: "#000", fontSize: RFPercentage(2), fontWeight: "500" }}>Price Value: {priceValue}</Text>
        <Text style={{ marginTop: RFPercentage(1), color: "#000", fontSize: RFPercentage(2), fontWeight: "500" }}>Property ID: {propertyID}</Text>
        <Text style={{ marginTop: RFPercentage(1), color: "#000", fontSize: RFPercentage(2), fontWeight: "500" }}>Unit Specs ID: {unitSPECSID}</Text>
        <Text style={{ marginTop: RFPercentage(1), color: "#000", fontSize: RFPercentage(2), fontWeight: "500" }}>Origin ID: {originID}</Text>
        <Text style={{ marginTop: RFPercentage(1), color: "#000", fontSize: RFPercentage(2), fontWeight: "500" }}>Floor ID: {floorID}</Text>
        <Text style={{ marginTop: RFPercentage(1), color: "#000", fontSize: RFPercentage(2), fontWeight: "500" }}>Price Type: {priceType}</Text>
        <Text style={{ marginTop: RFPercentage(1), color: "#000", fontSize: RFPercentage(2), fontWeight: "500" }}>Property Code: {propertyCode}</Text>
        <Text style={{ marginTop: RFPercentage(1), color: "#000", fontSize: RFPercentage(2), fontWeight: "500" }}>Floor Code: {floorCode}</Text>
      </View>
    </View>
  );
}

export default DetailScreen;
