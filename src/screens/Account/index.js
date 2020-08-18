import React, { Component } from "react";
import { Platform, StatusBar, StyleSheet, View, Text } from "react-native";
import {Container, Header, Body, Content } from 'native-base';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { Icon } from "react-native-elements";
import { connect } from "react-redux";
import { setUser } from "@modules/auth/actions";
import { Loading } from "@components";
import { isEmpty } from "@utils/functions";
import configs from "@constants/configs";
import { themes, colors } from "@constants/themes";
import { images, icons } from "@constants/assets";
import axios, { setClientToken } from "@utils/axios";
import i18n from "@utils/i18n";

class Account extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
    };
  }

  render() {
    return (
      <Container style={styles.container}>
        <StatusBar hidden />
        <Loading loading={this.state.loading} />
        <Header>
          
        </Header>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default connect(undefined, undefined)(Account);
