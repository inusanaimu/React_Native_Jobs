import {useState} from 'react'
import { View, Text, TextInput, TouchableOpacity, Image, FlatList } from 'react-native'
import { useRouter } from 'expo-router'
import { icons, SIZES } from '../../../constants'
import styles from './welcome.style'

const Welcome = (user = "John Doe") => {
  const router = useRouter();
  return (
    <View>
     <View style={styles.container}>
      <Text style={styles.userName}>Hello John Doe</Text>
      <Text style={styles.welcomeMessage}>Find your Perfect jobs</Text>
     </View>

    <View style={styles.searchContainer}>
      <View style={styles.searchWrapper}>
        <TextInput style={styles.searchInput}/>
      </View>

    </View>

    </View>
  )
}

export default Welcome