import React from 'react';
import { StyleSheet, Text, View, Image, StatusBar } from 'react-native';

import Card from './Card';

import HeaderDeco from './assets/header.png';
import FooterDeco from './assets/footer.png';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <Image style={styles.headerImage} source={HeaderDeco} />
      <View style={styles.innerContainer}>
        <Text style={styles.header}>Hello <Text style={styles.headerBold}>George,</Text></Text>
        <Text style={styles.body}>it has been 2.5 hours since Pastel has been fed.</Text>
        <View style={styles.cardContainer}>
          <Card />
          <Card />
        </View>
      </View>
      <Image style={styles.footerImage} source={FooterDeco} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#210858',
  },
  innerContainer: {
    paddingTop: 160,
  },
  cardContainer: {
    flexDirection: "row",
    paddingVertical: 25,
    paddingHorizontal: 26,
    width: "100%"
  },
  headerBold: {
    fontFamily: "Georgia",
    fontSize: 44,
    color: "#fff",
    fontWeight: "700",
    paddingHorizontal: 35
  },
  header: {
    fontFamily: "Georgia",
    fontSize: 44,
    color: "#fff",
    fontWeight: "400",
    paddingHorizontal: 35,
    paddingBottom: 5
  },
  body: {
    fontFamily: "System",
    fontSize: 21,
    color: "#fff",
    paddingHorizontal: 35,
    maxWidth: 350,
    fontWeight: "300",
  },
  headerImage: {
    position: "absolute",
    width: '100%',
    height: 125,
    top: 0,
    left: 0
  },
  footerImage: {
    position: "absolute",
    width: '100%',
    height: 340,
    bottom: 0,
    left: 0
  }
});
