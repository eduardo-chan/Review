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

export default function App() {
  return (
    <View style={styles.container}>
      <AvatarProfile
      url={'https://firebasestorage.googleapis.com/v0/b/carsishop-60e8f.appspot.com/o/images-products%2F33ef818f-c678-46fc-aa92-c70478d4991a.jpg?alt=media&token=14aa6958-f6ee-4aaf-921e-4df4156ad1f0'}
      posts={3}
      followers={358}
      following={211}
    />
    <FormLogin/>
    </View>
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
