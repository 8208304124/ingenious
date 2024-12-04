module.exports = {
  assets: ['./assets/fonts'], // Include your custom fonts
  dependencies: {
    'react-native-vector-icons': {
      platforms: {
        ios: null, // Keep iOS linking disabled for vector icons
      },
    },
  },
};
