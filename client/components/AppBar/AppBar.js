import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import { Toolbar } from 'react-native-material-ui';
import Colors from 'MyShowExperience/utils/colors';
import Strings from 'MyShowExperience/utils/strings/fr_FR';

type Props = {};
export default class AppBar extends Component<Props> {

  actionClicked = (action) => {
    if(action.index === 0) {
      console.log('La fonctionnalité de déconnexion n\'est pas encore disponible');
    } else if (action.index === 1) {
      console.log('Impossible de rafraichir pour le moment');
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <Toolbar
          centerElement={Strings.APP_TITLE}
          rightElement={{
            menu: { labels: [Strings.MENU.REFRESH, Strings.MENU.DISCONECT] },
          }}
          onRightElementPress={ (action) => { this.actionClicked(action) }}
          style={{
            container: { backgroundColor: Colors.PRIMARY_BACKGROUND },
          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    width: '100%',
    top: 0,
  },
});
