/**
 * In our test setup we have some patterns that break rules - but that still
 * make sense in a test environment... So we switch off those rules in the
 * test directory.
 */

module.exports = {
  globals: {
    describe: true,
    it: true,
    beforeEach: true,
    afterEach: true,
  },
  rules: {
    'no-unused-expressions': 'off',
  },
};
