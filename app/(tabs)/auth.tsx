import React, { useState,useEffect, useCallback } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, Image, SafeAreaView } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import * as Font from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';


const loadFonts = () => {
  return Font.loadAsync({
    'dmsans': require('../../assets/fonts/dm-sans-semi-bold.ttf'),
    'logofont': require('../../assets/fonts/AA Sameer Qamri Regular.ttf'),
  });
};

SplashScreen.preventAutoHideAsync();

// SplashScreen.setOptions({
//   duration: 1000,
//   fade: true,
// });

export default function LandingScreen() {
  const [phoneNumber, setPhoneNumber] = useState('03022766354');
  const [fontsLoaded, setFontsLoaded] = useState(false);

  // Load fonts when component mounts
  useEffect(() => {
    async function prepare() {
      try {
        await loadFonts();
        setFontsLoaded(true);
      } catch (e) {
        console.warn(e);
      }
    }
    prepare();
  }, []);

  const onLayoutRootView = useCallback(() => {
    if (fontsLoaded) {
      SplashScreen.hide();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="light" />
      
      <View style={styles.content}>
        <View style={styles.logoContainer}>
          <Text style={styles.logo}>رہبر</Text>
        </View>
        
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Let's get started - چلو شروع کرتے ہیں</Text>
        </View>
        
        {/* Phone Input */}
        <View style={styles.phoneLabels}>
          <Text style={styles.labelEn}>Phone Number-فون نمبر</Text>
          {/* <Text style={styles.labelUr}>فون نمبر</Text> */}
        </View>
            
        <View style={styles.inputContainer}>
          <View style={styles.phoneInputWrapper}>
            <View style={styles.countryCode}>
              <View style={styles.flagContainer}>
                <View style={styles.flag}>
                  <View style={styles.flagGreen}>
                    <View style={styles.flagStar} />
                  </View>
                </View>
              </View>
              <Text style={styles.codeText}>+92</Text>
              <Text style={styles.dropdownIcon}>▼</Text>
            </View>
            <View style={styles.divider} />
            <TextInput
              style={styles.input}
              value={phoneNumber}
              onChangeText={setPhoneNumber}
              keyboardType="phone-pad"
              placeholder="Enter phone number"
            />
          </View>
        </View>
        
        {/* Button */}
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Send OTP - او ٹی پی بھیجیں</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 30,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  logoContainer: {
    // fontSize: 66,
    marginBottom: -10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    fontSize: 66,
    fontWeight: '500',
    color: '#7BAA7E',
    textAlign: 'center',
    fontFamily: 'logofont'
  },
  titleContainer: {
    marginBottom: 65,
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontFamily: 'dmsans',
    color: '#7BAA7E',
    textAlign: 'center',
    fontWeight: '900',
  },
  inputContainer: {
    width: '100%',
    marginBottom: 250,
  },
  phoneLabels: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: "space-between",
    textAlign: 'left',
  },
  labelEn: {
    fontSize: 14,
    color: '#7BAA7E',
    fontFamily: 'dmsans',
  },
  labelUr: {
    fontSize: 14,
    color: '#7BAA7E',
    fontWeight: '500',
    fontFamily: 'dmsans',
  },
  phoneInputWrapper: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 30,
    height: 56,
    alignItems: 'center',
    overflow: 'hidden',
  },
  countryCode: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
    paddingVertical: 8,
  },
  flagContainer: {
    marginRight: 8,
  },
  flag: {
    width: 24,
    height: 16,
    backgroundColor: '#006600',
    justifyContent: 'center',
    alignItems: 'center',
  },
  flagGreen: {
    width: 24,
    height: 16,
    backgroundColor: '#006600',
    justifyContent: 'center',
    alignItems: 'center',
  },
  flagStar: {
    width: 8,
    height: 8,
    backgroundColor: 'white',
    borderRadius: 4,
  },
  codeText: {
    fontSize: 16,
    fontWeight: '500',
  },
  dropdownIcon: {
    fontSize: 10,
    marginLeft: 4,
  },
  divider: {
    width: 1,
    height: '70%',
    backgroundColor: '#ccc',
  },
  input: {
    flex: 1,
    height: '100%',
    paddingHorizontal: 16,
    fontSize: 16,
  },
  button: {
    width: '100%',
    height: 56,
    backgroundColor: '#7BAA7E',
    borderRadius: 30,
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    marginTop: 6,
    color: '#fff',
    fontSize: 16,
    fontWeight: '500',
  },
});