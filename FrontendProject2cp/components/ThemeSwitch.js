import React from 'react';
import { Switch } from 'react-native';
import { useTheme } from '../contexts/ThemeContext';

const ThemeSwitch = () => {
  const { isDarkMode, toggleTheme } = useTheme();

  return <Switch value={isDarkMode} onValueChange={toggleTheme} />;
};

export default ThemeSwitch;
