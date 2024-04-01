import AsyncStorage from '@react-native-async-storage/async-storage';

export const storeTheme = async (theme: string) => {
  try {
    const jsonValue = JSON.stringify(theme);
    await AsyncStorage.setItem('theme', jsonValue);
  } catch (e) {
    // saving error
  }
};

export const getTheme = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem('theme');
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    // error reading value
  }
};
export const storeLanguage = async (langauge: String) => {
  try {
    const jsonValue = JSON.stringify(langauge);
    await AsyncStorage.setItem('langauge', jsonValue);
  } catch (e) {
    // saving error
  }
};

export const getLanguage = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem('langauge');
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    // error reading value
  }
};
