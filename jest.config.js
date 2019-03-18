module.exports = {
  setupFilesAfterEnv: ['<rootDir>/client/tests/setupTests.js'],
  snapshotSerializers: [
    'enzyme-to-json/serializer'
  ]
};
