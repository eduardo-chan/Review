import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList, Image, Dimensions } from 'react-native';
import { Avatar, Button, Icon } from '@rneui/themed';
const numColumns = 3;
const imageSize = Dimensions.get('window').width / numColumns;

//row: columna
//column: fila
export default function AvatarProfile(props) {
    const {url ,posts, followers, following} = props
  return (
    <View style={styles.container}>
    <View style={{ paddingHorizontal: 16 }}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          marginBottom: 16,
        }}
      >
        <Avatar
          size={72}
          rounded
          source={{uri: url}}
          containerStyle={{ backgroundColor: 'blue' }}
        />
        <View style={{ flex: 1, flexDirection: 'row' }}>
          <View style={{ flex: 1, alignItems: 'center' }}>
            <Text style={{ fontWeight: 'bold' }}>{posts}</Text>
            <Text>Posts</Text>
          </View>
          <View style={{ flex: 1, alignItems: 'center' }}>
            <Text style={{ fontWeight: 'bold' }}>{followers}</Text>
            <Text>Followers</Text>
          </View>
          <View style={{ flex: 1, alignItems: 'center' }}>
            <Text style={{ fontWeight: 'bold' }}>{following}</Text>
            <Text>Following</Text>
          </View>
        </View>
      </View>
      <View>
        <Text style={{ fontWeight: 'bold' }}>eduardo</Text>
        <Text></Text>
        <Text></Text>
      </View>
      <View style={{ marginVertical: 16 }}>
        <Button type="outline">
          <Text style={{color: 'grey'}}>Member</Text>
          <Icon name="keyboard-arrow-down" />
        </Button>
      </View>
    </View>
  </View>
  )
}

const styles = StyleSheet.create({
    container: {
      backgroundColor: '#fff',
    },
    grid: {
      alignItems: 'center',
    },
    gridImage: {
      width: imageSize,
      height: imageSize,
      margin: 1,
    },
  });
  