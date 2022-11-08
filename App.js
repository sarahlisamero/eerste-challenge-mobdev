import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import BookTile from './components/BookTile';

export default function App() {
  return (
    <ScrollView style = {styles.container}>
      <Text style={styles.header1}>Bookshop</Text>
    <View style={styles.tilesContainer}>
      <BookTile title="De wereld van Sofie" subTitle="ISBN1234"/>
      <StatusBar style="auto" />
    </View>
    </ScrollView>
  );
}


