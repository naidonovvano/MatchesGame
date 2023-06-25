import { StyleSheet, Dimensions} from "react-native";

const { width } = Dimensions.get("window");
const isSmallScreen = width <= 375;

export const gStyles = StyleSheet.create({
  safeAreaContainer: {
    flex: 1,
  },
  mainContainer: {
    flex: 1,
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "lightgray",
  },
  routeContainer: {
    width: "90%",
    padding: 20,
  },
  route: {
    margin: 10,
    padding: 10,
    borderWidth: 2,
    borderColor: "black",
    backgroundColor: "lightpink",
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  sections: {
    flex: 1,
    justifyContent: "center",
    textAlign: "center",
    width: "100%",
  },
  description: {
    fontFamily: "Vina",
    textAlign: "center",
    fontSize: isSmallScreen ? 18 : 20,
  },
  ai_section: {
    flex: 1,
    backgroundColor: "lightpink",
    justifyContent: "space-around",
  },
  pg_section: {
    flex: 2,
    alignItems: "center",
    justifyContent: "space-around",
    borderTopWidth: 2,
    borderBottomWidth: 2,
    borderColor: "black",
    backgroundColor: "lightgray",
  },
  matchesContainer: {
    justifyContent: "center",
    flexDirection: "row",
    flexWrap: "wrap",
  },
  match: {
    height: 110,
    width: 8,
    marginHorizontal: isSmallScreen ? 2 : 3,
  },
  matchImage: {
    width: "100%",
    height: "100%",
  },
  selectedMatch: {
    borderColor: "orange",
    borderWidth: 2,
    borderRadius: 10,
  },
  player_section: {
    flex: 1,
    backgroundColor: "lightgreen",
    justifyContent: "space-around",
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    position: "absolute",
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    backgroundColor: "#2196F3",
  },
});
