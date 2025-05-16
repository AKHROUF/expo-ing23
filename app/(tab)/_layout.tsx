import Ionicons from '@expo/vector-icons/Ionicons';
import { Tabs } from 'expo-router';

export default function TabLayout() {
  return (
    // https://icons.expo.fyi/Index
    <Tabs 
      screenOptions={{  tabBarActiveTintColor: '#ffd33d', }} >
      <Tabs.Screen name="index"  // index pointe sur (tab)/index.tsx
        options={{ title: 'OPTIONS',
          tabBarIcon: ({ color, focused }) => (
            <Ionicons name={focused ? 'home-sharp' : 'home-outline'} color={color} size={24} /> ),
        }} />      
      <Tabs.Screen name="index2"  // index pointe sur (tab)/index2.tsx
        options={{ title: 'REGLAGE',
          tabBarIcon: ({ color, focused }) => (
            <Ionicons name={focused ? 'aperture-sharp' : 'aperture-outline'} color={color} size={24} /> ),
        }} />      
      
    </Tabs>
  );
}
