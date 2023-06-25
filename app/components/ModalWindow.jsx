import React from "react";
import { gStyles } from "../../style";
import { Modal, Text, Pressable, View } from "react-native";

export const ModalWindow = ({
  data,
  winner,
  modalVisible,
  setModalVisible,
  setMatches,
  setPlayerAmount,
  setAiAmount,
}) => {
  const restart = () => {
    setMatches(data);
    setPlayerAmount([]);
    setAiAmount([]);
    setModalVisible(false);
  };
  return (
    <View style={gStyles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={gStyles.centeredView}>
          <View style={gStyles.modalView}>
            <Text style={gStyles.description}>{winner} wins!</Text>
            <Pressable style={gStyles.button} onPress={restart}>
              <Text style={[gStyles.description, { color: "white" }]}>
                Restart game
              </Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </View>
  );
};
