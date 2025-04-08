import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { StyleSheet, Text } from 'react-native';
import HomeScreen from "./HomeScreen";
import DetailsScreen from "./DetailsScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={{
            headerTitleStyle: styles.headerTitle,
          }}
        >
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{
              headerTitle: () => (
                <Text style={styles.homeHeaderTitle}>HOME</Text>
              ),
            }}
          />
          <Stack.Screen name="Details" component={DetailsScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  headerTitle: {
    fontWeight: 'bold',
    fontSize: 18,
    color: '#333',
  },
  homeHeaderTitle: {
    fontWeight: '800',
    fontSize: 20,
    letterSpacing: 1.5,
    textTransform: 'uppercase',
    color: '#222',
    fontFamily: 'System',  // Using system font as fallback
  }
});
