/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  View,
  Text,
  Image
} from 'react-native';
import { Container, Header, Tab, Tabs, TabHeading, Icon, Text1 } from 'native-base';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});


export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          React!
        </Text>
        <Image source="https://pp.userapi.com/c627723/v627723684/2137d/aQAOkMKgpSQ.jpg"></Image>
        <Text style={styles.instructions}>
          To get started, edit App.js
        </Text>
        <Text style={styles.instructions}>
          {instructions}
        </Text>
      </View>
    //   <Container>
    //   <Header hasTabs/>
    //   <Tabs>
    //     <Tab heading={ <TabHeading><Text>Camera</Text></TabHeading>}>
          
    //     </Tab>
    //     <Tab heading={ <TabHeading><Text>No Icon</Text></TabHeading>}>
         
    //     </Tab>
    //     <Tab heading={ <TabHeading></TabHeading>}>
          
    //     </Tab>
    //   </Tabs>
    // </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
