import AsyncStorage from '@react-native-async-storage/async-storage';
export interface AuthUserResponse {
  token: string;
  user: {
    id: string;
    email: string;
    phoneNumber: string;
    fullName: string;
    avatar: string | null;
    role: string;
    companyId: string;
    address: string | null;
    subscriptionStatus: string;
    deleted: boolean;
    createdAt: string;
    updatedAt: string;
  };
  expires: string;
}

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

export const storeLoginUser = async (userLogin: AuthUserResponse | null) => {
  try {
    const jsonValue = JSON.stringify(userLogin);
    await AsyncStorage.setItem('userLogin', jsonValue);
  } catch (e) {
    // saving error
  }
};

export const getStoreLoginUser = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem('userLogin');
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    // error reading value
  }
};
