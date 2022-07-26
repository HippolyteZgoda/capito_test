import React from 'react';
import * as XanoApi from '../apis/XanoApi.js';
import * as CustomCode from '../components.js';
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

const LoginScreen = props => {
  const Constants = GlobalVariables.useValues();
  const Variables = Constants;

  const setGlobalVariableValue = GlobalVariables.useSetValue();
  const myFunctionName = response => {
    // Type the code for the body of your function or hook here.
    // Functions can be triggered via Button/Touchable actions.
    // Hooks are run per ReactJS rules
    console.log(JSON.stringify(response));
  };

  const { theme } = props;
  const { navigation } = props;

  const isFocused = useIsFocused();
  React.useEffect(() => {
    try {
      if (!isFocused) {
        return;
      }
      if (!Constants['auth_header']) {
        return;
      }
      navigation.navigate('HomeScreen');
    } catch (err) {
      console.error(err);
    }
  }, [isFocused]);

  const [emailValue, setEmailValue] = React.useState('');
  const [passwordValue, setPasswordValue] = React.useState('');

  return (
    <ScreenContainer>
      <KeyboardAwareScrollView
        contentContainerStyle={styles.KeyboardAwareScrollView_3bContent}
      >
        <View style={styles.Viewug}>
          <Text style={styles.Text_2w}>{'Welcome Back!'}</Text>

          <Text style={styles.TextsM}>
            {'Sign in to your account to continue'}
          </Text>
        </View>

        <View style={styles.View_74}>
          <>
            {!Constants['error_message'] ? null : (
              <Text style={[styles.TexteP, { color: theme.colors.error }]}>
                {Constants['error_message']}
              </Text>
            )}
          </>
          <TextInput
            onChangeText={newEmailInputValue => {
              try {
                setEmailValue(newEmailInputValue);
              } catch (err) {
                console.error(err);
              }
            }}
            style={[styles.TextInputru, { borderColor: theme.colors.divider }]}
            value={emailValue}
            placeholder={'Email'}
            keyboardType={'email-address'}
            textContentType={'emailAddress'}
            autoCapitalize={'none'}
          />
          <Spacer top={12} right={8} bottom={12} left={8} />
          <TextInput
            onChangeText={newPasswordInputValue => {
              try {
                setPasswordValue(newPasswordInputValue);
              } catch (err) {
                console.error(err);
              }
            }}
            style={[styles.TextInputdj, { borderColor: theme.colors.divider }]}
            value={passwordValue}
            placeholder={'Password'}
            secureTextEntry={true}
          />
          <Spacer top={24} right={8} bottom={24} left={8} />
          <>
            {Constants['is_loading'] ? null : (
              <ButtonSolid
                onPress={async () => {
                  try {
                    setGlobalVariableValue({
                      key: 'is_loading',
                      value: true,
                    });
                    const response = await XanoApi.loginPOST(Constants, {
                      email: emailValue,
                      password: passwordValue,
                    });
                    const authToken = response.authToken;
                    const message = response.message;
                    setGlobalVariableValue({
                      key: 'error_message',
                      value: message,
                    });
                    setGlobalVariableValue({
                      key: 'is_loading',
                      value: false,
                    });
                    if (!authToken) {
                      return;
                    }
                    const id = response.id;
                    const name = response.name;
                    const email = response.email;
                    setGlobalVariableValue({
                      key: 'auth_header',
                      value: 'Bearer ' + authToken,
                    });
                    setGlobalVariableValue({
                      key: 'user_id',
                      value: id,
                    });
                    setGlobalVariableValue({
                      key: 'user_name',
                      value: name,
                    });
                    setGlobalVariableValue({
                      key: 'user_email',
                      value: email,
                    });
                    setEmailValue('');
                    setPasswordValue('');
                    setGlobalVariableValue({
                      key: 'error_message',
                      value: '',
                    });
                    navigation.navigate('HomeScreen');
                  } catch (err) {
                    console.error(err);
                  }
                }}
                style={[
                  styles.ButtonSolidNX,
                  { backgroundColor: theme.colors.primary },
                ]}
                title={'Sign in'}
              />
            )}
          </>
          <>
            {!Constants['is_loading'] ? null : (
              <ButtonSolid
                style={[
                  styles.ButtonSolidju,
                  { backgroundColor: theme.colors.primary },
                ]}
                title={''}
                disabled={true}
                loading={true}
              />
            )}
          </>
          <Spacer top={16} right={8} bottom={16} left={8} />
          <View style={styles.ViewNF}>
            <Text>{'New User?'}</Text>
            <Spacer top={8} right={2} bottom={8} left={2} />
            <Link
              onPress={() => {
                try {
                  navigation.navigate('RegisterScreen');
                } catch (err) {
                  console.error(err);
                }
              }}
              style={{ color: theme.colors.primary }}
              title={'Sign up!'}
            />
          </View>
        </View>
      </KeyboardAwareScrollView>
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  Text_2w: {
    textAlign: 'center',
    fontSize: 36,
    fontFamily: 'System',
    fontWeight: '600',
  },
  TextsM: {
    fontFamily: 'System',
    fontWeight: '400',
    fontSize: 14,
    marginTop: 4,
  },
  Viewug: {
    alignItems: 'center',
  },
  TexteP: {
    fontSize: 12,
    textAlign: 'center',
    marginBottom: 16,
  },
  TextInputru: {
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 16,
    paddingBottom: 16,
    borderRadius: 8,
    fontFamily: 'System',
    fontWeight: '400',
    borderTopWidth: 1,
    borderRightWidth: 1,
    borderBottomWidth: 1,
    borderLeftWidth: 1,
  },
  TextInputdj: {
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 16,
    paddingBottom: 16,
    borderRadius: 8,
    fontFamily: 'System',
    fontWeight: '400',
    borderLeftWidth: 1,
    borderTopWidth: 1,
    borderRightWidth: 1,
    borderBottomWidth: 1,
  },
  ButtonSolidNX: {
    borderRadius: 8,
    fontFamily: 'System',
    fontWeight: '700',
    textAlign: 'center',
    paddingTop: 16,
    paddingBottom: 16,
  },
  ButtonSolidju: {
    borderRadius: 8,
    fontFamily: 'System',
    fontWeight: '700',
    textAlign: 'center',
    paddingTop: 16,
    paddingBottom: 16,
  },
  ViewNF: {
    flexDirection: 'row',
    marginBottom: 12,
    justifyContent: 'center',
  },
  View_74: {
    paddingLeft: 36,
    paddingRight: 36,
    marginTop: 24,
  },
  KeyboardAwareScrollView_3bContent: {
    justifyContent: 'center',
  },
});

export default withTheme(LoginScreen);