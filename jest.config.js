module.exports = {
  preset: 'jest-expo',
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.(js|ts|tsx)$': 'babel-jest',
  },
  transformIgnorePatterns: [
    'node_modules/(?!(expo-modules-core|expo(nent)?|@expo|react-native|@react-native|@react-navigation)/)',
  ],
  setupFilesAfterEnv: ['@testing-library/jest-native/extend-expect'],
};
