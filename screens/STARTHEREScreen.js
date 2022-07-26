import React from 'react';
import { ScreenContainer, Spacer, withTheme } from '@draftbit/ui';
import { StyleSheet, Text } from 'react-native';

const STARTHEREScreen = props => {
  const { theme } = props;

  return (
    <ScreenContainer style={styles.screen} hasTopSafeArea={true}>
      <Text style={[styles.Textwe, { color: theme.colors.strong }]}>
        {'Welcome to the Xano Auth Starter App'}
      </Text>
      <Spacer top={8} right={8} bottom={8} left={8} />
      <Text style={[styles.TextFu, { color: theme.colors.strong }]}>
        {'To get started, please go to the guide located at the address below'}
      </Text>
      <Spacer top={8} right={8} bottom={8} left={8} />
      <Text style={[styles.TextP2, { color: theme.colors.strong }]}>
        {
          'https://community.draftbit.com/c/tutorials/xano-auth-starter-app-guide'
        }
      </Text>
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  Textwe: {
    fontSize: 20,
  },
  TextFu: {
    fontSize: 16,
  },
  TextP2: {
    fontSize: 16,
  },
  screen: {
    justifyContent: 'center',
    paddingTop: 36,
    paddingRight: 36,
    paddingBottom: 36,
    paddingLeft: 36,
  },
});

export default withTheme(STARTHEREScreen);
