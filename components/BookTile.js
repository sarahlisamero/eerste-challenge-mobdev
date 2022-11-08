import {StyleSheet, Text, View, TouchableNativeFeedback} from 'react-native';
const BookTile = (props)=> {
    return(
    <View>
        <View>
          <TouchableNativeFeedback onPress={() => console.log("klik")}>
            <Text style={styles.tileHeader}>{props.title}</Text>
          </TouchableNativeFeedback>
          <Text style={styles.tileAuthor}>{props.author}</Text>
          <View style={styles.gelijkstaan}>
            <Text style={styles.tileText}>{props.subTitle}</Text>
            <TouchableNativeFeedback onPress={() => console.log("gelezen")}>
              <Text style={styles.tileButton}>Read me!</Text>
            </TouchableNativeFeedback>
          </View>
        </View>
      </View>
    );
}

export default BookTile; 

const styles = StyleSheet.create({
  tileHeader:{
    fontSize:20,
    fontWeight: "600",
  },
  tileAuthor:{
    fontSize:17,
    fontWeight: "500",
    fontStyle: "italic",
  },
  tileText:{
    fontSize:12,
  },
  gelijkstaan:{
    flex:1,
    flexDirection:"row",
  },
  tileButton:{
    backgroundColor: "#fff",
    position: "absolute",
    right:20,
    padding:5,
  }
});
