import React from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';
import { ThemeProvider } from './contexts/ThemeContext';
import { LanguageProvider } from './contexts/LanguageContext';

// Import all screens
import LoginScreen from './screens/LoginScreen';
import SignUpScreen from './screens/SignUpScreen';
import ProfileSetupScreen from './screens/ProfileSetupScreen';
import ProfessionalHelpScreen from './screens/ProfessionalHelpScreen';
import MoodTrackerScreen from './screens/MoodTrackerScreen';
import MeditationScreen from './screens/MeditationScreen';
import SettingsScreen from './screens/SettingsScreen';
import ChatbotScreen from './screens/ChatbotScreen';
import DailyThoughtsScreen from './screens/DailyThoughtsScreen';
import ActivityCenterScreen from './screens/ActivityCenterScreen';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

// Main Tab Navigator
function MainTabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Mood Tracker') {
            iconName = focused ? 'heart' : 'heart-outline';
          } else if (route.name === 'Professional Help') {
            iconName = focused ? 'medical' : 'medical-outline';
          } else if (route.name === 'Meditation') {
            iconName = focused ? 'leaf' : 'leaf-outline';
          } else if (route.name === 'AI Assistant') {
            iconName = focused ? 'chatbubble-ellipses' : 'chatbubble-ellipses-outline';
          } else if (route.name === 'More') {
            iconName = focused ? 'menu' : 'menu-outline';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#4A90E2',
        tabBarInactiveTintColor: 'gray',
        tabBarStyle: {
          paddingBottom: 5,
          paddingTop: 5,
          height: 60,
        },
        headerStyle: {
          backgroundColor: '#4A90E2',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      })}
    >
      <Tab.Screen 
        name="Mood Tracker" 
        component={MoodTrackerScreen}
        options={{
          title: 'Mood Tracker',
        }}
      />
      <Tab.Screen 
        name="Professional Help" 
        component={ProfessionalHelpScreen}
        options={{
          title: 'Professional Help',
        }}
      />
      <Tab.Screen 
        name="Meditation" 
        component={MeditationScreen}
        options={{
          title: 'Meditation & Mindfulness',
        }}
      />
      <Tab.Screen 
        name="AI Assistant" 
        component={ChatbotScreen}
        options={{
          title: 'AI Assistant',
        }}
      />
      <Tab.Screen 
        name="More" 
        component={MoreStackNavigator}
        options={{
          title: 'More',
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
}

// More Stack Navigator for additional screens
function MoreStackNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#4A90E2',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}
    >
      <Stack.Screen 
        name="MoreHome" 
        component={MoreHomeScreen}
        options={{ title: 'More' }}
      />
      <Stack.Screen 
        name="Settings" 
        component={SettingsScreen}
        options={{ title: 'Settings' }}
      />
      <Stack.Screen 
        name="DailyThoughts" 
        component={DailyThoughtsScreen}
        options={{ title: 'Daily Thoughts' }}
      />
      <Stack.Screen 
        name="ActivityCenter" 
        component={ActivityCenterScreen}
        options={{ title: 'Activity Center' }}
      />
    </Stack.Navigator>
  );
}

// More Home Screen
function MoreHomeScreen({ navigation }) {
  const moreOptions = [
    {
      title: 'Daily Thoughts',
      subtitle: 'Journal your thoughts and feelings',
      icon: 'journal-outline',
      color: '#9b59b6',
      onPress: () => navigation.navigate('DailyThoughts'),
    },
    {
      title: 'Activity Center',
      subtitle: 'Engage in your favorite hobbies',
      icon: 'fitness-outline',
      color: '#27ae60',
      onPress: () => navigation.navigate('ActivityCenter'),
    },
    {
      title: 'Settings',
      subtitle: 'Customize your app experience',
      icon: 'settings-outline',
      color: '#34495e',
      onPress: () => navigation.navigate('Settings'),
    },
  ];

  return (
    <View style={{ flex: 1, backgroundColor: '#f8f9fa' }}>
      <ScrollView contentContainerStyle={{ padding: 20 }}>
        <View style={{ alignItems: 'center', marginBottom: 30, marginTop: 20 }}>
          <Ionicons name="apps-outline" size={50} color="#4A90E2" />
          <Text style={{ fontSize: 28, fontWeight: 'bold', color: '#2c3e50', marginTop: 10 }}>More Features</Text>
          <Text style={{ fontSize: 16, color: '#7f8c8d', marginTop: 5 }}>Explore additional tools for your wellness journey</Text>
        </View>
        
        {moreOptions.map((option, index) => (
          <TouchableOpacity
            key={index}
            style={{
              backgroundColor: '#fff',
              flexDirection: 'row',
              alignItems: 'center',
              padding: 20,
              borderRadius: 15,
              marginBottom: 15,
              shadowColor: '#000',
              shadowOffset: { width: 0, height: 2 },
              shadowOpacity: 0.1,
              shadowRadius: 3.84,
              elevation: 5,
            }}
            onPress={option.onPress}
          >
            <View style={{
              width: 50,
              height: 50,
              borderRadius: 25,
              backgroundColor: option.color + '20',
              alignItems: 'center',
              justifyContent: 'center',
              marginRight: 15,
            }}>
              <Ionicons name={option.icon} size={24} color={option.color} />
            </View>
            <View style={{ flex: 1 }}>
              <Text style={{ fontSize: 18, fontWeight: 'bold', color: '#2c3e50' }}>{option.title}</Text>
              <Text style={{ fontSize: 14, color: '#7f8c8d', marginTop: 3 }}>{option.subtitle}</Text>
            </View>
            <Ionicons name="chevron-forward" size={20} color="#bdc3c7" />
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
}

// Main Stack Navigator
export default function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <NavigationContainer>
          <StatusBar style="auto" />
          <Stack.Navigator 
            initialRouteName="Login"
            screenOptions={{
              headerStyle: {
                backgroundColor: '#4A90E2',
              },
              headerTintColor: '#fff',
              headerTitleStyle: {
                fontWeight: 'bold',
              },
            }}
          >
            <Stack.Screen 
              name="Login" 
              component={LoginScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen 
              name="SignUp" 
              component={SignUpScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen 
              name="ProfileSetup" 
              component={ProfileSetupScreen}
              options={{ 
                title: 'Setup Profile',
                headerLeft: null,
                gestureEnabled: false,
              }}
            />
            <Stack.Screen 
              name="MainTabs" 
              component={MainTabNavigator}
              options={{ 
                headerShown: false,
                gestureEnabled: false,
              }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </LanguageProvider>
    </ThemeProvider>
  );
}
