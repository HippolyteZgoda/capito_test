import React from 'react';
import * as DraftbitApi from '../apis/DraftbitApi.js';
import Images from '../config/Images';
import {
  Circle,
  Icon,
  Link,
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

const PersonalFinanceHomeScreen = props => {
  const { theme } = props;

  return (
    <ScreenContainer
      style={{
        borderColor: theme.colors.background,
        backgroundColor: theme.colors.bleuCapito,
      }}
      scrollable={true}
      hasTopSafeArea={true}
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
                      {'7,900.50'}
                    </Text>
                  </View>
                </View>
              </View>
            </Touchable>
          </SwiperItem>

          <SwiperItem style={styles.SwiperItemIC}>
            <Touchable>
              <View
                style={[
                  styles.ViewGF,
                  { backgroundColor: theme.colors.strong, borderRadius: 12 },
                ]}
              >
                <View style={styles.View_40}>
                  <Text
                    style={[styles.TextOe, { color: theme.colors.surface }]}
                  >
                    {'Apply Pay Card'}
                  </Text>
                  <Image
                    style={styles.Imagebw}
                    source={{
                      uri: 'https://static.draftbit.com/images/example-screens/apple-pay-logo.png',
                    }}
                    resizeMode={'contain'}
                  />
                </View>

                <View>
                  <Text
                    style={[styles.Texte5, { color: theme.colors.surface }]}
                  >
                    {'Balance'}
                  </Text>

                  <View style={styles.ViewKS}>
                    <Text
                      style={[styles.Textn3, { color: theme.colors.surface }]}
                    >
                      {'$'}
                    </Text>

                    <Text
                      style={[styles.Textz9, { color: theme.colors.surface }]}
                    >
                      {'1,440.12'}
                    </Text>
                  </View>
                </View>
              </View>
            </Touchable>
          </SwiperItem>

          <SwiperItem style={styles.SwiperItemxq}>
            <Touchable>
              <View
                style={[
                  styles.View_8u,
                  { backgroundColor: theme.colors.error, borderRadius: 12 },
                ]}
              >
                <View style={styles.Viewwg}>
                  <Text
                    style={[styles.Textej, { color: theme.colors.surface }]}
                  >
                    {'Wells Fargo Credit'}
                  </Text>
                  <Image
                    style={styles.ImageQB}
                    resizeMode={'cover'}
                    source={{
                      uri: 'https://static.draftbit.com/images/example-screens/mastercard-logo.png',
                    }}
                  />
                </View>

                <View>
                  <Text
                    style={[styles.TextpU, { color: theme.colors.surface }]}
                  >
                    {'Balance'}
                  </Text>

                  <View style={styles.View_4b}>
                    <Text
                      style={[styles.TextMO, { color: theme.colors.surface }]}
                    >
                      {'$'}
                    </Text>

                    <Text
                      style={[styles.TextPc, { color: theme.colors.surface }]}
                    >
                      {'720.72'}
                    </Text>
                  </View>
                </View>
              </View>
            </Touchable>
          </SwiperItem>
        </Swiper>
      </View>

      <View style={styles.ViewDC}>
        <View style={styles.View_3t}>
          <View
            style={[
              styles.Viewjs,
              { backgroundColor: theme.colors.divider, borderRadius: 8 },
            ]}
          >
            <Icon
              name={'Feather/arrow-up'}
              size={26}
              color={theme.colors.light}
            />
          </View>
          <Spacer right={4} left={4} />
          <View style={styles.ViewFl}>
            <Text style={[styles.TextUk, { color: theme.colors.light }]}>
              {'Money Out'}
            </Text>

            <Text style={[styles.Text_3j, { color: theme.colors.strong }]}>
              {'$3,227'}
            </Text>
          </View>
        </View>
        <Spacer top={8} right={8} bottom={8} left={8} />
        <View style={styles.ViewPR}>
          <View
            style={[
              styles.ViewgN,
              { backgroundColor: theme.colors.divider, borderRadius: 8 },
            ]}
          >
            <Icon
              name={'Feather/arrow-down'}
              size={26}
              color={theme.colors.light}
            />
          </View>
          <Spacer right={4} left={4} />
          <View style={styles.Viewnm}>
            <Text style={[styles.TextDB, { color: theme.colors.light }]}>
              {'Money In'}
            </Text>

            <Text style={[styles.Textbj, { color: theme.colors.strong }]}>
              {'$6,333'}
            </Text>
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
              {'Transactions'}
            </Text>
            <Link
              style={[styles.LinkKU, { color: theme.colors.primary }]}
              title={'See all'}
            />
          </View>
          <Spacer top={12} bottom={12} />
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
                          <Circle size={56} bgColor={theme.colors.background}>
                            <Icon
                              style={styles.Icon_2x}
                              name={'Feather/tag'}
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
        </View>
      </View>

      <View
        style={[styles.Viewfc, { backgroundColor: theme.colors.bleuCapito }]}
      >
        <View style={styles.Viewte}>
          <Touchable
            style={[styles.Touchableur, { borderBottomRightRadius: 0 }]}
          >
            <Icon
              name={'AntDesign/swap'}
              size={24}
              color={theme.colors.strongInverse}
            />
          </Touchable>
        </View>
        <Spacer top={8} right={'8%'} bottom={8} left={'8%'} />
        <View>
          <Touchable>
            <Icon
              size={24}
              name={'AntDesign/home'}
              color={theme.colors.strongInverse}
            />
          </Touchable>
        </View>
        <Spacer top={8} right={'8%'} bottom={8} left={'8%'} />
        <View>
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
  TextOe: {
    fontFamily: 'Inter_500Medium',
    fontSize: 16,
  },
  Imagebw: {
    width: 50,
    height: 20,
  },
  View_40: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  Texte5: {
    fontFamily: 'Inter_500Medium',
  },
  Textn3: {
    fontFamily: 'Inter_600SemiBold',
  },
  Textz9: {
    fontFamily: 'Inter_700Bold',
    fontSize: 24,
    lineHeight: 26,
    marginLeft: 4,
  },
  ViewKS: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginTop: 6,
  },
  ViewGF: {
    paddingLeft: 24,
    paddingTop: 24,
    paddingRight: 24,
    paddingBottom: 24,
    height: 220,
    justifyContent: 'space-between',
  },
  SwiperItemIC: {
    paddingLeft: 24,
    paddingTop: 24,
    paddingRight: 24,
    paddingBottom: 24,
  },
  Textej: {
    fontFamily: 'Inter_500Medium',
    fontSize: 16,
  },
  ImageQB: {
    width: 50,
    height: 20,
  },
  Viewwg: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  TextpU: {
    fontFamily: 'Inter_500Medium',
  },
  TextMO: {
    fontFamily: 'Inter_600SemiBold',
  },
  TextPc: {
    fontFamily: 'Inter_700Bold',
    fontSize: 24,
    lineHeight: 26,
    marginLeft: 4,
  },
  View_4b: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginTop: 6,
  },
  View_8u: {
    paddingLeft: 24,
    paddingTop: 24,
    paddingRight: 24,
    paddingBottom: 24,
    height: 220,
    justifyContent: 'space-between',
  },
  SwiperItemxq: {
    paddingLeft: 24,
    paddingTop: 24,
    paddingRight: 24,
    paddingBottom: 24,
  },
  Swiperys: {
    height: 280,
  },
  Viewjs: {
    paddingLeft: 12,
    paddingTop: 12,
    paddingRight: 12,
    paddingBottom: 12,
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
  Touchableur: {
    marginLeft: '50%',
    marginRight: '50%',
  },
  Viewte: {
    marginLeft: '20%',
    marginRight: '20%',
  },
  IconzA: {
    marginLeft: '20%',
  },
  Viewfc: {
    flexDirection: 'row',
    paddingLeft: 24,
    paddingTop: 32,
    paddingRight: 24,
    paddingBottom: 24,
  },
});

export default withTheme(PersonalFinanceHomeScreen);
