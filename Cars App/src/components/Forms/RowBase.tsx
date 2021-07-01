import React from 'react';
import {StyleSheet, View} from 'react-native';

import Text from 'src/components/Text';

import {constant} from 'src/styles';

const styles = StyleSheet.create({
  container: {
    margin: constant.space.base,
    flexDirection: 'row',
    alignItems: 'center',
  },
  label: {
    flex: 1,
    marginRight: constant.space.base,
  },
  content: {
    flex: 2,
  },
});

export interface Props {
  label: string;
}

const RowBase: React.SFC<Props> = ({label, children}) => (
  <View style={styles.container}>
    <Text style={styles.label} ellipsizeMode="tail" numberOfLines={1}>
      {label}
    </Text>
    <View style={styles.content}>{children}</View>
  </View>
);

export default RowBase;
