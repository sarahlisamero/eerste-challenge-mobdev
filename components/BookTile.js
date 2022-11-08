import {StyleSheet, Text, View, Image, ScrollView} from 'react-native';
const BookTile = (props)=> {
    return(
    <View style={styles.tile}>
        <View style={styles.tileDetail}>
          <Text style={styles.tileHeader}>{props.title}</Text>
          <Text style={styles.tileText}>{props.subTitle}</Text>
        </View>
      </View>
    );
}
const styles = StyleSheet.create({
    heading1:{
        fontSize: 30,
        fontWeight: "500",
    },
    container: {
      backgroundColor: '#fff',
      paddingTop: 56,
    },
    tilesContainer: {
      flex: 1,
      flexDirection: 'row',
      flexWrap: 'wrap',
      flexGrow: 0,
      flexShrink: 0,
      justifyContent: 'space-evenly',
    },
    tileHeader:{
      color: '##FF0000',
    },
    tileText:{
      color: '#FF0000',
    }
});
export default BookTile(); 