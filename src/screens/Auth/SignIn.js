import {StyleSheet, Text, View, TextInput} from 'react-native';
import React, {useState, useRef} from 'react';

import * as Animatable from 'react-native-animatable';
import {Icon, Button, SocialIcon} from '@rneui/themed';

import Header from '../../components/Header';
import {color, parameter} from '../../main/styles';

const SignIn = () => {
  const [textInputFocused, setTextInputFocused] = useState(false);

  const textInout1 = useRef(1);
  const textInout2 = useRef(2);

  return (
    <View style={styles.container}>
      <Header title="MY ACCOUNT" iconType="arrow-left" />
      <View style={{marginTop: 15, marginLeft: 18}}>
        <Text style={styles.signinTitle}>Sign In</Text>
      </View>
      <View style={{alignItems: 'center', marginTop: 10}}>
        <Text style={styles.text}>Enter your email and password</Text>
        <Text style={styles.text}>
          to <Text style={{fontWeight: 'bold'}}>Sign In</Text>
        </Text>
      </View>
      <View style={{marginTop: 20}}>
        <View>
          <TextInput
            style={[
              styles.textInput1,
              {
                paddingLeft: 20,
              },
            ]}
            placeholder="Email"
            ref={textInout1}
          />
        </View>
        <View style={styles.textInput2}>
          <Animatable.View
            animation={!textInputFocused && 'fadeInLeft'}
            duration={500}>
            <Icon
              name="lock"
              iconStyle={{color: color.grey3}}
              type="material"
            />
          </Animatable.View>
          <TextInput
            placeholder="Password"
            style={{width: '80%'}}
            ref={textInout2}
            onFocus={() => setTextInputFocused(false)}
            onBlur={() => setTextInputFocused(true)}
          />
          <Animatable.View
            animation={!textInputFocused && 'fadeInLeft'}
            duration={500}>
            <Icon
              name="visibility-off"
              iconStyle={{color: color.grey3}}
              type="material"
              style={{marginRight: 10}}
            />
          </Animatable.View>
        </View>
      </View>
      <View style={{marginHorizontal: 20, marginTop: 28}}>
        <Button
          title="SIGN IN"
          buttonStyle={parameter.buttonStyles}
          titleStyle={parameter.buttonText}
        />
      </View>
      <View style={{alignItems: 'center', marginTop: 20}}>
        <Text style={{...styles.text, textDecorationLine: 'underline'}}>
          Forgot Password?
        </Text>
      </View>
      <View style={{alignItems: 'center', marginTop: 17, marginBottom: 27}}>
        <Text style={{fontSize: 20, fontWeight: '900', color: 'black'}}>
          OR
        </Text>
      </View>
      <View style={{marginHorizontal: 20, marginTop: 10, display: 'flex'}}>
        <SocialIcon
          title="Sign In With Facebook"
          button
          type="facebook"
          style={styles.socialIcon}
          onPress={() => {}}
        />
      </View>
      <View style={{marginHorizontal: 20, marginTop: 10, display: 'flex'}}>
        <SocialIcon
          title="Sign In With Google"
          button
          type="google"
          style={styles.socialIcon}
          onPress={() => {}}
        />
      </View>
      <View style={{marginTop: 25, marginLeft: 20}}>
        <Text style={{...styles.text, color: 'black'}}>
          New on Foodsters? Sign Up!!
        </Text>
      </View>
      <View
        style={{alignItems: 'flex-end', marginHorizontal: 20, marginTop: 15}}>
        <Button
          title="Create an account"
          buttonStyle={styles.createButton}
          titleStyle={styles.createButtonTitle}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  signinTitle: {
    color: color.mainContent,
    fontSize: 22,
    fontWeight: '700',
  },
  text: {
    color: color.grey3,
    fontSize: 15,
  },
  textInput1: {
    borderWidth: 1,
    borderColor: '#86939e',
    marginHorizontal: 20,
    borderRadius: 12,
    marginBottom: 20,
  },
  textInput2: {
    borderWidth: 1,
    borderRadius: 12,
    marginHorizontal: 20,
    borderColor: '#86939e',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'center',
    alignItems: 'center',
    paddingLeft: 15,
  },
  socialIcon: {
    borderRadius: 12,
    height: 55,
    width: '96%',
    display: 'flex',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
  },
  createButton: {
    backgroundColor: '#fff',
    alignContent: 'center',
    justifyContent: 'center',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: color.mainContent,
    height: 40,
    paddingHorizontal: 20,
  },
  createButtonTitle: {
    color: color.mainContent,
    fontSize: 16,
    fontWeight: '900',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: -3,
  },
});

export default SignIn;
