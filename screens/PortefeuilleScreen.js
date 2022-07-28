import React from 'react';
import * as DraftbitApi from '../apis/DraftbitApi.js';
import * as CustomCode from '../components.js';
import * as GlobalVariables from '../config/GlobalVariableContext';
import Images from '../config/Images';
import {
  Circle,
  Icon,
  IconButton,
  Link,
  NumberInput,
  ScreenContainer,
  Spacer,
  Swiper,
  SwiperItem,
  Touchable,
  withTheme,
} from '@draftbit/ui';
import { useIsFocused } from '@react-navigation/native';
import {
  ActivityIndicator,
  FlatList,
  Image,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { Fetch } from 'react-request';

const PortefeuilleScreen = props => {
  const Constants = GlobalVariables.useValues();
  const Variables = Constants;
  const setGlobalVariableValue = GlobalVariables.useSetValue();

  const PlusValue = (Invested, Balance) => {
    // Type the code for the body of your function or hook here.
    // Functions can be triggered via Button/Touchable actions.
    // Hooks are run per ReactJS rules.
    P_V = Balance - Invested;
    P_V_ %= (P_V * 100) / Invested;
    /* String line breaks are accomplished with backticks ( example: `line one
line two` ) and will not work with special characters inside of quotes ( example: "line one line two" ) */
  };

  const { theme } = props;
  const { navigation } = props;

  const [numberInputValue, setNumberInputValue] = React.useState('');

  return (
    <ScreenContainer
      style={{
        borderColor: theme.colors.background,
        backgroundColor: theme.colors.bleuCapito,
      }}
      scrollable={true}
      hasTopSafeArea={false}
    >
      <View
        style={[styles.Viewvg, { backgroundColor: theme.colors.bleuCapito }]}
      >
        <View>
          <Touchable>
            <Image
              style={styles.ImageZm}
              source={Images.Logo}
              resizeMode={'cover'}
            />
          </Touchable>
        </View>
        <Spacer top={8} right={8} bottom={8} left={8} />
      </View>

      <View>
        <Swiper
          style={styles.Swiperys}
          dotColor={theme.colors.light}
          dotActiveColor={theme.colors.primary}
          dotsTouchable={true}
        >
          <SwiperItem style={styles.SwiperItemR2}>
            <Touchable>
              <View
                style={[
                  styles.VieweT,
                  {
                    backgroundColor: theme.colors.bleuGradient,
                    borderRadius: 12,
                  },
                ]}
              >
                <View style={styles.ViewDx}>
                  <Text
                    style={[
                      styles.Textr3,
                      { color: theme.colors.strongInverse },
                    ]}
                  >
                    {'Hello, Hippolyte !'}
                  </Text>

                  <Text
                    style={[
                      styles.Textje,
                      { color: theme.colors.mediumInverse },
                    ]}
                  >
                    {'Ton Portefeuille !'}
                  </Text>
                </View>

                <View style={[styles.Viewyo, { borderRadius: 0 }]}>
                  <Text
                    style={[styles.TextLh, { color: theme.colors.surface }]}
                  >
                    {'Balance'}
                  </Text>

                  <View style={styles.Viewbw}>
                    <Text
                      style={[styles.Textpo, { color: theme.colors.surface }]}
                    >
                      {'$'}
                    </Text>

                    <Text
                      style={[styles.Text_1k, { color: theme.colors.surface }]}
                    >
                      {Constants['Balance']}
                    </Text>
                  </View>
                </View>
              </View>
            </Touchable>
          </SwiperItem>
        </Swiper>
      </View>

      <View style={styles.ViewDC}>
        <>
          {!Constants['Balance'] ? null : (
            <View style={styles.View_3t}>
              <Spacer right={4} left={4} />
              <View style={styles.ViewFl}>
                <Text
                  style={[styles.TextUk, { color: theme.colors.mediumInverse }]}
                >
                  {'Montant investi\n'}
                </Text>

                <Text
                  style={[
                    styles.Text_3j,
                    { color: theme.colors.strongInverse },
                  ]}
                >
                  {'$'}
                  {Constants['Invested']}
                </Text>
              </View>
            </View>
          )}
        </>
        <Spacer top={8} right={8} bottom={8} left={8} />
        <View style={styles.ViewPR}>
          <View
            style={[
              styles.ViewgN,
              { backgroundColor: theme.colors.divider, borderRadius: 8 },
            ]}
          >
            <Icon
              name={'AntDesign/arrowup'}
              size={26}
              color={theme.colors.light}
            />
          </View>
          <Spacer right={4} left={4} />
          <View style={styles.Viewnm}>
            <Text style={[styles.TextDB, { color: theme.colors.light }]}>
              {'Plus Value\n'}
            </Text>

            <Text
              style={[styles.Textbj, { color: theme.colors.strongInverse }]}
            >
              {'$('}
              {Constants['Balance']}
              {'-'}
              {Constants['Invested']}
              {')'}
            </Text>
            <NumberInput
              onChangeText={newNumberInputValue => {
                try {
                  setGlobalVariableValue({
                    key: 'Balance',
                    value: newNumberInputValue,
                  });
                  setGlobalVariableValue({
                    key: 'Invested',
                    value: newNumberInputValue,
                  });
                  PlusValue(Constants['Balance'], Constants['Invested']);
                } catch (err) {
                  console.error(err);
                }
              }}
              style={[
                styles.NumberInputxs,
                { borderColor: theme.colors.divider },
              ]}
              placeholder={'Enter a number...'}
              defaultValue={Constants['Balance']}
            />
          </View>

          <View>
            <Text style={{ color: theme.colors.strong }}>{'\n'}</Text>
          </View>
        </View>
      </View>

      <View
        style={[
          styles.ViewVH,
          {
            borderTopLeftRadius: 48,
            borderTopRightRadius: 48,
            backgroundColor: theme.colors.surface,
            borderColor: theme.colors.divider,
          },
        ]}
      >
        <View>
          <View style={styles.View_94}>
            <Text style={[styles.TextDY, { color: theme.colors.strong }]}>
              {'Cryptos'}
            </Text>
            <Link
              style={[styles.LinkKU, { color: theme.colors.primary }]}
              title={'See all'}
            />
          </View>

          <DraftbitApi.FetchProductsGET limit={1}>
            {({ loading, error, data, refetchProducts }) => {
              const fetchData = data;
              if (!fetchData || loading) {
                return <ActivityIndicator />;
              }

              if (error) {
                return (
                  <Text style={{ textAlign: 'center' }}>
                    There was a problem fetching this data
                  </Text>
                );
              }

              return (
                <FlatList
                  data={fetchData}
                  listKey={'5AJjvK1w'}
                  keyExtractor={({ item }) => item?.id || item?.uuid || item}
                  renderItem={({ item }) => {
                    const listData = item;
                    return (
                      <View style={styles.ViewPn}>
                        <Circle size={60} bgColor={theme.colors.divider}>
                          <Circle size={56}>
                            <Icon
                              style={styles.Icon_2x}
                              name={'FontAwesome/btc'}
                              size={24}
                              color={theme.colors.light}
                            />
                          </Circle>
                        </Circle>
                        <Spacer right={6} left={6} />
                        <View style={styles.ViewQb}>
                          <Text
                            style={[
                              styles.TextXP,
                              { color: theme.colors.light },
                            ]}
                          >
                            {null}
                          </Text>

                          <Text
                            style={[
                              styles.TextPa,
                              { color: theme.colors.strong },
                            ]}
                          >
                            {'BTC\n'}
                          </Text>
                        </View>
                        <Spacer right={4} left={4} />
                        <View style={styles.ViewIN}>
                          <Text
                            style={[
                              styles.Text_6a,
                              { color: theme.colors.medium },
                            ]}
                          >
                            {'$1,227.72'}
                          </Text>

                          <Text
                            style={[
                              styles.Textfv,
                              { color: theme.colors.medium },
                            ]}
                          >
                            {'4/20/2022'}
                          </Text>
                        </View>
                      </View>
                    );
                  }}
                  contentContainerStyle={styles.FlatList_5AContent}
                  numColumns={1}
                />
              );
            }}
          </DraftbitApi.FetchProductsGET>
          <Spacer top={12} bottom={12} />
        </View>
      </View>

      <View
        style={[styles.Viewfc, { backgroundColor: theme.colors.bleuCapito }]}
      >
        <View style={styles.ViewWN}>
          <Touchable
            onPress={() => {
              try {
                navigation.navigate('HomeScreen');
              } catch (err) {
                console.error(err);
              }
            }}
          >
            <Icon
              size={24}
              name={'AntDesign/home'}
              color={theme.colors.secondary}
            />
          </Touchable>
        </View>

        <View style={styles.Viewte}>
          <Touchable
            style={[styles.Touchableur, { borderBottomRightRadius: 0 }]}
          >
            <IconButton
              size={32}
              icon={'AntDesign/swap'}
              color={theme.colors.background}
            />
          </Touchable>
        </View>

        <View style={styles.Viewya}>
          <Touchable>
            <Icon
              style={styles.IconzA}
              name={'AntDesign/book'}
              size={24}
              color={theme.colors.strongInverse}
            />
          </Touchable>
        </View>
      </View>
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  ImageZm: {
    width: 25,
    height: 25,
    opacity: 1,
    minWidth: 100,
  },
  Viewvg: {
    flexDirection: 'row',
    paddingLeft: 24,
    paddingTop: 32,
    paddingRight: 24,
    paddingBottom: 24,
  },
  Textr3: {
    fontFamily: 'Inter_400Regular',
    fontSize: 16,
  },
  Textje: {
    fontFamily: 'Inter_600SemiBold',
    fontSize: 20,
    marginTop: 4,
  },
  ViewDx: {
    flex: 1,
    justifyContent: 'center',
  },
  TextLh: {
    fontFamily: 'Inter_500Medium',
  },
  Textpo: {
    fontFamily: 'Inter_600SemiBold',
  },
  Text_1k: {
    fontFamily: 'Inter_700Bold',
    fontSize: 24,
    lineHeight: 26,
    marginLeft: 4,
  },
  Viewbw: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginTop: 6,
  },
  Viewyo: {
    alignContent: 'center',
    alignSelf: 'center',
    alignItems: 'flex-start',
  },
  VieweT: {
    paddingLeft: 24,
    paddingTop: 24,
    paddingRight: 24,
    paddingBottom: 24,
    height: 220,
    justifyContent: 'space-between',
  },
  SwiperItemR2: {
    paddingLeft: 24,
    paddingTop: 24,
    paddingRight: 24,
    paddingBottom: 24,
  },
  Swiperys: {
    height: 280,
  },
  TextUk: {
    fontFamily: 'Inter_400Regular',
    fontSize: 12,
  },
  Text_3j: {
    fontFamily: 'Inter_700Bold',
    fontSize: 22,
    marginTop: 2,
  },
  ViewFl: {
    flex: 1,
  },
  View_3t: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  ViewgN: {
    paddingLeft: 12,
    paddingTop: 12,
    paddingRight: 12,
    paddingBottom: 12,
  },
  TextDB: {
    fontFamily: 'Inter_400Regular',
    fontSize: 12,
  },
  Textbj: {
    fontFamily: 'Inter_700Bold',
    fontSize: 22,
    marginTop: 2,
  },
  NumberInputxs: {
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    paddingLeft: 8,
    paddingRight: 8,
    paddingTop: 8,
    paddingBottom: 8,
    borderRadius: 8,
  },
  Viewnm: {
    flex: 1,
  },
  ViewPR: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  ViewDC: {
    flexDirection: 'row',
    paddingLeft: 24,
    paddingRight: 24,
    paddingTop: 16,
    paddingBottom: 32,
  },
  TextDY: {
    fontFamily: 'Inter_600SemiBold',
    fontSize: 18,
  },
  LinkKU: {
    fontFamily: 'Inter_500Medium',
  },
  View_94: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  Icon_2x: {
    marginLeft: 4,
  },
  TextXP: {
    fontFamily: 'Inter_400Regular',
    fontSize: 12,
  },
  TextPa: {
    fontFamily: 'Inter_600SemiBold',
    fontSize: 16,
    marginTop: 4,
  },
  ViewQb: {
    flex: 1,
  },
  Text_6a: {
    fontFamily: 'Inter_700Bold',
  },
  Textfv: {
    fontFamily: 'Inter_400Regular',
    fontSize: 12,
    marginTop: 4,
  },
  ViewIN: {
    alignItems: 'flex-end',
  },
  ViewPn: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  FlatList_5AContent: {
    flex: 1,
  },
  Fetch_4k: {
    minHeight: 40,
  },
  ViewVH: {
    paddingLeft: 32,
    paddingTop: 36,
    paddingRight: 32,
    paddingBottom: 36,
    flex: 1,
    borderLeftWidth: 1,
    borderTopWidth: 1,
    borderRightWidth: 1,
  },
  ViewWN: {
    marginLeft: '15%',
  },
  Touchableur: {
    marginLeft: '50%',
    marginRight: '50%',
  },
  Viewte: {
    marginLeft: '15%',
    marginRight: '15%',
    paddingLeft: '5%',
    paddingRight: '5%',
  },
  IconzA: {
    marginLeft: '20%',
  },
  Viewya: {
    paddingLeft: '2%',
  },
  Viewfc: {
    flexDirection: 'row',
    paddingLeft: 24,
    paddingTop: 32,
    paddingRight: 24,
    paddingBottom: 24,
  },
});

export default withTheme(PortefeuilleScreen);
