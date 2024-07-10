import { StatusBar } from 'expo-status-bar';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  Dimensions,
} from 'react-native';
import { Avatar, Button, Icon } from '@rneui/themed';
import AvatarProfile from './src/components/AvatarProfile';
import FormLogin from './src/components/FormLogin';
import Navigation from './src/components/Navigation';

export default function App() {
  return ( 
      <Navigation/>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 16,
    marginTop: 50,
  },
});