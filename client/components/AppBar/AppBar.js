import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import Colors from 'MyShowExperience/utils/colors';
import Strings from 'MyShowExperience/utils/strings/fr_FR';

type Props = {};
export default class AppBar extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.appTitle}>{Strings.APP_TITLE}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.PRIMARY_BACKGROUND,
    height: 50,
    position: 'absolute',
    width: '100%',
    top: 0,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  appTitle: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
  },
});
