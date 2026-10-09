import React, { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

// Light Theme Colors
const lightTheme = {
  primary: '#4A90E2',
  secondary: '#27ae60',
  background: '#f8f9fa',
  surface: '#ffffff',
  text: '#2c3e50',
  textSecondary: '#7f8c8d',
  textLight: '#bdc3c7',
  border: '#ecf0f1',
  success: '#27ae60',
  warning: '#f39c12',
  error: '#e74c3c',
  purple: '#9b59b6',
  shadow: '#000000',
  cardBackground: '#ffffff',
  tabBarBackground: '#ffffff',
  statusBar: 'dark',
};

// Dark Theme Colors
const darkTheme = {
  primary: '#5dade2',
  secondary: '#58d68d',
  background: '#1a1a1a',
  surface: '#2c2c2c',
  text: '#ffffff',
  textSecondary: '#bdc3c7',
  textLight: '#7f8c8d',
  border: '#404040',
  success: '#58d68d',
  warning: '#f7dc6f',
  error: '#ec7063',
  purple: '#bb8fce',
  shadow: '#000000',
  cardBackground: '#2c2c2c',
  tabBarBackground: '#2c2c2c',
  statusBar: 'light',
};

export const ThemeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  
  // In a real app, you would load this from AsyncStorage
  useEffect(() => {
    // Load saved theme preference
    // AsyncStorage.getItem('darkMode').then(value => {
    //   if (value !== null) {
    //     setIsDarkMode(JSON.parse(value));
    //   }
    // });
  }, []);

  const toggleTheme = () => {
    const newTheme = !isDarkMode;
    setIsDarkMode(newTheme);
    
    // In a real app, save to AsyncStorage
    // AsyncStorage.setItem('darkMode', JSON.stringify(newTheme));
  };

  const theme = isDarkMode ? darkTheme : lightTheme;

  const value = {
    theme,
    isDarkMode,
    toggleTheme,
  };

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContext;