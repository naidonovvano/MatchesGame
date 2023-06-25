import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { Main } from "./Main";
import { Playground } from "./Playground";

const Stack = createNativeStackNavigator();
export const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Main"
          component={Main}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Playground"
          component={Playground}
          options={{
            title: "MATCHES GAME",
            headerTitleAlign: "center",
            headerTitleStyle: {
              fontFamily: "Vina",
              fontSize: 30,
            },
          }}
          initialParams={{ player: "" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
