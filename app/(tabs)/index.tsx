import React from "react";
import { Text, View } from "react-native";

export default function HomeScreen() {
  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 1, backgroundColor: "green" }}>
        <Text>Hi Again</Text>
      </View>

      <View style={{ flex: 1, backgroundColor: "red" }}>
        <Text>Hi Again</Text>
      </View>
    </View>
  );
}
