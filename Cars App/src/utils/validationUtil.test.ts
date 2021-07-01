import cases from 'jest-in-case';

import validationUtil from './validationUtil';

describe('validationUtil.isValidFloatString', () => {
  cases(
    'when inputing valid strings, expect true',
    ({input}) => {
      const result = validationUtil.isFloatString(input);

      expect(result).toBeTruthy();
    },
    [
      {input: '0'},
      {input: '0.0'},
      {input: '1'},
      {input: '1.'},
      {input: '1.0'},
      {input: '1.1'},
      {input: ''},
      {input: '.'},
      {input: '.0'},
      {input: '.1'},
      {input: null},
      {input: undefined},
    ],
  );

  cases(
    'when inputing invalid strings, expect false',
    ({input}) => {
      const result = validationUtil.isFloatString(input);

      expect(result).toBeFalsy();
    },
    [{input: ' '}, {input: '1.0.0'}, {input: 'a'}],
  );
});
