/* eslint-disable prettier/prettier */
import React, { useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  LogBox,
  FlatList,
} from 'react-native';
import { connect } from 'react-redux';
import { getHistory } from '../redux/actions/history';
import Icon from 'react-native-vector-icons/Ionicons';
const History = props => {
  const { history } = props.history;
  console.log('HISTORY DATA: ', history.createdAt);
  useEffect(() => {
    props.getHistory(props.auth.token);
    console.log('tooken from useEffect: ', props.auth.token);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
  return (
    <>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => props.navigation.goBack()}>
          <Icon name="arrow-back" size={25} style={styles.icon} />
        </TouchableOpacity>
        <Text style={styles.textHead}>History</Text>
      </View>
      <ScrollView>
        {history < 1 || undefined ? (
          <>
            <View>
              <Text>You dont have history</Text>
            </View>
          </>
        ) : (
          <>
            <FlatList
              data={history}
              keyExtractor={item => item.id}
              renderItem={({ item }) => {
                let dtNow = new Date(item.createdAt);
                const fixDate = `${dtNow.getDate()}-${dtNow.getMonth() + 1}-${dtNow.getFullYear()}`;
                return (
                  <>
                    <View style={{ marginVertical: 8, backgroundColor: '#eee' }}>
                      <View style={{ marginVertical: 10, marginHorizontal: 15 }}>
                        <Text>{fixDate}</Text>
                      </View>
                      <View style={{ backgroundColor: '#ffff', padding: 5 }}>
                        <Text style={styles.textTitle}>{item.description}</Text>
                        <View style={{ flexDirection: 'row' }}>
                          <Text style={styles.textSubTitle}>
                            {item.description}
                          </Text>
                          <View
                            style={{
                              flex: 1,
                              flexDirection: 'row',
                              justifyContent: 'flex-end',
                              marginVertical: 8,
                            }}>
                            <Text style={{ color: '#32f006', fontWeight: '800' }}>
                              Rp.
                            </Text>
                            <Text style={{ color: '#32f006', fontWeight: '800' }}>
                              {item.description === 'Top Up Balance to Account'
                                ? item.topupBalance
                                : item.deductedBalance}
                            </Text>
                          </View>
                        </View>
                      </View>
                    </View>
                  </>
                );
              }}
            />
          </>
        )}
      </ScrollView>
    </>
  );
};
const mapStateToProps = state => ({
  auth: state.auth,
  transaction: state.transaction,
  history: state.history,
});
const mapDispatchToProps = {
  getHistory,
};
export default connect(mapStateToProps, mapDispatchToProps)(History);
const styles = StyleSheet.create({
  header: {
    backgroundColor: '#6604c2',
    padding: 10,
    flexDirection: 'row',
  },
  imageProfile: {
    width: 50,
    height: 50,
    borderRadius: 15,
  },
  icon: {
    color: '#fff',
    marginTop: 10,
  },
  textHead: {
    fontFamily: 'Poppins-Bold',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#fff',
    marginTop: 8,
    marginLeft: 30,
  },
  textTitle: {
    fontFamily: 'Poppins-Bold',
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
    marginTop: 0,
    marginLeft: 15,
  },
  textSubTitle: {
    fontFamily: 'Poppins-Bold',
    fontSize: 14,
    fontWeight: 'bold',
    marginVertical: 8,
    marginLeft: 15,
  },
  textBtn: {
    fontFamily: 'Poppins-Bold',
    fontSize: 20,
    color: '#fff',
    fontWeight: 'bold',
  },
  btnEdit: {
    top: 0,
    marginHorizontal: '8%',
    width: 340,
    height: 80,
    backgroundColor: '#13c6dc',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '30%',
  },
  modalContainer: {
    justifyContent: 'flex-end',
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#000000a0',
  },
  wrapperModal: {
    backgroundColor: '#fff',
    height: 130,
    justifyContent: 'center',
    paddingLeft: 30,
  },
});
