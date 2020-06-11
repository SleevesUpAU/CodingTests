import cases from 'jest-in-case';

import parseUtil from './parseUtil';

describe('parseUtil.getFloat', () => {
  cases(
    'when inputing valid strings, expect the float value',
    ({input, expected}) => {
      const result = parseUtil.getFloat(input);

      expect(result).toEqual(expected);
    },
    [
      {input: '0', expected: 0},
      {input: '0.0', expected: 0},
      {input: '1', expected: 1},
      {input: '1.', expected: 1},
      {input: '1.0', expected: 1},
      {input: '1.1', expected: 1.1},
      {input: '.0', expected: 0},
      {input: '.1', expected: 0.1},
    ],
  );

  cases(
    'when inputing invalid strings, expect undefined',
    ({input}) => {
      const result = parseUtil.getFloat(input);

      expect(result).toBeUndefined();
    },
    [
      {input: ' '},
      {input: ''},
      {input: '.'},
      {input: 'a'},
      {input: null},
      {input: undefined},
    ],
  );
});
