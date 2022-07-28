import React from 'react';
import * as AUTHApi from '../apis/AUTHApi.js';
import * as GlobalVariables from '../config/GlobalVariableContext';
import {
  ButtonSolid,
  Link,
  ScreenContainer,
  Spacer,
  withTheme,
} from '@draftbit/ui';
import { useIsFocused } from '@react-navigation/native';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

const RegisterScreen = props => {
  const Constants = GlobalVariables.useValues();
  const Variables = Constants;

  const setGlobalVariableValue = GlobalVariables.useSetValue();

  const { theme } = props;
  const { navigation } = props;

  const isFocused = useIsFocused();
  React.useEffect(() => {
    try {
      if (!isFocused) {
        return;
      }
      if (!Constants['AUTHORIZATION_HEADER']) {
        return;
      }
    } catch (err) {
      console.error(err);
    }
  }, [isFocused]);

  const [emailValue, setEmailValue] = React.useState('');
  const [nameValue, setNameValue] = React.useState('');
  const [passwordValue, setPasswordValue] = React.useState('');

  return (
    <ScreenContainer>
      <KeyboardAwareScrollView
        contentContainerStyle={styles.KeyboardAwareScrollViewokContent}
      >
        <View>
          <Text style={styles.TextJG}>{'Welcome!'}</Text>

          <Text style={[styles.TextBb, { color: theme.colors.strong }]}>
            {'Create an account to get started'}
          </Text>
        </View>

        <View style={styles.ViewNA}>
          <>
            {!Constants['error_message'] ? null : (
              <Text style={[styles.TextbX, { color: theme.colors.error }]}>
                {Constants['error_message']}
              </Text>
            )}
          </>
          <TextInput
            onChangeText={newNameInputValue => {
              try {
                setNameValue(newNameInputValue);
              } catch (err) {
                console.error(err);
              }
            }}
            style={[styles.TextInputEb, { borderColor: theme.colors.divider }]}
            value={nameValue}
            placeholder={'Name'}
            autoCapitalize={'words'}
          />
          <Spacer top={12} right={8} bottom={12} left={8} />
          <TextInput
            onChangeText={newEmailInputValue => {
              try {
                setEmailValue(newEmailInputValue);
              } catch (err) {
                console.error(err);
              }
            }}
            style={[styles.TextInputEo, { borderColor: theme.colors.divider }]}
            value={emailValue}
            placeholder={'Email'}
            autoCapitalize={'none'}
            keyboardType={'email-address'}
            textContentType={'emailAddress'}
          />
          <Spacer top={12} right={8} bottom={8} left={8} />
          <TextInput
            onChangeText={newPasswordInputValue => {
              try {
                setPasswordValue(newPasswordInputValue);
              } catch (err) {
                console.error(err);
              }
            }}
            style={[styles.TextInputBj, { borderColor: theme.colors.divider }]}
            value={passwordValue}
            placeholder={'Password'}
            secureTextEntry={true}
            autoCapitalize={'none'}
            textContentType={'password'}
          />
          <Spacer top={24} right={8} bottom={24} left={8} />
          <>
            {!Constants['is_loading'] ? null : (
              <ButtonSolid
                onPress={async () => {
                  try {
                    const signuoResponseJson = await AUTHApi.signupPOST(
                      Constants,
                      { email: emailValue, password: passwordValue }
                    );
                    const message = signuoResponseJson.message;
                    setGlobalVariableValue({
                      key: 'error_message',
                      value: message,
                    });
                    const authToken = signuoResponseJson.authToken;
                    if (!authToken) {
                      return;
                    }
                    setGlobalVariableValue({
                      key: 'AUTHORIZATION_HEADER',
                      value: 'Bearer ' + authToken,
                    });
                    navigation.navigate('PortefeuilleScreen');
                  } catch (err) {
                    console.error(err);
                  }
                }}
                style={[
                  styles.ButtonSolid_75,
                  { backgroundColor: theme.colors.primary },
                ]}
                title={'Sign up'}
              />
            )}
          </>
          <>
            {Constants['is_loading'] ? null : (
              <ButtonSolid
                onPress={() => {
                  try {
                    navigation.navigate('PortefeuilleScreen');
                  } catch (err) {
                    console.error(err);
                  }
                }}
                style={[
                  styles.ButtonSolidCI,
                  { backgroundColor: theme.colors.primary },
                ]}
                title={''}
                disabled={true}
                loading={true}
              />
            )}
          </>
          <Spacer top={16} right={8} bottom={16} left={8} />
          <View style={styles.View_2H}>
            <Text style={[styles.Textzs, { color: theme.colors.strong }]}>
              {'Have an account?'}
            </Text>
            <Spacer top={8} right={2} bottom={8} left={2} />
            <Link
              onPress={() => {
                try {
                  navigation.navigate('LoginScreen');
                } catch (err) {
                  console.error(err);
                }
              }}
              style={{ color: theme.colors.primary }}
              title={'Sign in.'}
            />
          </View>
        </View>
      </KeyboardAwareScrollView>
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  TextJG: {
    textAlign: 'center',
    fontSize: 36,
    fontFamily: 'System',
    fontWeight: '600',
  },
  TextBb: {
    textAlign: 'center',
    fontFamily: 'System',
    fontWeight: '400',
    marginTop: 4,
  },
  TextbX: {
    fontSize: 12,
    textAlign: 'center',
    marginBottom: 16,
  },
  TextInputEb: {
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 16,
    paddingBottom: 16,
    borderRadius: 8,
  },
  TextInputEo: {
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 16,
    paddingBottom: 16,
    borderRadius: 8,
  },
  TextInputBj: {
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 16,
    paddingBottom: 16,
    borderRadius: 8,
  },
  ButtonSolid_75: {
    borderRadius: 8,
    fontFamily: 'System',
    fontWeight: '700',
    textAlign: 'center',
    paddingTop: 16,
    paddingRight: 16,
    paddingBottom: 16,
    paddingLeft: 16,
  },
  ButtonSolidCI: {
    borderRadius: 8,
    fontFamily: 'System',
    fontWeight: '700',
    textAlign: 'center',
    paddingTop: 16,
    paddingRight: 16,
    paddingBottom: 16,
    paddingLeft: 16,
  },
  Textzs: {
    marginRight: 2,
  },
  View_2H: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  ViewNA: {
    paddingLeft: 36,
    paddingRight: 36,
    marginTop: 24,
  },
  KeyboardAwareScrollViewokContent: {
    justifyContent: 'center',
  },
});

export default withTheme(RegisterScreen);
