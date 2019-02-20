module.exports = {
  setupFiles: ['<rootDir>/jest.setup.js'],
  // testRegex: TEST_REGEX,
  transform: {
    '^.+\\.tsx?$': 'babel-jest'
  },
  testPathIgnorePatterns: ['<rootDir>/src/.next/', '<rootDir>/node_modules/'],
  moduleNameMapper: {
    '^components': '<rootDir>/src/components',
    '^manipulations': '<rootDir>/src/manipulations',
    '^lib': '<rootDir>/src/lib',
    '^pages': '<rootDir>/src/pages',
    '^server': '<rootDir>/src/server'
  }
};
