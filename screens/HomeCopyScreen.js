import React from 'react';
import * as XanoApi from '../apis/XanoApi.js';
import * as GlobalVariables from '../config/GlobalVariableContext';
import { ButtonSolid, ScreenContainer, Spacer, withTheme } from '@draftbit/ui';
import { useIsFocused } from '@react-navigation/native';
import { StyleSheet, Text, View } from 'react-native';

const HomeCopyScreen = props => {
  const Constants = GlobalVariables.useValues();
  const Variables = Constants;
  const setGlobalVariableValue = GlobalVariables.useSetValue();

  const { theme } = props;
  const { navigation } = props;

  const isFocused = useIsFocused();
  React.useEffect(async () => {
    try {
      if (!isFocused) {
        return;
      }
      const response = await XanoApi.authMeGET(Constants);
      const email = response.email;
      if (email) {
        return;
      }
      setGlobalVariableValue({
        key: 'auth_header',
        value: '',
      });
      setGlobalVariableValue({
        key: 'user_id',
        value: '',
      });
      setGlobalVariableValue({
        key: 'user_name',
        value: '',
      });
      setGlobalVariableValue({
        key: 'user_email',
        value: '',
      });
      navigation.navigate('LoginScreen');
    } catch (err) {
      console.error(err);
    }
  }, [isFocused]);

  return (
    <ScreenContainer hasTopSafeArea={true}>
      <View style={styles.View_9E}>
        <Text style={[styles.TextfD, { color: theme.colors.strong }]}>
          {'Hey '}
          {Constants['user_name']}
          {'!'}
        </Text>
        <Spacer top={8} right={8} bottom={8} left={8} />
        <Text style={{ color: theme.colors.strong }}>
          {'Your user ID is '}
          {Constants['user_id']}
          {' and your email address is '}
          {Constants['user_email']}
        </Text>
      </View>

      <View style={styles.ViewZb}>
        <ButtonSolid
          onPress={() => {
            try {
              setGlobalVariableValue({
                key: 'is_loading',
                value: true,
              });
              setGlobalVariableValue({
                key: 'auth_header',
                value: '',
              });
              setGlobalVariableValue({
                key: 'user_id',
                value: '',
              });
              setGlobalVariableValue({
                key: 'user_name',
                value: '',
              });
              setGlobalVariableValue({
                key: 'user_email',
                value: '',
              });
              setGlobalVariableValue({
                key: 'is_loading',
                value: false,
              });
              navigation.navigate('LoginScreen');
            } catch (err) {
              console.error(err);
            }
          }}
          style={[
            styles.ButtonSolidU3,
            { backgroundColor: theme.colors.error },
          ]}
          title={'Sign out'}
        />
      </View>
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  TextfD: {
    fontFamily: 'System',
    fontWeight: '700',
    fontSize: 24,
  },
  View_9E: {
    paddingLeft: 24,
    paddingTop: 24,
    paddingRight: 24,
    paddingBottom: 24,
  },
  ButtonSolidU3: {
    borderRadius: 8,
    fontFamily: 'System',
    fontWeight: '700',
    textAlign: 'center',
    paddingLeft: 16,
    paddingTop: 16,
    paddingRight: 16,
    paddingBottom: 16,
  },
  ViewZb: {
    paddingLeft: 24,
    paddingTop: 24,
    paddingRight: 24,
    paddingBottom: 24,
  },
});

export default withTheme(HomeCopyScreen);
