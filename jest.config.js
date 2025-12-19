export default {
  preset: 'ts-jest',
  testEnvironment: 'node',
  testMatch: ['**/src/__test__/**/*.test.ts'],
  extensionsToTreatAsEsm: ['.ts'],
  globals: {
    'ts-jest': {
      useESM: true
    }
  }
};