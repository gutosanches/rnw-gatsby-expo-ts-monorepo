const rnw = require('react-native-web/jest-preset')

module.exports = {
  preset: 'ts-jest',
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
    '^.+\\.jsx?$': '<rootDir>/jest-preprocess.js'
  },
  testMatch: [
    '**/web/src/**/__tests__/**/*.[tj]s?(x)',
    '**/web/src/**/?(*.)+(spec|test).[tj]s?(x)'
  ],
  testEnvironment: rnw.testEnvironment,
  moduleNameMapper: {
    ...rnw.moduleNameMapper,
    '.+\\.(css|styl|less|sass|scss)$': 'identity-obj-proxy',
    '.+\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/__mocks__/file-mock.js'
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  globals: {
    __PATH_PREFIX__: '',
    'ts-jest': {
      tsConfig: {
        jsx: 'react'
      }
    }
  },
  testPathIgnorePatterns: ['node_modules', '.cache'],
  transformIgnorePatterns: ['node_modules/(?!(gatsby)/)'],
  testURL: 'http://localhost',
  setupFiles: ['<rootDir>/loadershim.js', ...rnw.setupFiles]
}
