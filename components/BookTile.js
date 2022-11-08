import {StyleSheet, Text, View, Image, ScrollView} from 'react-native';
const BookTile = (props)=> {
    return(
    <View style={styles.tile}>
        <View style={styles.tileDetail}>
          <Text style={styles.tileHeader}>{props.title}</Text>
          <Text style={styles.tileAuthor}>{props.author}</Text>
          <Text style={styles.tileText}>{props.subTitle}</Text>
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
  },
  tileText:{
    fontSize:12,
  },
});
