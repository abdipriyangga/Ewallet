import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  StatusBar,
  Image,
} from 'react-native';
import { DefaultUser } from '../assets';
import FaIcon from 'react-native-vector-icons/FontAwesome5';
import Icon from 'react-native-vector-icons/Ionicons';
import { connect } from 'react-redux';
import { authLogout } from '../redux/actions/auth';
const Profile = props => {
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.wrapHeaderProfile}>
          <View style={{ marginTop: 30 }}>
            <Text style={{ fontSize: 20, fontWeight: '800', color: '#000' }}>
              Profile
            </Text>
          </View>
          <View style={{ marginTop: 30 }}>
            {/* Info Profile */}
            <View style={{ flexDirection: 'row' }}>
              <Image source={DefaultUser} style={styles.imageProfile} />
              <View style={{ marginHorizontal: 20 }}>
                <Text style={{ color: '#000', fontWeight: 'bold' }}>
                  Your name
                </Text>
                <Text style={{ fontWeight: '400', marginTop: 5 }}>
                  Phone Number
                </Text>
              </View>
            </View>
            <View
              style={{
                marginVertical: 13,
                borderWidth: 1,
                borderBottomColor: '#e3e3e3',
                opacity: 0.1,
              }}
            />
            {/* ODO Premier and Points */}
            <TouchableOpacity
              style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
              <View style={{ flexDirection: 'row', marginVertical: 0 }}>
                <Icon
                  name="logo-ionic"
                  size={25}
                  style={{ marginHorizontal: 10 }}
                />
                <Text
                  style={{
                    color: '#000',
                    fontWeight: '800',
                    fontSize: 16,
                    marginHorizontal: 20,
                  }}>
                  ODO Premier
                </Text>
              </View>
              <Icon
                name="chevron-forward-outline"
                size={25}
                style={{ marginTop: 0 }}
              />
            </TouchableOpacity>
            <View
              style={{
                marginVertical: 13,
                borderWidth: 1,
                borderBottomColor: '#e3e3e3',
                opacity: 0.1,
              }}
            />
            <TouchableOpacity
              style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
              <View style={{ flexDirection: 'row', marginVertical: 0 }}>
                <FaIcon
                  name="product-hunt"
                  size={25}
                  style={{ marginHorizontal: 10 }}
                />
                <Text
                  style={{
                    color: '#000',
                    fontWeight: '800',
                    fontSize: 16,
                    marginHorizontal: 20,
                  }}>
                  ODO Points
                </Text>
              </View>
              <Icon
                name="chevron-forward-outline"
                size={25}
                style={{ marginTop: 0 }}
              />
            </TouchableOpacity>
          </View>
        </View>
        {/* ODO ID */}
        <View style={styles.wrapHeaderOdoID}>
          <View>
            <Text style={{ fontSize: 17, fontWeight: '800', color: '#000' }}>
              ODO ID
            </Text>
          </View>
          <View style={{ flexDirection: 'row', marginVertical: 15 }}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                width: 180,
                height: 50,
                backgroundColor: '#fff',
                borderRadius: 10,
                shadowColor: '#000',
                shadowOffset: {
                  width: 0,
                  height: 3,
                },
                shadowOpacity: 0.27,
                shadowRadius: 4.65,

                elevation: 6,
                marginHorizontal: 3,
              }}>
              <Icon
                name="qr-code-outline"
                size={30}
                style={{ color: '#000' }}
              />
              <Text
                style={{
                  fontWeight: '800',
                  fontSize: 16,
                  color: '#000',
                  marginHorizontal: 5,
                }}>
                QR Code
              </Text>
            </View>

            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                width: 180,
                height: 50,
                backgroundColor: '#fff',
                borderRadius: 10,
                shadowColor: '#000',
                shadowOffset: {
                  width: 0,
                  height: 3,
                },
                shadowOpacity: 0.27,
                shadowRadius: 4.65,

                elevation: 6,
                marginHorizontal: 3,
              }}>
              <FaIcon name="barcode" size={30} style={{ color: '#000' }} />
              <Text
                style={{
                  fontWeight: '800',
                  fontSize: 16,
                  color: '#000',
                  marginHorizontal: 5,
                }}>
                Loyalty
              </Text>
            </View>
          </View>
        </View>

        {/* Akun */}
        <View style={styles.wrapHeaderAccount}>
          <View style={{ marginTop: 30 }}>
            <Text style={{ fontSize: 20, fontWeight: '800', color: '#000' }}>
              Akun
            </Text>
          </View>
          <View style={{ marginTop: 30 }}>
            {/* Info Profile */}
            <TouchableOpacity
              style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
              <View style={{ flexDirection: 'row', marginVertical: 0 }}>
                <FaIcon
                  name="user-edit"
                  size={25}
                  style={{ marginHorizontal: 10 }}
                />
                <Text
                  style={{
                    color: '#000',
                    fontWeight: '800',
                    fontSize: 16,
                    marginHorizontal: 20,
                  }}>
                  Ubah Profile
                </Text>
              </View>
              <Icon
                name="chevron-forward-outline"
                size={25}
                style={{ marginTop: 0 }}
              />
            </TouchableOpacity>
            <View
              style={{
                marginVertical: 13,
                borderWidth: 1,
                borderBottomColor: '#e3e3e3',
                opacity: 0.1,
              }}
            />
            {/* ODO Premier and Points */}
            <TouchableOpacity
              style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
              <View style={{ flexDirection: 'row', marginVertical: 0 }}>
                <FaIcon
                  name="credit-card"
                  size={25}
                  style={{ marginHorizontal: 10 }}
                />
                <Text
                  style={{
                    color: '#000',
                    fontWeight: '800',
                    fontSize: 16,
                    marginHorizontal: 23,
                  }}>
                  My Cards
                </Text>
              </View>
              <Icon
                name="chevron-forward-outline"
                size={25}
                style={{ marginTop: 0 }}
              />
            </TouchableOpacity>
            <View
              style={{
                marginVertical: 13,
                borderWidth: 1,
                borderBottomColor: '#e3e3e3',
                opacity: 0.1,
              }}
            />
            <TouchableOpacity
              style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
              <View style={{ flexDirection: 'row', marginVertical: 0 }}>
                <FaIcon name="tag" size={25} style={{ marginHorizontal: 10 }} />
                <Text
                  style={{
                    color: '#000',
                    fontWeight: '800',
                    fontSize: 16,
                    marginHorizontal: 25,
                  }}>
                  Kode Promo
                </Text>
              </View>
              <Icon
                name="chevron-forward-outline"
                size={25}
                style={{ marginTop: 0 }}
              />
            </TouchableOpacity>
          </View>
        </View>

        {/* Keamanan */}
        <View style={styles.wrapHeaderSecurity}>
          <View style={{ marginTop: 30 }}>
            <Text style={{ fontSize: 20, fontWeight: '800', color: '#000' }}>
              Keamanan
            </Text>
          </View>
          <View style={{ marginTop: 30 }}>
            {/* Info Profile */}
            <TouchableOpacity
              style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
              <View style={{ flexDirection: 'row', marginVertical: 0 }}>
                <FaIcon
                  name="lock"
                  size={25}
                  style={{ marginHorizontal: 10 }}
                />
                <Text
                  style={{
                    color: '#000',
                    fontWeight: '800',
                    fontSize: 16,
                    marginHorizontal: 20,
                  }}>
                  Ubah Password
                </Text>
              </View>
              <Icon
                name="chevron-forward-outline"
                size={25}
                style={{ marginTop: 0 }}
              />
            </TouchableOpacity>
          </View>
        </View>
        {/* Tentang */}
        <View style={styles.wrapHeaderAbout}>
          <View style={{ marginTop: 30 }}>
            <Text style={{ fontSize: 20, fontWeight: '800', color: '#000' }}>
              Tentang
            </Text>
          </View>
          <View style={{ marginTop: 30 }}>
            {/* Info Profile */}
            <TouchableOpacity
              style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
              <View style={{ flexDirection: 'row', marginVertical: 0 }}>
                <FaIcon
                  name="trophy"
                  size={25}
                  style={{ marginHorizontal: 10 }}
                />
                <Text
                  style={{
                    color: '#000',
                    fontWeight: '800',
                    fontSize: 16,
                    marginHorizontal: 20,
                  }}>
                  Keuntungan Pakai ODO
                </Text>
              </View>
              <Icon
                name="chevron-forward-outline"
                size={25}
                style={{ marginTop: 0 }}
              />
            </TouchableOpacity>
            <View
              style={{
                marginVertical: 13,
                borderWidth: 1,
                borderBottomColor: '#e3e3e3',
                opacity: 0.1,
              }}
            />
            {/* ODO Premier and Points */}
            <TouchableOpacity
              style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
              <View style={{ flexDirection: 'row', marginVertical: 0 }}>
                <FaIcon
                  name="lightbulb"
                  size={25}
                  style={{ marginHorizontal: 10 }}
                />
                <Text
                  style={{
                    color: '#000',
                    fontWeight: '800',
                    fontSize: 16,
                    marginHorizontal: 30,
                  }}>
                  Panduan ODO
                </Text>
              </View>
              <Icon
                name="chevron-forward-outline"
                size={25}
                style={{ marginTop: 0 }}
              />
            </TouchableOpacity>
            <View
              style={{
                marginVertical: 13,
                borderWidth: 1,
                borderBottomColor: '#e3e3e3',
                opacity: 0.1,
              }}
            />
            <TouchableOpacity
              style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
              <View style={{ flexDirection: 'row', marginVertical: 0 }}>
                <FaIcon
                  name="file-alt"
                  size={25}
                  style={{ marginHorizontal: 10 }}
                />
                <Text
                  style={{
                    color: '#000',
                    fontWeight: '800',
                    fontSize: 16,
                    marginHorizontal: 28,
                  }}>
                  Syarat dan Ketentuan
                </Text>
              </View>
              <Icon
                name="chevron-forward-outline"
                size={25}
                style={{ marginTop: 0 }}
              />
            </TouchableOpacity>
            <View
              style={{
                marginVertical: 13,
                borderWidth: 1,
                borderBottomColor: '#e3e3e3',
                opacity: 0.1,
              }}
            />
            <TouchableOpacity
              style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
              <View style={{ flexDirection: 'row', marginVertical: 0 }}>
                <FaIcon
                  name="shield-alt"
                  size={25}
                  style={{ marginHorizontal: 10 }}
                />
                <Text
                  style={{
                    color: '#000',
                    fontWeight: '800',
                    fontSize: 16,
                    marginHorizontal: 25,
                  }}>
                  Kebijakan Privasi
                </Text>
              </View>
              <Icon
                name="chevron-forward-outline"
                size={25}
                style={{ marginTop: 0 }}
              />
            </TouchableOpacity>
            <View
              style={{
                marginVertical: 13,
                borderWidth: 1,
                borderBottomColor: '#e3e3e3',
                opacity: 0.1,
              }}
            />
            <TouchableOpacity
              style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
              <View style={{ flexDirection: 'row', marginVertical: 0 }}>
                <FaIcon
                  name="question-circle"
                  size={25}
                  style={{ marginHorizontal: 10 }}
                />
                <Text
                  style={{
                    color: '#000',
                    fontWeight: '800',
                    fontSize: 16,
                    marginHorizontal: 25,
                  }}>
                  Pusat Bantuan
                </Text>
              </View>
              <Icon
                name="chevron-forward-outline"
                size={25}
                style={{ marginTop: 0 }}
              />
            </TouchableOpacity>
          </View>
        </View>
        <View>
          <TouchableOpacity
            onPress={props.authLogout}
            style={styles.btnSignout}>
            <Text style={styles.textBtn}>Signout</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};
const mapStateToProps = state => ({
  auth: state.auth,
  profile: state.profile,
});
const mapDispatchToProps = {
  authLogout,
};
export default connect(mapStateToProps, mapDispatchToProps)(Profile);
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  wrapHeaderProfile: {
    backgroundColor: '#fff',
    padding: 25,
  },
  wrapHeaderOdoID: {
    backgroundColor: '#fff',
    padding: 25,
    marginVertical: 20,
  },
  wrapHeaderAccount: {
    backgroundColor: '#fff',
    padding: 25,
  },
  wrapHeaderSecurity: {
    backgroundColor: '#fff',
    padding: 25,
    marginVertical: 20,
  },
  wrapHeaderAbout: {
    backgroundColor: '#fff',
    padding: 25,
    marginBottom: 20,
  },
  imageProfile: {
    width: 50,
    height: 50,
    borderRadius: 15,
  },
  btnSignout: {
    top: 0,
    marginHorizontal: '8%',
    width: 340,
    height: 80,
    backgroundColor: '#6604c2',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 40,
  },
  textBtn: {
    fontFamily: 'Poppins-Bold',
    fontSize: 20,
    color: '#fff',
    fontWeight: 'bold',
  },
});
