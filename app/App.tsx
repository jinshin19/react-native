import 'react-native-gesture-handler';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import Index from "./src/screens/Index";
import Read from "./src/screens/Read";
import "./Style";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Todos">
        <Stack.Screen name="Todos" component={Index} />
        <Stack.Screen name="Details" component={Read} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
