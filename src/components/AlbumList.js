import React from "react";
import { StyleSheet, Text, View, Image, ScrollView } from "react-native";
import albumData from "../json/albums";

const Albumlist = () => {
  return (
    <ScrollView>
      <View style={styles.cardContainerStyle}>
      <View style={styles.cardSectionStyle}>
          <Image
            style={styles.imageStyle}
            source={{
              uri: albumData[0].image
            }}
          />
        </View>
        <View style={[styles.thumbnailContainerStyle, styles.cardSectionStyle]}>
          <Image
            style={styles.thumbnailStyle}
            source={{
              uri: albumData[0].thumbnail_image
            }}
          />
          <View style={styles.headerContentStyle}>
          <View><Text>{albumData[0].title}</Text></View>
            <View><Text>{albumData[0].artist}</Text></View>  
          </View>
        </View>
        <View style={styles.line}></View>
      </View>
      <View style={styles.cardContainerStyle}>
      <View style={styles.cardSectionStyle}>
          <Image
            style={styles.imageStyle}
            source={{
              uri: albumData[1].image
            }}
          />
        </View>
        <View style={[styles.thumbnailContainerStyle, styles.cardSectionStyle]}>
          <Image
            style={styles.thumbnailStyle}
            source={{
              uri: albumData[1].thumbnail_image
            }}
          />
          <View style={styles.headerContentStyle}>
          <View><Text>{albumData[1].title}</Text></View>
            <View><Text>{albumData[1].artist}</Text></View>  
          </View>
        </View>
        <View style={styles.line}></View>
      </View>
      <View style={styles.cardContainerStyle}>
      <View style={styles.cardSectionStyle}>
          <Image
            style={styles.imageStyle}
            source={{
              uri: albumData[2].image
            }}
          />
        </View>
        <View style={[styles.thumbnailContainerStyle, styles.cardSectionStyle]}>
          <Image
            style={styles.thumbnailStyle}
            source={{
              uri: albumData[2].thumbnail_image
            }}
          />
          <View style={styles.headerContentStyle}>
          <View><Text>{albumData[2].title}</Text></View>
            <View><Text>{albumData[2].artist}</Text></View>  
          </View>
        </View>
        <View style={styles.line}></View>
      </View>
      <View style={styles.cardContainerStyle}>
      <View style={styles.cardSectionStyle}>
          <Image
            style={styles.imageStyle}
            source={{
              uri: albumData[3].image
            }}
          />
        </View>
        <View style={[styles.thumbnailContainerStyle, styles.cardSectionStyle]}>
          <Image
            style={styles.thumbnailStyle}
            source={{
              uri: albumData[3].thumbnail_image
            }}
          />
          <View style={styles.headerContentStyle}>
          <View><Text>{albumData[3].title}</Text></View>
            <View><Text>{albumData[3].artist}</Text></View>  
          </View>
        </View>
        <View style={styles.line}></View>
      </View>
      <View style={styles.cardContainerStyle}>
      <View style={styles.cardSectionStyle}>
          <Image
            style={styles.imageStyle}
            source={{
              uri: albumData[4].image
            }}
          />
        </View>
        <View style={[styles.thumbnailContainerStyle, styles.cardSectionStyle]}>
          <Image
            style={styles.thumbnailStyle}
            source={{
              uri: albumData[4].thumbnail_image
            }}
          />
          <View style={styles.headerContentStyle}>
          <View><Text>{albumData[4].title}</Text></View>
            <View><Text>{albumData[4].artist}</Text></View>  
          </View>
        </View>
        <View style={styles.line}></View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  thumbnailContainerStyle: {
    flexDirection: "row",
    justifyContent: "flex-start"
  },
  thumbnailStyle: {
    height: 50,
    width: 50,
    marginTop: 20,
    marginLeft:15,
    marginBottom: 20,
    borderRadius: 50,
    borderColor: "#E0CCD6"
  },
  headerContentStyle: {
    width: "75%",
    height:50,
    paddingTop:40,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingLeft: 10,
  },
  line:{
    height:1,
    width:"100%",
    alignSelf:"center",
    backgroundColor:"#000"
  },
  cardContainerStyle: {
    backgroundColor: "#C8E4E4",
    elevation: 1,
    marginLeft: 20,
    marginRight: 20,
    marginTop: 10
  },
  cardSectionStyle: {
    // backgroundColor: "#E0CCD6",
    borderColor: "#ddd",
    paddingBottom: 5
    // borderBottomWidth: 1
  },
  imageStyle: {
    marginTop: 50,
    height: 300,
    width: null
  }
});

export default Albumlist;
