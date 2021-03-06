import React from 'react';
import {View} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faFlag} from '@fortawesome/free-solid-svg-icons';

export default ({color, size}) => {
  return (
    <View>
      <FontAwesomeIcon icon={faFlag} color={color} size={size} />
    </View>
  );
};
