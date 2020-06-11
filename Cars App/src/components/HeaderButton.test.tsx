import React from 'react';
import TestRenderer from 'react-test-renderer';

import HeaderButton from './HeaderButton';

describe('HeaderButton', () => {
  test('when pressing the button, onPress gets called', () => {
    const mockOnPress = jest.fn();
    const testRenderer = TestRenderer.create(
      <HeaderButton text="Header Text" onPress={mockOnPress} />,
    );

    testRenderer.root.props.onPress();
    expect(mockOnPress).toBeCalledTimes(1);
  });
});
