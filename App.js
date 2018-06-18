/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet
} from 'react-native';
import {Container, Header, Content, Footer, Button, FooterTab, Tab, Card, CardItem, Body, ListItem, List, Tabs, TabHeading, ScrollableTab, Text, Icon } from 'native-base';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});


export default class App extends Component {
  render() {
    return (
      // <View style={styles.container}>
      //   <Text style={styles.welcome}>
      //     R
      //   </Text>
      //   <Header></Header>
      //   <Image source="https://pp.userapi.com/c627723/v627723684/2137d/aQAOkMKgpSQ.jpg"></Image>
      //   <Text style={styles.instructions}>
      //     To get started, edit App.js
      //   </Text>
      //   <Text style={styles.instructions}>
      //     {instructions}
      //   </Text>
      // </View>
      
      <Container>
      <Tabs initialPage={1}>
        <Tab heading={<TabHeading><Text>Камера</Text><Icon type="FontAwesome" name="camera"/></TabHeading>}>
         <Text>Apps</Text>
        </Tab>
        <Tab heading={<TabHeading><Text>Информация</Text><Icon type="FontAwesome" name="car"/></TabHeading>}>
        <Card>
        <CardItem>
          <Body>
          <Icon type="FontAwesome" name="home" />
            <Text>
               //Your text here
            </Text>
          </Body>
        </CardItem>
      </Card>
        </Tab>
        <Tab heading={<TabHeading><Text>Настройки</Text><Icon type="FontAwesome" name="cog"/></TabHeading>}>
        <List>
        <ListItem>
          <Text>Один</Text>
        </ListItem>
        <ListItem>
          <Text>Два</Text>
        </ListItem>
        <ListItem>
          <Text>Три</Text>
        </ListItem>
      </List>
        </Tab>
      </Tabs>
    </Container>
   
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
    color: 'white',
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
