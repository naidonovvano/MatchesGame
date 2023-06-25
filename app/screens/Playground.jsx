import React, { useState, useEffect } from "react";
import { gStyles } from "../../style";
import uuid from "react-native-uuid";
import { View, Text, Image, Pressable } from "react-native";
import { ModalWindow } from "../components/ModalWindow";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const data = Array(25)
  .fill()
  .map(() => ({
    id: uuid.v4(),
    match: require("../../assets/match.png"),
  }));

export const Playground = ({ route }) => {
  const [player, setPlayer] = useState(route.params.player);
  const [matches, setMatches] = useState(data);
  const [aiAmount, setAiAmount] = useState([]);
  const [playerAmount, setPlayerAmount] = useState([]);
  const [selectedMatches, setSelectedMatches] = useState([]);
  const [winner, setWinner] = useState("");
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    if (matches.length < 1) {
      playerAmount.length % 2 === 0 ? setWinner("Player") : setWinner("AI");
      setModalVisible(!modalVisible);
    }
  }, [matches]);

  useEffect(() => {
    if (player === "AI" && matches.length > 0) {
      const Debounce = setTimeout(() => {
        const pick = bestPick(matches);
        const pickedMatches = matches.slice(0, pick);
        setAiAmount((prevAiAmount) => [...prevAiAmount, ...pickedMatches]);
        setMatches((prevMatches) =>
          prevMatches.filter((match) => !pickedMatches.includes(match))
        );
        setPlayer("Player");
      }, 1000);
      return () => clearTimeout(Debounce);
    }
    setSelectedMatches([]);
  }, [player, matches]);

  const bestPick = (matches) => {
    let pick = matches.length % 4;
    if (pick === 0) {
      pick = 1;
    }
    return pick;
  };

  const selectMatch = (id) => {
    setSelectedMatches((prevSelectedMatches) => {
      if (prevSelectedMatches.includes(id)) {
        return prevSelectedMatches.filter((matchId) => matchId !== id);
      } else {
        if (prevSelectedMatches.length < 3) {
          return [...prevSelectedMatches, id];
        } else {
          return prevSelectedMatches;
        }
      }
    });
  };

  const getMatches = () => {
    if (player === "Player") {
      setPlayerAmount((prevPlayerAmount) => [
        ...prevPlayerAmount,
        ...selectedMatches,
      ]);
    } else if (player === "AI") {
      setAiAmount((prevAiAmount) => [...prevAiAmount, ...pickedMatches]);
    }
    setMatches((prevMatches) =>
      prevMatches.filter((match) => !selectedMatches.includes(match.id))
    );
    setSelectedMatches([]);
    setPlayer("AI");
  };

  return (
    <View style={gStyles.sections}>
      <View style={{ position: "absolute" }}>
        {matches.length === 0 && (
          <ModalWindow
            data={data}
            winner={winner}
            modalVisible={modalVisible}
            setMatches={setMatches}
            setModalVisible={setModalVisible}
            setAiAmount={setAiAmount}
            setPlayerAmount={setPlayerAmount}
          />
        )}
      </View>
      <View style={gStyles.ai_section}>
        <Text style={[gStyles.description, { color: "white", fontSize: 28 }]}>
          AI
        </Text>
        <Text style={gStyles.description}>Counter: {aiAmount.length}</Text>
        <View style={gStyles.matchesContainer}>
          {aiAmount.length > 0 &&
            Array(aiAmount.length)
              .fill()
              .map(() => (
                <View style={{ height: 30, width: 30 }} key={uuid.v4()}>
                  <MaterialCommunityIcons
                    name="magic-staff"
                    size={30}
                    color="black"
                  />
                </View>
              ))}
        </View>
      </View>
      <View style={gStyles.pg_section}>
        {player === "Player" && (
          <View>
            <Text style={gStyles.description}>
              Please, pick an amount of matches
            </Text>
          </View>
        )}
        <View style={gStyles.matchesContainer}>
          {matches.map((match) => (
            <Pressable
              style={[
                gStyles.match,
                selectedMatches.includes(match.id) && gStyles.selectedMatch,
              ]}
              key={match.id}
              onPress={() => selectMatch(match.id)}
            >
              <Image source={match.match} style={gStyles.matchImage} />
            </Pressable>
          ))}
        </View>
        <Text style={gStyles.description}>
          {matches.length} matches remaining... {player}'s turn
        </Text>
        {player === "Player" && selectedMatches.length > 0 && (
          <View style={gStyles.getButtonContainer}>
            <Pressable style={gStyles.button} onPress={() => getMatches()}>
              <Text style={[gStyles.description, { color: "white" }]}>
                Get matches
              </Text>
            </Pressable>
          </View>
        )}
      </View>
      <View style={gStyles.player_section}>
        <Text style={[gStyles.description, { color: "white", fontSize: 28 }]}>
          YOU
        </Text>
        <Text style={gStyles.description}>Counter: {playerAmount.length}</Text>
        <View style={gStyles.matchesContainer}>
          {playerAmount.length > 0 &&
            Array(playerAmount.length)
              .fill()
              .map(() => (
                <View style={{ height: 30, width: 30 }} key={uuid.v4()}>
                  <MaterialCommunityIcons
                    name="magic-staff"
                    size={30}
                    color="black"
                  />
                </View>
              ))}
        </View>
      </View>
    </View>
  );
};
