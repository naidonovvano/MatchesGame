import React from "react";
import { gStyles } from "../../style";
import { TouchableOpacity, View, Text } from "react-native";

export const Main = ({ navigation }) => {
  const startGame = (player) => {
    navigation.navigate("Playground", { player: player });
  };

  return (
    <View style={gStyles.mainContainer}>
      <View style={gStyles.routeContainer}>
        <Text style={[gStyles.description, {fontSize: 30}]}>Rules:</Text>
        <Text style={gStyles.description}>1. Turns are taken alternately</Text>
        <Text style={gStyles.description}>2. On each turn, you can take 1, 2, or 3 matches</Text>
        <Text style={gStyles.description}>3. The winner is the one with an even number of matches</Text>
      </View>
      <View style={gStyles.routeContainer}>
        <Text style={gStyles.description}>Choose who goes first:</Text>
        <TouchableOpacity onPress={() => startGame("AI")} style={gStyles.route}>
          <Text style={gStyles.description}>AI</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => startGame("Player")}
          style={[gStyles.route, { backgroundColor: "lightgreen" }]}
        >
          <Text style={gStyles.description}>Player</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
