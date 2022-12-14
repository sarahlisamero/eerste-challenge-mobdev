import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View, Image } from 'react-native';
import BookTile from './components/BookTile';

export default function App() {
  return (
    <ScrollView>
      <View style={styles.bovenbalk}> 
        <Text style={styles.heading1}>Bookshop</Text>
        <View style={styles.end}>
          <Image style={styles.icon} source={require("./assets/winkelmandje.png")}></Image>
          <Text>1</Text>
        </View>
      </View>
      <View style={styles.container}>
        <View style={styles.tilesContainer}>
        <BookTile 
        title="De wereld van Sofie" 
        author="Jostein Gaarder"
        subTitle="ISBN: 1234"/>
        </View>
        <View style={styles.tilesContainer}>
        <BookTile 
        title="Oneindige schildpadden" 
        author="John Green"
        subTitle="ISBN: 1234"/>
        </View>
        <View style={styles.tilesContainer}>
        <BookTile 
        title="Matilda" 
        author="Roald Dhal"
        subTitle="ISBN: 1234"/>
        </View>
      </View>
      <View>
        <StatusBar style="auto" />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  heading1:{
      fontSize: 30,
      fontWeight: "500",
  },
  container: {
    backgroundColor: '#fff',
    paddingTop: 40,
  },
  tilesContainer: {
    backgroundColor:"#dedede", 
    marginBottom:20,
    marginLeft:20,
    marginRight:20,
    paddingLeft:15,
    paddingTop:15,
    paddingBottom:15
  },
  icon:{
    width:35,
    height:35,
  },
  bovenbalk:{
    flex:1,
    flexDirection: "row",
    marginTop:50,
    marginLeft:10,
    marginRight:10,
  }, 
  end:{
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-end",
  }
});

