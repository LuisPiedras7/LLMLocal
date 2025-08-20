import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ChatScreen from './Chat';
import ProfileScreen from './Profile';
import { Ionicons } from '@expo/vector-icons';
import LLMChat from './LLMChat';

/* export default function App() {
  return <LLMChat />;
} */

const Tab = createBottomTabNavigator();

export default function App() {
  return <LLMChat />;
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            let iconName;
            if (route.name === 'Chat') {
              iconName = 'chatbubbles-outline';
            } else if (route.name === 'Perfil') {
              iconName = 'person-outline';
            }
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: '#007BFF',
          tabBarInactiveTintColor: 'gray',
        })}
      >
        <Tab.Screen name="Chat" component={ChatScreen} />
        <Tab.Screen name="Perfil" component={ProfileScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}


