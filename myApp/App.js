import LocationsScreen from "./screens/LocationsScreen";
import ResidentsScreen from "./screens/ResidentsScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Locations">
        <Stack.Screen
          name="Locations"
          component={LocationsScreen}
        />
        <Stack.Screen
          name="Residents"
          component={ResidentsScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}